<template>
  <div id="app">
    <Timezone/>
  </div>
</template>

<script>

import Timezone from './components/Timezone'
export default {
  name: 'App',
  components: {
    Timezone
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
