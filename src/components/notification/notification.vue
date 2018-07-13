<template>
  <transition name="fade" @after-leave="afterLeave" @after-enter="afterEnter">
    <div class="notification"
         :style="style"
         v-show="visible"
         @mouseenter="clearTimer"
         @mouseleave="createTimer"
    >
      <span class="content">{{content}}</span>
      <a href="javascript:;" class="btn" @click="handleClose">{{btn}}</a>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'notification',
  props: {
    content: {
      type: String,
      required: true
    },
    btn: {
      type: String,
      default: '关闭'
    }
  },
  data () {
    return {
      visible: true
    }
  },
  computed: {
    style () {
      return {}
    }
  },
  methods: {
    handleClose (e) {
      e.preventDefault()
      this.$emit('close')
    },
    afterLeave () {
      this.$emit('closed')
    },
    afterEnter () {},
    clearTimer () {},
    createTimer () {}
  }
}
</script>

<style scoped>
.notification {
  display: flex;
  background-color: #303030;
  color: rgba(255, 255, 255, 1);
  align-items: center;
  padding: 20px;
  position: fixed;
  min-width: 280px;
  flex-wrap: wrap;
  transition: all 0.3s;
}
.content {
  padding: 0;
}
.btn {
  color: #ff4081;
  padding-left: 24px;
  margin-left: auto;
  cursor: pointer;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
