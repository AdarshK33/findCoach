<template>
  <div>
    <h3 class="title">{{ firstName + ' ' + lastName}}</h3>
    <h4 class="title">${{ rate }}/hour</h4>
    <div>
      <span v-for="area in areas" :key="area">
          <v-btn  style="margin-right:20px" color="purple darken-2">    {{ area}}
          </v-btn>
      </span>
    </div>

     <div class="actions" >
   
      <router-link :to="coachContactLink">
       <div class="text-center">
            <v-btn
              rounded
              color="primary"
              style="font-size:10px"
           link :to=" {name:'ContactCoach'}" >
            Contact
            </v-btn>
      </div>
      </router-link>
    
    <router-link :to="coachDetailsLink">

      <div class="text-center">
          <v-btn
            rounded
            color="primary"
          style="font-size:10px; margin-left:10px"
         link :to="{name:'CoachDetail'}"
          >
            View Details
          </v-btn>
      </div>

    </router-link>
     </div>

<!--  -->
   
  <!--  -->
  </div>





















  
  
  

</template>

<script>
export default {
  props: ['id', 'firstName', 'lastName', 'rate', 'areas','description'],
 
  computed: {
   
    coachContactLink() {
      return this.$route.path + '/' + this.id + '/contact' // /coaches/c1/contact
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.id; // /coaches/c1
    }
  },
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