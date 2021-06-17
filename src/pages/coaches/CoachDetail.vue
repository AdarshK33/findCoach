<template>
<div>
   <b-row>
        <b-col></b-col>
      <b-col>
  
  <section>
    <v-card>
      <h2  style="margin-bottom:20px">{{ fullName }}</h2>
      <h5 style="margin-bottom:20px">${{ rate }}/hour</h5>
    </v-card>
  </section>
  <section>
    <v-card>
      <header style="margin-top:20px;margin-bottom:20px; height:150px">
        <h2 style="margin-bottom:20px">Interested? Reach out now!</h2>
        <v-btn  
        :to="contactLink" 
        
        rounded
        color="primary"
        >Contact
        </v-btn>

      </header>
        <router-view></router-view>
    </v-card>
  </section>  
    <v-card>
      <span v-for="area in areas" :key="area" :type="area" :title="area">
         <v-chip
      class="ma-2"
      color="error"
       style="margin-right:20px"
    >
      {{ area}}
         </v-chip>
      </span>
        
     
      <p style="margin-top:20px;text-align:justify padding-left:20px;padding-right:20px">{{ description }}</p>
      <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        
      
      </v-list-item>
    </v-card-actions>
    </v-card>
     </b-col>
        <b-col></b-col>
      </b-row>

</div>
  




</template>



<script>


export default {
  name: 'CoachDetails',
  props:['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return this.$route.path + '/' +'/contactDetails';
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches'].find(
      (coach) => coach.id === this.id
    );
  },
}
</script>


<style scoped>
a{
  height: 0vh;
}
</style>