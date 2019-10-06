export default {
  // setSelectedFood (state , payload) {

  //     state.selected = payload    

  // }

  setFoodListWithChecked (state , payload ) {

    let newFoodList = state.foodList.map(el => {
      return({title: el , check : false})
    })

    state.foodListWithCheck = [...newFoodList]    
}
};
