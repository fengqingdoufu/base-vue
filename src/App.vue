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
    test (e) {
      // this.$notify({
      //   content: 'test11',
      //   btn: 'close'
      // })
      this.$confirm({
        text: '确认删除吗？'
      }).then(() => {
        console.log('确认删除')
      }).catch(() => {
        this.$toast({
          text: '已取消'
        })
      })
    }
  }
}
</script>

<style>
</style>
