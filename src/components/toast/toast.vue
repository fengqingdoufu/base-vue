<template>
<transition name="fade" @after-leave="afterLeave">
  <div class="toast"
    v-show="visible"
    @click.stop
  >{{text}}</div>
</transition>
</template>

<script>
export default {
  name: 'toast',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    afterLeave () {
      this.$emit('closed')
    },
    clearTimer () {},
    createTimer () {}
  },
  data () {
    return {
      visible: false
    }
  }
}
</script>

<style scoped lang="scss">
.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  padding: 30px 60px;
  background: rgba(0,0,0,0.5);
  color: #fff;
  font-size: 30px;
}
.fade-enter-active, .fade-leave-active {
  transition: background 0.5s;
}
.fade-enter, .fade-leave-to {
  background:rgba(0,0,0,0)
}
</style>
