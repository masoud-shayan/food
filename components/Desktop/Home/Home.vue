<template>
  <div class="container">
    <div class="logo">
       <img class="logo__img" :src="require('../../../assets/img/logo@2x.png')" alt="logo">
    </div>
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
@import '../../../assets/sass/main.scss';
body {
  font-size: $base-font-size;
    min-height: 100vh;
    width: 100%;
   .container {
     min-height: 100vh;
     width: 100%;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: center;
     background-image: url('../../../assets/svg/Home/back.svg');

              


     .mainSVGContainer {


       .map {
         width: 90vw;
         height: 90vh;


       }
     }


     .logo {
       display: flex;
       align-items: flex-start;

       .logo__img {
          width: 11rem;
          height: auto;
          margin-top: 2rem;
       }
     }

  }
}

</style>