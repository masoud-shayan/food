<template>
    <div class="search__box">

        <div class="search__box-head">
            <img  class="" :src="require('../../../assets/img/search@2x.png')" alt="search">

            <div class="search__box-input">
                <input type="text" placeholder="جستجو محبوب‌ترین غذای خود در استان اصفهان">
            </div>
        </div>

        <div class="search__box-body">
            <div class="search__box-body-scrollbarcontainer">
                <div class="search__box-body-scrollbarcontainer-scrollbar"></div>
            </div>
            <div class="search__box-body-content">
                <ul >
                    <li>
                        <p>بریونی یا بریانی</p>
                        <div >

                        </div>

                    </li>
                </ul>
            </div>
        </div>




    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.search__box {
  width: 528px;
  height: 81.5vh;
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
        height: 6vh;
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
        height: 67.5vh;
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
        

        &-scrollbarcontainer {
            border-color: black;
            width: 10px;
            height: 66vh;
            border-radius: 50px;
            background-color: #9d6e2b;
            transform: translateX(10px);


            &-scrollbar {
                width: 10px;
                height: 213px;
                border-radius: 50px;
                background-color: #fac116;
            }
        }


        &-content {
            width: 100%;
            margin: 0;


            ul{
                width: 100%;
                height: 7vh;
                border-bottom: 1px solid rgba(0, 0, 0, 0.3);
                list-style: none;
                margin : 0;
                padding: 2px;


                li {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0;
                    margin: 0;


                    p {
                        margin: 0;


                    }

                    div {
                        width: 37px;
                        height: 37px;
                        border: solid 3px #ffc715;
                        border-radius: 50%;
                    }
                }

            }

        }



  }


}



</style>