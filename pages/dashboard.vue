<template>
    <div class="p-6 max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold mb-6">Your Dashboard</h1>
        <h2 class="text-2xl font-semibold">Upcoming Events</h2>
        <ul class="mt-4">
            <li v-for="event in events" :key="event.id" class="border p-4 rounded mb-4 shadow-md">
                <h3 class="font-bold text-lg">{{ event.title }}</h3>
                <p>{{ event.date }} at {{ event.time }}</p>
                <p>{{ event.location }}</p>
                <p>⏳ Time Remaining: {{ countdown(event.date) }}</p>
                <NuxtLink :to="`/events/${event.id}`" class="text-blue-500 hover:underline mt-2 inline-block">
                    View Details
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useEvents } from '@/composables/useEvents';
import { getCountdown } from '@/utils/countdown';

const countdown = (eventDate) => getCountdown(eventDate);
const { events } = useEvents();

// onMounted(() => {
//     if(process.client) {
//       const interval = setInterval(() => {
//         getCountdown();
//       }, 1000);

//       // Clear interval when component is unmounted
//       onUnmounted(() => {
//         clearInterval(interval);
//       });
//     }
//   });
</script>