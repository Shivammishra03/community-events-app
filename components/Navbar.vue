<template>
    <header class="bg-white dark:bg-gray-800 shadow-md p-4">
      <nav class="max-w-7xl mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
          Community Events
        </h1>
        <div>
          <NuxtLink to="/" class="text-gray-700 dark:text-white px-4">
            Home
          </NuxtLink>
          <NuxtLink to="/dashboard" class="text-gray-700 dark:text-white px-4">
            Dashboard
          </NuxtLink>
          <button
            @click="toggleDarkMode"
            class="bg-gray-200 dark:bg-gray-600 text-black dark:text-white px-4 py-2 rounded ml-4"
          >
            Toggle Dark Mode
          </button>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };
  </script>
  