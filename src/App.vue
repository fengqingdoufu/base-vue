<template>
  <div id="app">
    <router-view/>
    <button @click="test">点击显示</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    test () {
      this.$notify({
        content: 'test11',
        btn: 'close'
      })
    }
  }
}
</script>

<style>
</style>
