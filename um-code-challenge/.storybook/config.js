import { configure, addDecorator } from "@storybook/vue";
import Vue from "vue";
import Vuetify from "vuetify";

import ImageCrossfader from "../src/components/ImageCrossfader.vue";

Vue.use(Vuetify);
Vue.component("ImageCrossfader", ImageCrossfader.default);

addDecorator(() => ({
  template: "<v-app><story/></v-app>"
}));

// automatically import all files ending in *.stories.js
const req = require.context("../src/stories", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
