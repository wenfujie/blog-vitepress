<template>
  <div>
    <div class="square"></div>
  </div>
</template>

<style lang="less" scoped>
.square{
  width: 30px;
  height: 30px;
  background-color: green;
  transition: all .4s;
  &:hover{
    transform: rotate(360deg);
  }
}
</style>