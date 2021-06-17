<template>
 <b-row>
        <b-col></b-col>
      <b-col>
  <form>
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="20"
      label="FirstName"
      required
      
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="last"
      :error-messages="lastErrors"
      :counter="20"
      label="LastName"
      required
      @input="$v.last.$touch()"
      @blur="$v.last.$touch()"
    ></v-text-field>
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
      label="Description"
      required
      outlined
      height="100px"
      width="100px"
     
      @input="$v.Description.$touch()"
      @blur="$v.Description.$touch()"
    ></v-text-field>
   


     <v-text-field
      v-model="rate"
      :error-messages="rateErrors"
        :counter="3"
      label="rate"
      value="10"
      prefix="$"
      type="number"
      required
      @input="$v.rate.$touch()"
      @blur="$v.rate.$touch()"
    ></v-text-field>

    <v-checkbox
      v-model="Frontend"
      :error-messages="FrontendErrors"
      label="Frontend"
      required
      @change="$v.Frontend.$touch()"
      @blur="$v.Frontend.$touch()"
    ></v-checkbox>

    <v-checkbox
      v-model="Backend"
      :error-messages="BackendErrors"
      label="Backend"
      required
      @change="$v.Backend.$touch()"
      @blur="$v.Backend.$touch()"
    ></v-checkbox>


   <v-checkbox
      v-model="Carrer"
      :error-messages="CarrerErrors"
      label="Carrer"
      required
      @change="$v.Carrer.$touch()"
      @blur="$v.Carrer.$touch()"
    ></v-checkbox>

    
  
    
   
    <v-btn
      class="mr-4"
      @click="submit"
       color="sucess"

    >
      submit
    </v-btn>
    <v-btn
     @click="clear"
      color="error"
      >
      clear
    </v-btn>
  </form>
    </b-col>
        <b-col></b-col>
      </b-row>
</template>

<script>


export default {
  name: 'coachRegistration',
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
      Frontend:[],
      Backend:[],
      Carrer:[],
    }),

    computed: {

      // checkboxErrors () {
      //   const errors = []
      //   if (!this.$v.checkbox.$dirty) return errors
      //   !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      //   return errors
      // },
       
   
     
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('FirstName must be at most 20 characters long')
        !this.$v.name.required && errors.push('FirstName is required.')
        return errors
      },
        lastErrors () {
        const errors = []
        if (!this.$v.last.$dirty) return errors
        !this.$v.last.maxLength && errors.push('LastName must be at most 20 characters long')
        !this.$v.last.required && errors.push('LastName is required.')
        return errors
      },
       DescriptionErrors () {
        const errors = []
        if (!this.$v.Description.$dirty) return errors
        !this.$v.Description.maxLength && errors.push('Description must be at most 200 characters long')
        !this.$v.Description.required && errors.push('Description is required.')
        return errors
      },
       rateErrors () {
        const errors = []
        if (!this.$v.rate.$dirty) return errors
        !this.$v.rate.maxLength && errors.push('rate must be at most in $')
        !this.$v.rate.required && errors.push('rate is required.')
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
        alert("SUCCESS!! :-)\n\n" + "    "+"Name:"+(this.name)+ "     "+"email:"+ this.email+ "    "+"description:"+this.Description +  " "+"rate:"+this.rate);
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.Description=''
        this.rate=''
        this.Frontend=''
        this.Backend=''
        this.Carrer=''
      
      },
    },
  }
</script>
<style scoped>

</style>