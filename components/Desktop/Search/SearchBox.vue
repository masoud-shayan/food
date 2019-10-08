<template>
    <div class="search__box" >

        <div class="search__box-head">
            <img  class="" :src="require('../../../assets/img/search@2x.png')" alt="search">

            <div class="search__box-input">
                <input type="text" placeholder="جستجو محبوب‌ترین غذای خود در استان اصفهان" v-model="search">
            </div>
        </div>

        <div class="search__box-body">

            <div class="search__box-body-content">
                <label v-for="f  in filteredFoodList" :key="f.id">
                    <p >{{ f.title }}</p>
                    <input type="checkbox" name="selectedFood" @click="maxChecked($event , f.id)">
                    <div :class="{divChecked : checkedFinder(f.id)}">
                        <img :src="require('../../../assets/img/check-mark@2x.png')" alt="checked" :class="{imgChecked : checkedFinder(f.id)}">
                    </div>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : ['P_ID'],
    data () {
        return {
            search : '',
            foods :[],
            selectedFood :[]        
        }
    },

    methods: {
        maxChecked(event , id) {

            const maxAllowed = 3;
            let count = 0 ;


           let index = this.foods.findIndex(el => {
                return el.id === id
            })  

            this.foods[index].check = !this.foods[index].check
  
            this.foods.forEach(el => {
                if(el.check) count++
            })
    

            if(count > maxAllowed){

                this.foods[index].check = false

            }else {
      
                this.$store.dispatch('selectedfoodPP/setSelectedFood' , count)

            }
                  
            
        },
        checkedFinder (id) {
            let index = this.foods.findIndex(el => {
                return el.id === id
            })
            return this.foods[index].check
        },
        isArabic (letter) {
            if (typeof(letter) == "undefined" || letter == null) return false
            

            let code = letter.charCodeAt(0);
            //1648 - superscript alif
            //1619 - madd: ~
            return (code == 1600 || code == 1648 || code >= 1612 && code <= 1631); //tashkee

        },
        fixArabic(input) {
                let output = "";
                //todo consider using a stringbuilder to improve performance
                for (let i = 0; i < input.length; i++)
                {
                    let letter = input.charAt(i);
                    if (!this.isArabic(letter)) //tashkeel
                    output += letter;                                
                }


                return output;                     
        }
    },
    computed :{
        filteredFoodList () {
            let searchOutput = this.fixArabic(this.search) 
            console.log(searchOutput)
            if(searchOutput){
                return this.foods.filter((food , index)=> { 
                     return food.title.includes(searchOutput)
                })
            }else{
                    return this.foods;
                }
            console.log(this.foods) 

            },
        foodList () {
            let secondFoods = []
            let firstFoods = this.$store.state.fetchedfoodPP.foodList
            // this.$store.dispatch('fetchedfoodPP/fetchFoodsListPP' , 4)
            let id = 0;
            firstFoods.forEach(el => {
                secondFoods.push({title : el , check : false, id : id ++ })
            });
            this.foods = secondFoods

            console.log(secondFoods)
         },
        searched () {
            return this.fixArabic(this.search)
        }
    },
  

    mounted (){
        this.foodList
    }
        
        
}
</script>

<style lang="scss">

.search__box {
  width: 528px;
  height: 70vh;
  opacity: 0.71;
  border-radius: 48px;
  background-color: #c18430;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;


  
  &-head {
    display: flex;
    justify-content: center;

        img {
        width: 28px;
        height: auto;
        position: absolute;
        z-index: 10;
        transform: translate(205px,3vh);

    }

  }
    .search__box-input {
        width: 476px;
        height: 5vh;
        opacity: 0.3;
        border-radius: 62px;
        background-color: #000000;
        transform: translateY(17px);
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;


    input {
        background-color: transparent;
        width: 350px;
        height: 3.5vh;
        opacity: 0.8;
        font-family: iranyekan;
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.72;
        letter-spacing: -0.9px;
        text-align: center;
        border: none;
        outline: none;
        color: white;

    }

  }


  .search__box-body {
        width: 476px;
        height: 58vh;
        font-family: iranyekan;
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 3.89;
        letter-spacing: -0.9px;
        text-align: right;
        color: #ffffff;
        // border: 1px solid green;
        transform: translateY(4.5vh);
        display: flex;
        align-items: flex-start;
        overflow-y: scroll;
        direction: ltr;

        &::-webkit-scrollbar {
            width: 10px;
            border-radius: 50px;
            background-color: rgba(0,0,0,0.3);
        }

        &::-webkit-scrollbar-thumb {
            // width: 11px;
            height: 50px;
            border-radius: 50px;
            background-color: #fac116;
        }


        

        // &-scrollbarcontainer {
        //     border-color: black;
        //     width: 10px;
        //     height: 66vh;
        //     border-radius: 50px;
        //     background-color: #9d6e2b;
        //     transform: translateX(10px);


        //     &-scrollbar {
        //         width: 10px;
        //         height: 213px;
        //         border-radius: 50px;
        //         background-color: #fac116;
        //     }
        // }


        &-content {
            width: 100%;
            margin: 0;
            display: flex;
            flex-direction: column;
            direction: rtl;
            margin-right: 20px;




            label {
                height: 6vh;
                cursor: pointer;
                user-select: none;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid rgba(0, 0, 0, 0.3);

                input {
                    position: absolute;
                    opacity: 0;
                    cursor: pointer;
                    height: 0;
                    width: 0;
                }

                div {

                    width: 30px;
                    height: 30px;
                    border: solid 3px #ffc715;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;


                    img {
                        visibility: hidden;
                        width: 20px;
                        height: 20px;
                        object-fit: contain;
                    }
                }

                // input:checked ~ div{
                //     background-color: #ffc715;
                // }
                // input:checked ~ div img{
                //    visibility: visible;

                // }
            }


        }



  }


}


.divChecked {
        width: 30px;
        height: 30px;
        border: solid 3px #ffc715;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffc715;
}

.imgChecked {
        // width: 20px;
        // height: 20px;
        // object-fit: contain;    
        visibility: visible !important;
}


</style>