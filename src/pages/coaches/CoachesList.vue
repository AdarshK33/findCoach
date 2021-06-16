<template>
  <v-app>
    <div class="controls" style="margin-top:10px">
        
     <v-btn
      class="ma-2"
      :loading="loading"
      :disabled="loading"
      color="secondary"
      @click="loader = 'loading'"
    >
     Refresh
    </v-btn>

        <v-btn link to="/registation"  color="light-green">Register as Coach</v-btn>
      </div>
    <v-card
    class="mx-auto"
    max-width="2000px"
    tile
    v-if="hasCoaches"
  >

    <v-list-item v-for="profile in filteredCoaches" :key="profile">
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
export default {
  name: 'CoachList',
  components: {
    CoachItem
  },
   data () {
      return {
        loader: null,
        loading: false,
       
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
      return this.$store.getters['coaches'];
    },
    hasCoaches() {
      return this.$store.getters['hasCoaches'];
    }
  },
};


</script>
<style scoped>


</style>



