import Vue from 'vue'

const Button = Vue.component('BtnAll', {
    render(createElement) {
        return createElement('button', this.$slots.default)
    }
})

export default Button