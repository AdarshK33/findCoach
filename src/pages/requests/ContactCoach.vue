<template>
 <b-row>
     
  <form>
    
   
    <v-text-field
      v-model="email"
      :error-messages="emailErrors"
      label="E-mail"
      required
      @input="$v.email.$touch()"
      @blur="$v.email.$touch()"
    ></v-text-field>
   
 <v-text-field
      v-model="Description"
      :error-messages="DescriptionErrors"
      :counter="200"
      label="Message"
      required
      outlined
      height="100px"
      width="100px"
     
      @input="$v.Description.$touch()"
      @blur="$v.Description.$touch()"
    ></v-text-field>
   



    
    
    <v-btn
      class="mr-4"
      @click="submit"
       color="sucess"

    >
      Send Message
    </v-btn>
    <v-btn
     @click="clear"
      color="error"
      >
      clear
    </v-btn>
  </form>
   
      </b-row>
</template>

<script>


export default {
  
  name: '',
}
</script>


<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'


  export default {
    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(20) },
      last:{ required, maxLength: maxLength(20) },
      email: { required, email },
     Frontend:{ required },
      Backend:{ required },
      Carrer:{ required },
      
     selected:{ required },
     
      rate:{required,maxLength: maxLength(3)},
      Description:{required ,maxLength: maxLength(200)},
      
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      name: '',
      last:'',
      email: '',
      Description:'',
      rate:'',
      select: null,
      frontend:[],
      backend:[],
    
    
    }),
  
    computed: {
     
       DescriptionErrors () {
        const errors = []
        if (!this.$v.Description.$dirty) return errors
        !this.$v.Description.maxLength && errors.push('Description must be at most 200 characters long')
        !this.$v.Description.required && errors.push('Description is required.')
        return errors
      },
      
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
     
      submit () {
        this.$v.$touch()
       alert("SUCCESS!! :-)\n\n" + "     "+"email:"+ this.email+ "    "+"description:"+this.Description +  " "+"rate:"+this.rate +"Carrer" +this.Carrer);
        
        
        
      this.$store.dispatch('requests/contactCoach', {
        email: this.email,
        message: this.Description,
        coachId: this.$route.params.id
      });
      this.$router.replace('/requests-received');

      },
      clear () {
        this.$v.$reset()
        
        this.email = ''
        this.Description=''
       
      },
        
    },
  }
</script>
<style scoped>

</style>