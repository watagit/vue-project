Vue.component('my-component', {
  template: '<div><button v-on:click="change_function">{{ button_text }}</button></div>',
  data: function () {
    return {
      button_text: 'お前を芸術品に仕立ててや・・・'
    }
  },
  methods: {
    change_function: function () {
      this.button_text = '仕立て上げてやんだよ'
    }
  },
})

new Vue({
  el: '#example'
})