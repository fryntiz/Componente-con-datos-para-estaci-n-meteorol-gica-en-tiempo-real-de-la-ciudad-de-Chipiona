import WeatherChipiona from "./WeatherChipiona.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("v-weather-chipiona", WeatherChipiona);
}

const plugin = {
  install
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

WeatherChipiona.install = install;

export default WeatherChipiona;