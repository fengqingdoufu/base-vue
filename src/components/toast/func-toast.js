import Toast from './toast'
export default {
  extends: Toast,
  computed: {},
  mounted () {
    this.createTimer()
  },
  methods: {
    createTimer () {
      if (this.autoClose) {
        this.timer = setTimeout(() => {
          this.visible = false
        }, this.autoClose)
      }
    },
    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    }
  },
  beforeDestory () {
    this.clearTimer()
  },
  data () {
    return {
      autoClose: 1500,
      visible: false
    }
  }
}
