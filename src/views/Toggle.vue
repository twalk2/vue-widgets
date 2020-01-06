<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <div class="text-6xl m-20">{{ greeting ? "Hello" : "Goodbye" }}</div>
    <!-- <div class="text-6xl m-20" v-else>Goodbye</div> -->
    <button
      class="m-20 text-3xl bg-red-500 p-1 border-2 border-black rounded-lg outline-none"
      @click="toggle()"
    >
      Toggle
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      greeting: true
    };
  },
  methods: {
    toggle: function() {
      this.greeting = !this.greeting;
    }
  }
};
</script>
<style></style>;
