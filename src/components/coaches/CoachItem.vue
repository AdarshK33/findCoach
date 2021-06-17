<template>
  <div>
    <h3 class="title">{{ firstName + ' ' + lastName}}</h3>
    <h4 class="title">${{ rate }}/hour</h4>
    <div>
      <span v-for="area in areas" :key="area">
        
          <v-chip
      class="ma-2"
      color="error"
       style="margin-right:20px"
    >
      {{ area}}
    </v-chip>
      </span>
    </div>

     <div class="actions" >
   
       <div class="text-center">
            <v-btn
              rounded
              color="primary"
              style="font-size:10px"
            :to=" {name:'ContactCoach', params: { id: id  }}"
             >
            Contact
            </v-btn>
      </div>
   
    


      <div class="text-center">
          <v-btn
            rounded
            color="primary"
          style="font-size:10px; margin-left:10px"
          :to="{name:'CoachDetail', params: { id: id  }}"
          >
            View Details
          </v-btn>
      </div>
     </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas','description'],
 
  // computed: {
   
  //   coachContactLink() {
  //     return this.$route.path + '/' + this.id + '/contact' // /coaches/c1/contact
  //   },
  //   coachDetailsLink() {
  //     return this.$route.path + '/' + this.id; // /coaches/c1
  //   }
  
  // },
}
</script>

<style scoped>
a {
  float: left;
}
#description{
  text-align: center;
}
.title{
  width: 100%;
  justify-content: center;
}
.actions{
  margin-top: 20px!important;
  padding-bottom:50px!important;
  padding-left: 85px;
}



</style>