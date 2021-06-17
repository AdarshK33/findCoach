import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

// import requestsModule from './modules/requests/index.js';

const store = new Vuex.Store({

    state: {
        coaches: [{
                id: 'c1',
                firstName: 'Maximilian',
                lastName: 'Schwarzmüller',
                areas: ['frontend', 'backend', 'career'],
                description: "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                hourlyRate: 30
            },
            {
                id: 'c2',
                firstName: 'Julie',
                lastName: 'Jones',
                areas: ['frontend', 'backend', 'career'],
                description: 'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                hourlyRate: 30
            }
        ],
        userId: 'c3',
        requests: []

    },
    mutations: {
        registerCoach(state, payload) {
            state.coaches.push(payload);
        },
        addRequest(state, payload) {
            state.requests.push(payload);
        },
        setRequests(state, payload) {
            state.requests = payload;
        }
    },
    actions: {
        registerCoach(context, data) {
            const coachData = {
                id: context.rootGetters.userId,
                firstName: data.first,
                lastName: data.last,
                description: data.desc,
                hourlyRate: data.rate,
                areas: data.areas
            };

            context.commit('registerCoach', coachData);
        },
        async contactCoach(context, payload) {
            const newRequest = {
                userEmail: payload.email,
                message: payload.message
            };
            const response = await fetch(`https://vue-http-demo-85e9e.firebaseio.com/requests/${payload.coachId}.json`, {
                method: 'POST',
                body: JSON.stringify(newRequest)
            });
            console.log(response)
            const responseData = await response.json();

            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed to send request.');
                throw error;
            }

            newRequest.id = responseData.name;
            newRequest.coachId = payload.coachId;

            context.commit('addRequest', newRequest);
        },
        async fetchRequests(context) {
            const coachId = context.rootGetters.userId;
            console.log(coachId)
            const response = await fetch(`https://vue-http-demo-85e9e.firebaseio.com/requests/${coachId}.json`);
            const responseData = await response.json();

            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed to fetch requests.');
                throw error;
            }

            const requests = [];

            for (const key in responseData) {
                const request = {
                    id: key,
                    coachId: coachId,
                    userEmail: responseData[key].userEmail,
                    message: responseData[key].message
                };
                requests.push(request);
            }

            context.commit('setRequests', requests);
        }
    },
    getters: {
        coaches(state) {
            return state.coaches;
        },
        hasCoaches(state) {
            return state.coaches && state.coaches.length > 0;
        },
        isCoach(_, getters, _2, rootGetters) {
            const coaches = getters.coaches;
            const userId = rootGetters.userId;
            return coaches.some(coach => coach.id === userId);
        },
        userId(state) {
            return state.userId;
        },
        requests(state, _, _2, rootGetters) {
            const coachId = rootGetters.userId;
            return state.requests.filter(req => req.coachId === coachId);
        },
        hasRequests(_, getters) {
            return getters.requests && getters.requests.length > 0;
        }
    }
});

export default store;