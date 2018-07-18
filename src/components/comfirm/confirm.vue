<template>
  <transition name="fade" @after-leave="afterLeave">
    <div class="confirm"
         @click.stop
         v-show="visible">
      <div class="confirm-wrapper">
        <div class="confirm-content">
          <p class="text">{{text}}</p>
          <div class="operate">
            <div @click="cancel" class="operate-btn left">{{cancelBtnText}}</div>
            <div @click="confirm" class="operate-btn">{{confirmBtnText}}</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'confirm',
  props: {
    text: {
      type: String,
      required: true
    },
    confirmBtnText: {
      type: String,
      default: '确定'
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    }
  },
  data () {
    return {
      visible: false,
      ensurePlay: false
    }
  },
  methods: {
    afterLeave () {
      this.$emit('closed')
    },
    cancel () {
      this.$emit('cancel')
    },
    confirm () {
      this.$emit('confirm')
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/sass">
  .confirm {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    .confirm-wrapper {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
      .confirm-content {
        width: 500px;
        border-radius: 13px;
        background: #fff;
        .text {
          padding: 30px 15px;
          line-height: 22px;
          text-align: center;
          font-size: 28px;
          color: #333;
        }
        .operate {
          display: flex;
          align-items: center;
          text-align: center;
          font-size: 26px;
        }
        .operate-btn {
          flex: 1;
          line-height: 22px;
          padding: 20px 0;
          border-top: 1px solid #ccc;
          color: #666;
        }
        .operate-btn.left {
          border-right: 1px solid #ccc
        }
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  @keyframes confirm-fadein {
    0% {opacity: 0;}
    100% { opacity: 1;}
  }
  @keyframes confirm-zoom {
    0% {transform: scale(0);}
    50% {transform: scale(1.1);}
    100% {transform: scale(1);}
  }

</style>
