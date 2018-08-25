class State {
  constructor() {
    this.data = {
      "title": "API Documentation",
      "basePath": api.basePath,
      "endpoints": api.endpoints
    }
  }
}

const state = new State;
const vm = new Vue({
  el: '#app',
  data: state.data
});
