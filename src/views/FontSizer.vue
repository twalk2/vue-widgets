<template>
  <div class="h-screen flex flex-col items-center">
    <div class="h-16 m-20" v-bind:style="{ 'font-size': `${size}px` }">
      {{ size }}px
    </div>
    <div class="flex justify-around h-16 m-56 w-1/2">
      <button
        class="text-3xl bg-red-500 p-1 border-2 border-black rounded-lg outline-none"
        @click="decrement()"
      >
        Shrink
      </button>
      <button
        class="text-3xl bg-red-500 p-1 border-2 border-black rounded-lg outline-none"
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
