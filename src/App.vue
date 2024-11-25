<template>
  <div class="w-10/12 my-20 m-auto bg-white rounded-xl">
    <Drawer />
    <Header />
    <main class="p-11">
      <div class="flex justify-between items-center mb-10">
        <h1 class="text-2xl font-bold">Все кроссовки</h1>
        <div class="relative hover:-translate-y-1 transition active:-translate-y-1">
          <input
            class="border border-gray-100 rounded-xl py-3.5 pl-10 text-sm hover:border-gray-300 active:border-gray-400"
            type="text"
            placeholder="Поиск..."
          />
          <img class="absolute top-4 left-3.5" src="/search.svg" alt="Search" />
        </div>
      </div>

      <div class="grid grid-cols-4 gap-10">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </main>
  </div>
</template>

<script setup>
import MyComponent from './components/MyComponent.vue'
import Header from './components/Header.vue'
import CardItem from './components/CardItem.vue'
import Drawer from './components/Drawer.vue'
</script>
