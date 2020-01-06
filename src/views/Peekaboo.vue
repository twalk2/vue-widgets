<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="h-16 w-screen m-20 flex justify-center">
      <div class="text-6xl" v-if="message">BOO!</div>
    </div>
    <div class="h-16 w-screen m-20 flex justify-center">
      <button
        class="text-3xl bg-red-500 p-1 border-2 border-black rounded-lg outline-none"
        @click="boo"
      >
        Click
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: false
    };
  },
  methods: {
    boo: function() {
      this.message = !this.message;
    }
  }
};
</script>
