<!--整个应用的根组件-->
<template>
  <div id="app">
    <!--keep-alive是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。-->
    <!--exclude表示该组件不受keep-alive控制-->
    <keep-alive  exclude="Detail">
      <!--显示的是当前路由地址所对应的内容-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
