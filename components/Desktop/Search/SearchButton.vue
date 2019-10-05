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
    height: 6vh;
    border-radius: 62px;
    background-color: #ffec9d;
    transform: translateY(-4vh);
    display: flex;
    align-items: center;
    justify-content: space-around;


    &-step {

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
        transform: translate(17px , 0.3vh);
    }

    &-text {

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