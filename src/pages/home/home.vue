<template>
  <div class="index-wrap">
    <router-link to="test">aa</router-link>
    <div class="banner-wrap">
      <div class="notice">
        <i class="icon-notice"></i>
        <div class="notice-content" id="notice-wrap"><p id="notice">尊敬的用户：巴拉巴拉巴拉拉巴拉巴拉巴拉巴拉拉巴拉巴拉巴拉巴拉拉巴拉巴拉巴拉巴拉拉巴拉巴拉巴拉巴拉拉巴拉heihe和hi嘿嘿IE</p></div>
      </div>
      <div class="pic-wrap">
        <img src="../../common/image/banner_2.jpg" alt="">
      </div>
    </div>
    <ul class="cash-btn">
      <li>
        <a href="javascript:;">
          <i class="btn-instead"></i>
          <p>信用卡代还</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="btn-merchant"></i>
          <p>商家收款码</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="btn-person"></i>
          <p>个人收款</p>
        </a>
      </li>
    </ul>
    <div class="encourage-money">
      <div class="encourage-item none-border">
        <div class="encourage-item-list">
          <div class="money-show"><span>&yen;</span><strong>122.00</strong></div>
          <p class="money-title">今日鼓励金(元)</p>
        </div>
        <i class="icon-refund"></i>
      </div>
      <div class="encourage-item">
        <div class="encourage-item-list">
          <div class="money-show money-prize"><span>&yen;</span><strong>0</strong></div>
          <p class="money-title">鼓励金(元)</p>
        </div>
        <i class="icon-refund"></i>
      </div>
    </div>
    <ul class="user-btn">
      <li>
        <a href="javascript:;">
          <i class="icon-order"></i>
          <p>我的订单</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="icon-promote"></i>
          <p>我要推广</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="icon-rate"></i>
          <p>费率说明</p>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <i class="icon-state"></i>
          <p>使用说明</p>
        </a>
      </li>
    </ul>
    <div class="service">
      <div class="user-notice">
        <h2>新手通知</h2>
        <p>这里是新手通知，注册提交后，个人收款可直接使用。请加微信客服：HLTHLT888。服务电话400-6565-997。</p>
      </div>
      <img src="../../common/image/icon-code.jpg" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'home',
  mounted () {
    let payEnv = ''
    if (/MicroMessenger/.test(window.navigator.userAgent)) {
      payEnv = 'weixin'
      console.log(payEnv)
    } else if (/AlipayClient/.test(window.navigator.userAgent)) {
      payEnv = 'alipay'
      console.log(payEnv)
    } else {
      payEnv = 'other'
      console.log('other')
    }
  }
}
</script>

<style scoped lang="scss" scope>
  .index-wrap .banner-wrap {
    position: relative;
    width: 100%;
  }

  .index-wrap .banner-wrap .notice {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 0.48rem;
    height: 0.88rem;
    background: rgba(0, 0, 0, 0.3);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    /* Safari */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .index-wrap .banner-wrap .notice .icon-notice {
    width: 0.493333rem;
    height: 0.44rem;
    background: url("../../common/image/icon_notice.png") no-repeat;
    -o-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-right: 0.32rem;
  }

  .index-wrap .banner-wrap .notice .notice-content {
    position: relative;
    width: 8.32rem;
    height: 0.44rem;
    overflow: hidden;
  }

  .index-wrap .banner-wrap .notice .notice-content #notice {
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    height: 0.44rem;
    color: #fff;
    font-size: 0.346667rem;
    -webkit-animation-name: move;
    animation-name: move;
    -webkit-animation-duration: 20s;
    animation-duration: 20s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);
  }

  .index-wrap .banner-wrap .pic-wrap {
    width: 100%;
    height: 4.133333rem;
  }

  .index-wrap .banner-wrap .pic-wrap img {
    width: 100%;
    height: 4.133333rem;
  }

  .index-wrap .cash-btn {
    width: 100%;
    height: 3.066667rem;
    background: #f4f4f4;
    /* Safari */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }

  .index-wrap .cash-btn li {
    text-align: center;
  }

  .index-wrap .cash-btn li a {
    display: block;
  }

  .index-wrap .cash-btn li i {
    display: block;
    margin: 0 auto 0.24rem;
    width: 1.68rem;
    height: 1.68rem;
  }

  .index-wrap .cash-btn li p {
    color: #333;
    font-size: 0.373333rem;
  }

  .index-wrap .cash-btn li .btn-instead {
    background: url("../../common/image/btn_cash_play.png") no-repeat;
    -o-background-size: 5.306667rem auto;
    background-size: 5.306667rem auto;
    background-position: 0 0;
  }

  .index-wrap .cash-btn li .btn-merchant {
    background: url("../../common/image/btn_cash_play.png") no-repeat;
    -o-background-size: 5.306667rem auto;
    background-size: 5.306667rem auto;
    background-position: -1.813333rem 0;
  }

  .index-wrap .cash-btn li .btn-person {
    background: url("../../common/image/btn_cash_play.png") no-repeat;
    -o-background-size: 5.306667rem auto;
    background-size: 5.306667rem auto;
    background-position: -3.626667rem 0;
  }

  .index-wrap .encourage-money {
    /* Safari */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 2.32rem;
    border-bottom: 0.013333rem solid #f4f4f4;
  }

  .index-wrap .encourage-money .encourage-item {
    position: relative;
    width: 50%;
    height: 1.8rem;
    border-left: 0.013333rem solid #F5F5F5;
    text-align: center;
    /* Safari */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .index-wrap .encourage-money .encourage-item strong {
    font-weight: normal;
  }

  .index-wrap .encourage-money .none-border {
    border-left: none;
  }

  .index-wrap .encourage-money .money-show {
    font-size: 0.533333rem;
    line-height: 0.533333rem;
    margin-bottom: 0.24rem;
    color: #333333;
    font-family: Arial;
  }

  .index-wrap .encourage-money .money-show span {
    padding-right: 0.053333rem;
  }

  .index-wrap .encourage-money .money-title {
    font-size: 0.346667rem;
    color: #999;
  }

  .index-wrap .encourage-money .money-prize {
    color: #1FAE78;
  }

  .index-wrap .encourage-money .icon-refund {
    position: absolute;
    top: 0.293333rem;
    right: 0.533333rem;
    width: 0.586667rem;
    height: 0.573333rem;
    background: url("../../common/image/icon_refund.png") no-repeat;
    -o-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .index-wrap .user-btn {
    /* Safari */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    height: 2.346667rem;
  }

  .index-wrap .user-btn li a {
    display: block;
  }

  .index-wrap .user-btn li i {
    display: block;
    width: 1.306667rem;
    height: 1.306667rem;
    background: url("../../common/image/icon_user_btn.png") no-repeat;
    margin: 0 auto 0.16rem;
  }

  .index-wrap .user-btn li p {
    font-size: 0.346667rem;
    color: #999;
  }

  .index-wrap .user-btn li .icon-order {
    -o-background-size: 5.626667rem auto;
    background-size: 5.626667rem auto;
    background-position: 0 0;
  }

  .index-wrap .user-btn li .icon-promote {
    -o-background-size: 5.626667rem auto;
    background-size: 5.626667rem auto;
    background-position: -1.44rem 0;
  }

  .index-wrap .user-btn li .icon-rate {
    -o-background-size: 5.626667rem auto;
    background-size: 5.626667rem auto;
    background-position: -2.88rem 0;
  }

  .index-wrap .user-btn li .icon-state {
    -o-background-size: 5.626667rem auto;
    background-size: 5.626667rem auto;
    background-position: -4.32rem 0;
  }

  .index-wrap .service {
    /* Safari */
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 0.64rem 0 0.746667rem;
    height: 2.853333rem;
  }

  .index-wrap .service .user-notice {
    width: 5.6rem;
  }

  .index-wrap .service .user-notice h2 {
    font-size: 0.373333rem;
    color: #333;
    margin-bottom: 0.16rem;
  }

  .index-wrap .service .user-notice p {
    font-size: 0.32rem;
    color: #999;
  }

  .index-wrap .service img {
    width: 2.506667rem;
    height: 2.506667rem;
  }
</style>
