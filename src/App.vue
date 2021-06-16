<template>
  <v-app >
 <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
    

      <v-toolbar-title> 
        <router-link :to="{ name: 'CoachesList' }" style="color:white">Find a coach</router-link>
      </v-toolbar-title>
  
      <v-spacer></v-spacer>

      <v-btn text>
            <router-link :to="{ name: 'CoachesList' }" style="color:white"> All Coaches</router-link>
      </v-btn>
      
      <v-btn text>
           <router-link :to="{ name: 'RequestsReceived' }" style="color:white">Requests</router-link>
      </v-btn>
     
    
     
    
    </v-app-bar>
  </div>


  
    <!-- <b-nav v-if="loading==false" value=true > -->
    
     <router-view></router-view>
    <!-- <b-nav-item active><router-link :to="{ name: '/' }">Find a coach</router-link></b-nav-item>
      <b-nav-item> <router-link :to="{ name: 'CoachesList' }"> All Coaches</router-link></b-nav-item>
      <b-nav-item><router-link :to="{ name: 'RequestsReceived' }">Requests</router-link></b-nav-item> -->
    <!-- </b-nav> -->

   
    

    
  </v-app>
 
 
  
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>


<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}






 a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

 a {
  color: white;
  margin: 0;
}

 a:hover,
 a:active,
a.router-link-active {
  border-color: transparent;
}



</style>


// <script>
//   export default {
//     data() {
//       return {
//         loading: false,
//         loadingTime: 0,
//         maxLoadingTime: 3
//       }
//     },
//     watch: {
//       loading(newValue, oldValue) {
//         if (newValue !== oldValue) {
//           this.clearLoadingTimeInterval()

//           if (newValue) {
//             this.$_loadingTimeInterval = setInterval(() => {
//               this.loadingTime++
//             }, 1000)
//           }
//         }
//       },
//       loadingTime(newValue, oldValue) {
//         if (newValue !== oldValue) {
//           if (newValue === this.maxLoadingTime) {
//             this.loading = false
//           }
//         }
//       }
//     },
//     created() {
//       this.$_loadingTimeInterval = null
//     },
//     mounted() {
//       this.startLoading()
//     },
//     methods: {
//       clearLoadingTimeInterval() {
//         clearInterval(this.$_loadingTimeInterval)
//         this.$_loadingTimeInterval = null
//       },
//       startLoading() {
//         this.loading = true
//         this.loadingTime = 0
//       }
//     }
//   }

// </script>

