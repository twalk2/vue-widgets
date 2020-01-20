<template>
  <div class="h-screen flex flex-col items-center">
    <div
      class="text-6xl w-screen m-56"
      v-bind:style="{ 'text-align': alignment }"
    >
      Align Me!
    </div>
    <div class="flex justify-around h-16 w-1/2">
      <button
        class="w-24 text-3xl bg-red-500 p-1 border-2 border-black rounded-lg outline-none"
        @click="left()"
      >
        Left
      </button>
      <button
        class="w-24 text-3xl bg-red-500 p-1 border-2 border-black rounded-lg outline-none"
        @click="center()"
      >
        Center
      </button>
      <button
        class="w-24 text-3xl bg-red-500 p-1 border-2 border-black rounded-lg outline-none"
        @click="right()"
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
