<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div v-if="message">BOO!</div>
    <button @click="boo">Click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: true
    };
  },
  methods: {
    boo: function() {
      this.message = !this.message;
    }
  }
};
</script>
