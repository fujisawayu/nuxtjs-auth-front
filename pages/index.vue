<template>
  <div>
    <button
      type="button"
      name="button"
      @click="getMsg"
    >
      Test Button
    </button>
    <div
      v-for="(msg, index) in msgs"
      :key="index"
    >
      {{ msg }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data(): { msgs: string[] } {
    return {
      msgs: []
    };
  },
  methods: {
    async getMsg(): Promise<void> {
      try {
        const response = await this.$axios.$get('/api/general');
        if (Array.isArray(response)) {
          this.msgs = [...this.msgs, ...response];
        } else {
          console.error('Response is not an array:', response);
        }
      } catch (error) {
        console.error('API call failed:', error);
      }
    }
  }
});
</script>
