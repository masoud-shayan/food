<template>
  <div class="home__container">
     <div class="logo">
       <img class="logo__img" :src="require('../../../assets/img/logo@2x.png')" alt="logo">
     </div>
     <!-- <h3>محبوب‌ترین غذای استان خود را انتخاب کنید؟</h3>
     <h5>شما میتوانید تا سه مرتبه و در هر بار، به یک استان و سه غذای محبوب آن استان رای دهید</h5> -->
     <div class="mainSVGContainer">
       <app-Map class="map"></app-Map>
       <!-- <app-Iran></app-Iran> -->
     </div> 
  </div>
</template>

<script>
import Iran from  './Iran'
import Map from  './Map'
export default {
  methods :{
    action(event) {
        console.log(event.target.id)
    }
  },
  middleware: 'userTypeDetector',
  components : {
    'app-Iran' : Iran,
    'app-Map' : Map
  }
}
</script>

<style lang='scss'>

  .home__container {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: url('../../../assets/svg/Home/back.svg');
        
    .mainSVGContainer {
      // transform: translateY(-40px);

      .map {
        width: 90vw;
        height: 90vh;
        margin-top: 2vh;
        margin-bottom: 0;
      }
      @media only screen and (max-width: 1200px) {


        .map {
            width: 90vw;
            height: 94vh;
            margin-top: 0;
      }
      }

    }

  

    .logo {
      display: flex;
      align-items: flex-start;

      .logo__img {
        width: 10vw;
        height: auto;
        margin-top: 2vh;
      }

      @media only screen and (max-width: 1700px) {
      .logo__img {
         width: 15vw;
        height: auto;
      }
      }
    }

}

















//  h3 {
//         width: 50vw;
//         height: 6vh;
//         font-family: iranyekan;
//         font-size: 2vw;
//         font-weight: bold;
//         font-style: normal;
//         font-stretch: normal;
//         line-height: 1.11;
//         letter-spacing: normal;
//         text-align: center;
//         color: #714508;
//         z-index: 100;
//         position: absolute;
//         padding: 0;
//         margin: 0;
//         transform: translateY(14vh);
//         align-items: center;
//     }

//     h5 {
//       width: 954px;
//       height: 48px;
//       font-family: iranyekan;
//       font-size: 1.3vw;
//       font-weight: normal;
//       font-style: normal;
//       font-stretch: normal;
//       line-height: 1.71;
//       letter-spacing: -1.4px;
//       text-align: left;
//       color: #714508;
//       z-index: 100;
//       position: absolute;
//       padding: 0;
//       margin: 0;
//       transform: translateY(20vh);
//       text-align: center;
//     }

</style>