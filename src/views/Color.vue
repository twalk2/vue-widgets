<template>
  <div class="h-screen flex flex-col items-center">
    <div
      class="text-6xl w-screen m-56 flex justify-center"
      v-bind:style="{ color: textColor }"
    >
      {{ textColor }}
    </div>
    <div class="flex justify-around h-16 w-1/2">
      <input
        class="text-3xl border-2 border-black rounded-lg"
        type="text"
        placeholder="Enter Color"
        v-model="newColor"
      />
      <button
        class="w-auto text-3xl bg-red-500 p-1 border-2 border-black rounded-lg outline-none"
        @click="changeColor()"
      >
        Change Color
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textColor: "black",
      newColor: ""
    };
  },
  methods: {
    changeColor() {
      if (this.newColor !== "") {
        return (this.textColor = this.newColor);
      } else {
        return "please enter a color";
      }
    }
  }
};
</script>
