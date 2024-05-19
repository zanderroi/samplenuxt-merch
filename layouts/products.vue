<template>
    <div>
      <header class="shadow-sm bg-white">
        <nav class="conatiner mx-auto p-4">
          <NuxtLink to="/products">Sample Products</NuxtLink>
        </nav>
      </header>
</div>
        <!-- output the page content -->
        <div>
            <slot />
        </div>

        <footer class="container mx-auto p-4 flex justify-between">
            <ul class="flex gap-4">
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/products">Products</NuxtLink></li>
          </ul>
        </footer>
  
  </template>

  <style scoped>
    .router-link-exact-active {
        color: green;
    }
  </style>