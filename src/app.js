import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: '#app',
  components: { App },
  template: `<App :state="state"/>`,
  data: {
    state: {
      showDone: false,
      todos: [{
        text: 'Get a job',
        done: false,
      }, {
        text: 'Find a girl',
        done: true,
      }, {
        text: 'Buy a car',
        done: false,
      }]
    }
  }
})
