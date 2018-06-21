<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1706/b9/6b91b49794f46402.jpg_750x200_d7f254e2.jpg'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/13/6332699c44387902.jpg_750x200_b7afa4f8.jpg'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/fc/e47aa3e1c67bbc02.jpg_750x200_0f3eecf8.jpg'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1706/b8/a8e8ff02b094c802.jpg_750x200_ddaec8e5.jpg'
      }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 26.667%
    background: #eee
    .swiper-img
      width:100%
</style>
