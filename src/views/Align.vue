<template>
  <div class="h-screen flex flex-col items-center">
    <div class="text-6xl" v-bind:style="{ 'text-align': `${alignment}` }">
      Align Me!
    </div>
    <div class="flex justify-around h-16 m-56 w-1/2">
      <button
        class="text-3xl bg-red-500 p-1 border-2 border-black rounded-lg outline-none"
      >
        Left
      </button>
      <button
        class="text-3xl bg-red-500 p-1 border-2 border-black rounded-lg outline-none"
      >
        Center
      </button>
      <button
        class="text-3xl bg-red-500 p-1 border-2 border-black rounded-lg outline-none"
      >
        Right
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alignment: "center"
    };
  },
  methods: {
    left() {
      return (this.alignment = "left");
    },
    center() {
      return (this.alignment = "center");
    },
    right() {
      return (this.alignment = "right");
    }
  }
};
</script>
