import axios from 'axios'
export default {
    setGuestToken ({commit} , payload ) {
        commit('setGuestToken' , payload)
    } ,

    deleteGuestToken ({commit} ) {
        commit('deleteGuestToken')
    }
  }