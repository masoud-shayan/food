<template>
<div class="search__box-button">
    <div class="search__box-button-step">3/1</div>
    <div class="search__box-button-text">ثبت</div>

</div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss">

.search__box-button {
    width: 250px;
    height: 6.5vh;
    border-radius: 62px;
    background-color: #ffec9d;
    transform: translateY(-5vh);
    display: flex;
    align-items: center;
    justify-content: space-around;


    &-step {
        // background-color: white;
        // width: 2vw;
        // height: 3vh;
        font-family: iranyekan;
        font-size: 22px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.71;
        letter-spacing: -1.4px;
        text-align: center;
        color: #cd9945;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateX(17px);
    }

    &-text {
        // background-color: black;
        // width: 2vw;
        // height: 3vh;
        font-family: iranyekan;
        font-size: 22px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.14;
        letter-spacing: normal;
        text-align: center;
        color: #714508;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateX(60px);


    }

}



</style>