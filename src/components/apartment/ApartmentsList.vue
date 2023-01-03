<template>
    <TheContainer>
        <div class="apartments-list">        
            <ApartmentsItem 
                v-for="{id, descr,rating, imgUrl, price} in items"
                :key="id"
                :descr="descr"
                :rating="rating"
                :imgSrc="imgUrl"
                :price="price"
                class="apartments-list__item"
            />        
        </div>
    </TheContainer>
</template>

<script>
import ApartmentsItem from './ApartmentsItem.vue';
import TheContainer from '../shared/TheContainer.vue';

export default {
    name: 'ApartmentsList',
    components: {
        ApartmentsItem,
        TheContainer
    },
    props: {
        items: {
            type: Array,
            default: () => []
        }
    }     
    }
</script>

<style lang="scss" scoped>
    .apartments-list {
        display: flex;
        flex-wrap: wrap;
        margin-left: -15px;
        margin-right: -15px;

        &__item {
            margin-bottom: 30px;
        }
    }
</style>