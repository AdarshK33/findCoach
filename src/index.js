import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        coaches: [{
                id: 1,
                firstName: 'Maximilian',
                lastName: 'Schwarzmüller',
                areas: ['frontend', 'backend', 'career'],
                description: "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                hourlyRate: 30
            },
            {
                id: 2,
                firstName: 'Julie',
                lastName: 'Jones',
                areas: ['frontend', 'career'],
                description: 'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                hourlyRate: 30
            }
        ],
        requests: [],

    },

    mutations: {
				   registerCoach(state, payload) {
				state.coaches.push(payload);
			}, 
		  addRequest(state, payload) {
					state.requests.push(payload)
        }
    },
    actions: {registerCoach(context, data) {
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
   contactCoach(context, payload) {

            context.commit('addRequest', payload)
        } 
    },
 getters: { coaches(state) {
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
   requests(state) {
            return state.requests;
        },
        hasRequests(state) {
            return state.requests && state.requests.length > 0;
        }
       
    }
});

export default store;