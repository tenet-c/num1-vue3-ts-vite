<template>
  <div>
    首页
    <span>{{ store.state.count }}</span>
    <span>{{ $store.state.foo }}</span>
  </div>
</template>

<script setup lang='ts'>
import { useStore } from '@/store'
const store = useStore()
console.log(store.state.foo)
</script>

<style lang='scss' scoped>
span {
  color: $red
}
</style>
