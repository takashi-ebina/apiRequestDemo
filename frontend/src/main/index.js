import { createApp } from 'vue';
import example from '@src/main/components/example.vue';

createApp({
  components: {
    example: example,
  },
}).mount('#main');