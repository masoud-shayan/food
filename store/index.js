import axios from 'axios'

export const actions = {
    async nuxtServerInit ({ dispatch }) {
        try {
            const res =  await axios.post('http://lastsecond.ir/api/food/guest-token')
            //  console.log(res.data)

            if(res.data.status) {
                await dispatch('guestToken/setGuestToken' , res.data.guest_token)
                console.log(res.data.guest_token)
            }
            else {
                await dispatch('guestToken/deleteGuestToken')
                console.log('error')  
            }


            //  console.log(res.data.guest_token)
              
             }catch (err) {
                 console.log(err)
             }       
      }
  }

