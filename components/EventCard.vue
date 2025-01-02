<template>
    <div
      class="border p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h3 class="font-bold text-lg">{{ event.title }}</h3>
      <p>{{ event.date }} at {{ event.time }}</p>
      <p>{{ event.location }}</p>
      <NuxtLink
        :to="`/events/${event.id}`"
        class="text-blue-500 hover:underline mt-2 inline-block"
      >
        View Details
      </NuxtLink>
    </div>
  </template>
  
  <script setup>
  defineProps({
    event: {
      type: Object,
      required: true,
    },
  });
  </script>
  