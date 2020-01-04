<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <div class="m-20" v-bind:style="{ 'font-size': `${size}px` }">
      {{ size }}px
    </div>
    <div class="flex m-20">
      <button
        class="m-20 text-4xl bg-red-500 p-1 border-2 border-black rounded-lg outline-none"
        @click="decrement()"
      >
        Shrink
      </button>
      <button
        class="m-20 text-4xl bg-red-500 p-1 border-2 border-black rounded-lg outline-none"
        @click="increment()"
      >
        Grow
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: 20
    };
  },
  methods: {
    increment: function() {
      return (this.size += 10);
    },
    decrement: function() {
      if (this.size === 10) {
        console.log("the end");
      } else {
        return (this.size -= 10);
      }
    }
  }
};
</script>
