<script setup>
import MyHeader from '../src/components/MyHeader.vue'
import MyFooter from '../src/components/MyFooter.vue'
</script>

<template>
  <MyHeader />
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <MyFooter />
</template>
