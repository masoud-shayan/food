<template>
    <div class="search__box">
        <div class="search__box-input">
            <input type="text" placeholder="x">
        </div>
        <div class="search__box-list">
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
  

  .search__box-input {
        width: 476px;
        height: 7vh;
        opacity: 0.2;
        border-radius: 62px;
        background-color: #000000;
        transform: translateY(17px);
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;


    input {
        width: 331px;
        height: 3.5vh;
        opacity: 0.32;
        font-family: IRANYekan;
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.72;
        letter-spacing: -0.9px;
        text-align: center;
        color: #ffffff;
    }
  }

  .search__box-list {
        width: 476px;
        height: 67.5vh;
        font-family: IRANYekan;
        font-size: 18px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 3.89;
        letter-spacing: -0.9px;
        text-align: right;
        color: #ffffff;
        background-color: rgb(180, 165, 165);
        transform: translateY(4.5vh);

  }

}



</style>