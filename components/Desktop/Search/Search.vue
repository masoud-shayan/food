<template>
    <div class="search">
        <div class="buttons">
            <div class="close">
                <img class="logo__img" :src="require('../../../assets/img/delete@2x.png')" alt="logo">
            </div>
        </div>


        <app-SearchHeader></app-SearchHeader>
        <app-SearchBox :pId="P_ID" ></app-SearchBox>
        <app-SearchButton></app-SearchButton>
        <div class="logo">
            <img class="logo__img" :src="require('../../../assets/svg/logo.svg')" alt="logo">
        </div>

    </div>
</template>

<script>


import SearchHeader from './SearchHeader'
import SearchBox from './SearchBox'
import SearchButton from './SearchButton'
export default {
    data(){
        return {
            P_ID : ''
        }
    },
    layout : 'default',
    components : {
        'app-SearchHeader' : SearchHeader,
        'app-SearchBox' : SearchBox,
        'app-SearchButton' : SearchButton
    },
    mounted () {
        // console.log(this.$route.query.Province_ID)
        // if(this.$route.path)
        this.P_ID = this.$route.query.Province_ID
        console.log(this.$route.history)

    }

 

}
</script>


<style lang="scss">

@import '../../../assets/sass/main.scss';


.search {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: $color-search-bg;


    .logo {
        transform: translateX(42vw);
        img {
            width: 200px;
            height: auto;
        }
    }

    .buttons {
        direction: ltr;
        width: 100%;
        height: 6vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .close {
            width: 60px;
            height: 95%;
            border-radius: 50%;
            transform: translate(20px , 10px);
            background-color: #9d6e2b;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 18px;
                height: 2vh;
            }
        }

    }
}

</style>