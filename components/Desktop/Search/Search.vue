<template>
<div class="search">

    <app-SearchHeader></app-SearchHeader>
    <app-SearchBox></app-SearchBox>
    <app-SearchButton></app-SearchButton>

</div>
  
</template>

<script>


import SearchHeader from './SearchHeader'
import SearchBox from './SearchBox'
import SearchButton from './SearchButton'
export default {
    layout : 'default',
    components : {
        'app-SearchHeader' : SearchHeader,
        'app-SearchBox' : SearchBox,
        'app-SearchButton' : SearchButton
    },
 

}
</script>


<style lang="scss">

@import '../../../assets/sass/main.scss';


.search {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: $color-search-bg;
}

</style>