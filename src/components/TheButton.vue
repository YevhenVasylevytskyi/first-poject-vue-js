<template>
    <button v-on="$listeners" v-bind:type="type" :class="{btn: true, 'btn--outlined': outlined}">
        <slot> </slot>
    </button>
</template>

<script>
    export default {
        name: 'TheButton',
        props: {
            type: {
                type: String,
                default: 'button'
            },
            outlined: {
                type: Boolean,
                default: false
            }
        }        
    }
</script>

<style scoped lang="scss">
.btn {
        display: inline-block;
        font-size: 18px;
        background: #ff6620;
        color: #fff;
        cursor: pointer;
        min-width: 220px;
        border: 1px solid transparent;
        padding: 8px 15px;

        &--outlined {
            background: none;
            border: 1px solid #ff6620;
            color: #ff6620;
        }
    }
</style>