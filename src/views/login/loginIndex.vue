<template>
  <div>
    登陆
  </div>
</template>

<script setup lang='ts'>
import { getLoginInfo } from '@/api/common'
import { ILoginInfo } from '@/api/types/common'

import { onMounted, ref } from 'vue'
const list = ref<ILoginInfo['slide']>([])
onMounted(() => {
  getLoginInfo().then(resData => {
    list.value = resData.slide
    console.log(list.value)
  })
})
</script>

<style lang='less' scoped>

</style>
