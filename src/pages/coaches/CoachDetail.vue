<template>
<v-app>
  DETAILS FOR COACH

  <router-view></router-view>
  <router-link to="/coaches/c1/contact">Contact</router-link>
  </v-app>

</template>



<script>


export default {
  name: 'CoachDetails',
}
</script>


<style scoped>
</style>