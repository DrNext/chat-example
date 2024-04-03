// plugins/pusher.js

import Vue from 'vue';
import Pusher from 'pusher-js';

const pusher = new Pusher(process.env.PUSHER_KEY, {
  cluster: process.env.PUSHER_CLUSTER,
  // Add other options here if needed
});

Vue.prototype.$pusher = pusher;
