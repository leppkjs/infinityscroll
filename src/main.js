import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.component('my-img', {
  template: `<img :src="imgName" />`,
  props: {
    imgName: String
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
