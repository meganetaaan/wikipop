import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import WikiPop from '../src/components/WikiPop.vue';

// Register custom components.
Vue.component('wiki-pop', WikiPop);

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories');
}

configure(loadStories, module);
