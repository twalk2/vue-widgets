<template>
  <div>
    <div>Hello</div>
    <button @click="toggle()">Toggle</button>
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
