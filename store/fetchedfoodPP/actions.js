import axios from 'axios'
export default {
    setFoodListWithChecked ({commit} , payload ) {

        commit('setFoodListWithChecked' , payload)
        
    }
  }