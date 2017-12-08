<template>
  <div id="app">
    <header>
      <!-- <musicsearch v-on:musicsearch="showsong" v-on:openmusicsong="showsong"></musicsearch> -->
      <div>
        <ul>
          <li class="head-li" @click="move('/')">个性推荐</li>
          <li class="head-li" @click="move('/music')">歌单</li>
          <li class="head-li" @click="move('/station')">主播电台</li>
          <li class="head-li" @click="move('/rank')">排行榜</li>
        </ul>
      </div>
      <div class="bar" :class="Classmove"></div>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      Classmove: 'classmove0'
    }
  },
  methods:{
    move(x){
      switch (x) {
        case '/':
          this.Classmove = 'classmove0'
          this.$router.push('/music')
          break;
        case '/music':
          this.Classmove = 'classmove1'
          
          break;
        case '/station':
          this.Classmove = 'classmove2'
          this.$router.push('/station')
          break;
        case '/rank':
          this.Classmove = 'classmove3'
          this.$router.push('/rank')
          break;
        default:
          // statements_def
          break;
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  header
    ul
      display: flex
      padding-left: 0
      margin:0
      .head-li
        flex:1
        display: inline-block
        box-sizing: border-box
        width: 100px
        height:40px
        font-size: 14px
        text-align: center
        line-height: 40px
        background: #f8f8f9
        color: #333
        &.active
          color:#FF0200
      .head-li:nth-child(4)
        border-right:0
    .bar
      width: 25%
      height: 2px
      background: #FF0200
      transition: all 0.375s
      &.classmove0
        transform: translate3d(0,0,0)
      &.classmove1
        transform: translate3d(100%,0,0)
      &.classmove2
        transform: translate3d(200%,0,0)
      &.classmove3
        transform: translate3d(300%,0,0)

</style>
