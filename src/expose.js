import Vue from "vue";
import router from "./router";
import App from "./App";

let vm;
export const Mount = (target) => {
    vm = new Vue({
        el: target,
        router,
        template: "<App/>",
        components: { App },
    });
}
export const UMount = () => {
    vm.$el.parentNode.removeChild(vm.$el)
    const vueApp = document.createElement('div');
    vueApp.setAttribute('id', 'vueExApp');
    document.getElementById('root').appendChild(vueApp);
}

export const boot = [
    Mount,
    UMount,
];
