import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)


Vue.prototype.$myInjectedFunction = (Vuelidate) => console.log("This is an example", string)
