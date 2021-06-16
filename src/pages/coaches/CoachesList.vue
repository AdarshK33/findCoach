<template>

  <v-app>

   

       <v-card
          class="mx-auto"
          max-width="600"
          tile
        >
           <v-row
              align="end"
              class="fill-height"
            >
              <v-col
              align-self="start"
                class="pa-0"
                cols="12">

       
    <coach-filter @change-filter="setFilters"></coach-filter>
              </v-col>
           </v-row>
       </v-card>
  
   
    <div class="controls" style="margin-top:20px">
        
     <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="secondary"
      @click="loader = 'loading'"
    >
     Refresh
    </v-btn>

        <v-btn link to="/registation"  color="green"
      outlined>Register as Coach</v-btn>
      </div>
    <v-card
    class="mx-auto"
    max-width="2000px"
    tile
    v-if="hasCoaches"
  >

    <v-list-item v-for="profile in filteredCoaches" :key="profile.id">
      <v-list-item-content>
        <v-card
          class="mx-auto"
          max-width="434"
          tile
        >
          <v-img
            height="100%"
            src="https://picsum.photos/1920/1080?random"
          >
            <v-row
              align="end"
              class="fill-height"
            >
              <v-col
                align-self="start"
                class="pa-0"
                cols="12"
              >
                <v-avatar
                  class="profile"
                  color="grey"
                  size="164"
                  tile
                >
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/?avatarStyle=&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  >
                </v-img>
                </v-avatar>
              </v-col>
              <v-col class="py-0">
                <v-list-item
                  color="rgba(0, 0, 0, .4)"
                  dark
                >
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      {{profile.firstName}}
                    </v-list-item-title>
                    <v-list-item-subtitle></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
            <ul>
              <coach-item
                :key="profile.id"
                :id="profile.id"
                :first-name="profile.firstName"
                :last-name="profile.lastName"
                :rate="profile.hourlyRate"
                :areas="profile.areas"
              ></coach-item>
            </ul>
        </v-card>
      </v-list-item-content>
    </v-list-item>
  </v-card>
  </v-app>
</template>

<script>
 import CoachItem from '../../components/coaches/CoachItem.vue';
 import CoachFilter from '../../components/coaches/CoachFilter.vue';

export default {
  name: 'CoachList',
  components: {
    CoachItem,
    CoachFilter
  },
   data () {
      return {
        loader: null,
        loading: false,

      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
       
      }
    },
    watch: {
      loader () {
        this.$router.go(0)
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },
 

  computed: {

    filteredCoaches() {
      const coaches  = this.$store.getters['coaches'];
        return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('FRONT-END')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('BACK-END')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('CAREER')) {
          return true;
        }
        return false;
      });




    },
    hasCoaches() {
      return this.$store.getters['hasCoaches'];
    }
  },
   methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
  
};


</script>
<style scoped>


</style>



