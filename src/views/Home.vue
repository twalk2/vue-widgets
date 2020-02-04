<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <div class="text-6xl m-10">Vue Widgets</div>
    <div class="text-3xl m-10">Check them out!</div>
    <div class="text-2xl">{{ getHumanDate() }}</div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  methods: {
    getHumanDate: function() {
      return moment().format("MMMM Do YYYY, h:mm a");
    }
  }
};
</script>
