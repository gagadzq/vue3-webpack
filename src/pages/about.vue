<template>
  <div>
    <h1>About Page</h1>
    <div class="content">
      <div class="left">left</div>
      <div class="center">content</div>
      <divv class="right">right</divv>
    </div>
    <!-- <div>
      <img src="../assets/img/answer.jpeg" alt="" srcset="">
    </div> -->
  </div>
</template>

<script>
import { getTime } from '../common/utils'
export default {
  created() {
    console.log(getTime())
  },
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100px;
  background: rgb(20, 161, 255);
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