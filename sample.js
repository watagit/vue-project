Vue.filter('date-filter', function (val) {
	if (!val) return;
  return [
  	val.getFullYear(),
    (val.getMonth()+1),
    val.getDate()
   ].join('-') + ' ' + 
   [
   	val.getHours(),
    val.getMinutes(),
    val.getSeconds()
   ].join('.')
})

new Vue({
	el: '#app',
  data: {
  	items: [],
  	question: ''
  },
  methods: {
  	add: function() {
    	var vm = this;
      axios.get('https://yesno.wtf/api')
      	.then(function (response) {
        var item = {
          date: new Date(),
          question: vm.question,
          answer: response.data.answer,
          image: response.data.image
        };
        vm.items.push(item);
      });
    },
    remove: function(index) {
    	this.items.splice(index, 1);
    }
  },
  computed: {
  	total: function() {
    	return this.items.length;
    }
  }
});