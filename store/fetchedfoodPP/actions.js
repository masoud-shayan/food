import axios from 'axios'
export default {
    setFoodListWithChecked ({commit} , payload ) {

        commit('setFoodListWithChecked' , payload)
        
    },

    // async fetch ({ store, params }) {
    //     let province = {
    //         province_id : '' ,
    //         token : store.getters['guestToken/getGuestToken']
    //     }
    //     let { data } = await axios.get('http://lastsecond.ir/api/food/foods' , store.getters['guestToken/getGuestToken'])
    //     // store.commit('setStars', data)
    //     console.log(data)
    // },

    async fetchFoodsListPP ({ store, params } , payload) {
        let province = {
            province_id : payload ,
            token : store.getters['guestToken/getGuestToken']
            // token : store.getters['guestToken/getGuestToken']
        }

        let { data } = await axios.post('http://food.local/api/food/foods' , province)
        // store.commit('setStars', data)
        console.log(data)

    }

  }