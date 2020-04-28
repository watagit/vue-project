new Vue({
  el: '#use-computed',
  data: {
    number: '0'
  },
  computed: {
    answer: function () {
      if (this.number % 2 != 0) return 'Odd';
      return 'Even';
    }
  },
});

new Vue({
  el: '#use-methods',
  data: {
    number: '0'
  },
  methods: {
    answer: function () {
      if (this.number % 2 != 0) return 'Odd';
      return 'Even';
    }
  },
});