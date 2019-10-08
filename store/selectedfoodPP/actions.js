import axios from 'axios'
export default {
    setSelectedFood ({commit} , payload ) {

        commit('setSelectedFood' , payload)
        
    },

  }