<template>
  <div>
    <h1>Home Page</h1>
    <div class="content">
      <div class="left">left</div>
      <div class="center">content</div>
      <divv class="right">right</divv>
    </div>
    <!-- <div>
      <img src="../assets/img/answer.jpeg" alt="" srcset="">
    </div> -->
    <var-button type="primary">主要按钮</var-button>
  </div>
</template>

<script>
import { getTime } from '../common/utils'
import { Button } from '@varlet/ui'
import '@varlet/ui/es/button/style/index.js'

export default {
  created() {
    console.log(getTime())
  },
  components: {
    VarButton: Button
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100px;
  background: deeppink;
  color: #fff;
  display: flex;
  justify-content: center;
  .left,.right {
    background: burlywood;
    width: 200px;
  }
  .center {
    flex: 1;
  }
}
</style>