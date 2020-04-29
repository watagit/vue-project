var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})

var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  methods: {
    greet: function (event) {
      alert('Hello' + this.name + '!')
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

new Vue({
  el: '#example-3',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})

new Vue({
  warn: function (message, event) {
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
})
