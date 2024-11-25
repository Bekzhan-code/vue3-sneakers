<template>
  <div class="fixed top-0 left-0 h-full w-full z-10 bg-black opacity-20"></div>
  <div class="fixed h-full top-0 right-0 w-3/12 bg-white z-10 p-8">
    <h2 class="text-2xl font-bold mb-8">Корзина</h2>
    <div class="flex flex-col gap-5 h-4/5 overflow-auto-y">
      <DrawerItem />
      <DrawerItem />
      <DrawerItem />
      <DrawerItem />
    </div>
  </div>
</template>

<script setup>
import DrawerItem from './DrawerItem.vue'
</script>
