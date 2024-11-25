<template>
  <header class="flex justify-between items-center border-b border-gray-200 p-11">
    <div class="flex justify-between items-center gap-4">
      <img class="w-10" src="/logo.png" alt="Logo" />
      <div>
        <h2 class="text-xl font-bold">VUE SNEAKERS</h2>
        <p class="text-gray-500">Магазин лучших кроссовок</p>
      </div>
    </div>

    <ul class="flex gap-8">
      <li class="flex items-center gap-2.5">
        <img src="/cart.svg" alt="Cart" /><span class="text-gray-600">1205 руб.</span>
      </li>
      <li class="flex items-center gap-2.5">
        <img src="/heart.svg" alt="Favorites" /><span class="text-gray-600">Закладки</span>
      </li>
      <li class="flex items-center gap-2.5">
        <img src="/profile.svg" alt="Profile" /><span class="text-gray-600">Профиль</span>
      </li>
    </ul>
  </header>
</template>
