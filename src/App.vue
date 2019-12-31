<template>
  <div id="app">
    <div class="text-red-500 text-3xl flex justify-center" id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/toggle">Toggle</router-link>|
      <router-link to="/peekaboo">Peekaboo</router-link>
    </div>
    <router-view />
  </div>
</template>

<style></style>
