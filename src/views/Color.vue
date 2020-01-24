<template>
  <div>
    <div v-bind:style="{ color: textColor }">{{ textColor }}</div>
    <div>
      <input type="text" placeholder="Enter Color" v-model="newColor" />
      <button @click="changeColor()">Change Color</button>
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
      return (this.textColor = this.newColor);
    }
  }
};
</script>
