<script setup>
import { ref } from 'vue'
import Navbar from '../components/Navbar';
</script>
<template>
  <div>
    <!-- Navbar -->
    <!-- <header class="bg-white dark:bg-gray-800 shadow-md p-4">
      <nav class="max-w-7xl mx-auto flex justify-between">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Community Events</h1>
        <div>
          <NuxtLink to="/" class="text-gray-700 dark:text-white px-4">Home</NuxtLink>
          <NuxtLink to="/dashboard" class="text-gray-700 dark:text-white px-4">Dashboard</NuxtLink>
        </div>
      </nav>
    </header> -->
    <Navbar/>

    <main class="py-6">
      <slot/>
    </main>
  </div>
</template>
