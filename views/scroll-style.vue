<template>
  <ul class="container">
    <li v-for="item in 20">{{ item }}</li>
  </ul>
</template>

<style lang="less" scoped>
.container{
  height:200px;
  overflow: auto;
}
// 滚动条整体部分
.container::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
// 滚动条里面可以拖动的部分
.container::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom right, #4d7fff 0%, #1a56ff 100%);
  border-radius: 5px;
}
// 外层轨道部分
.container::-webkit-scrollbar-track {
  background-color: #ddd;
  border: 1px solid #ccc;
  border-radius: 5px;
}

// 滚动条两边的按钮（不展示注释即可）
.container::-webkit-scrollbar-button {
  background-color: #4d7fff;
  border-radius: 5px;
}

.container::-webkit-scrollbar-button:hover {
  background-color: #999999;
}
</style>