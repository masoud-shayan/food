export default {
  setGuestToken (state , payload) {
      state.guestToken = payload   
  },
  deleteGuestToken (state) {
    state.guestToken = ''
  }
};
