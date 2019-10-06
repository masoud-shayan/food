export default {
  getFoodList(state) {
    return state.foodList;
  },
  foodListWithCheck(state) {
    let newFoodList = state.foodList.map(el => {
      return({title: el , check : false})
    })
    // state.foodListWithCheck = [...newFoodList]
    return newFoodList;
  }
};
