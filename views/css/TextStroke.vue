<template>
  <div>
    <p class="font">无描边</p>
    <p class="font stroke">有描边</p>
  </div>
</template>

<style lang="less" scoped>
  .stroke {
    -webkit-text-stroke: 2px blue;
  }
  .font {
    font-size: 60px;
    font-weight: bold;
    color: #ffe27f;
    line-height: 1;
  }
</style>