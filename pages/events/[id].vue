<template>
    <div class="p-6 max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold">{{ event.title }}</h1>
      <p class="mt-4">{{ event.description }}</p>
      <p class="mt-2">📍 Location: {{ event.location }}</p>
      <p class="mt-2">📅 Date: {{ event.date }} at {{ event.time }}</p>
  
      <!-- RSVP Form -->
      <form @submit.prevent="submitRSVP" class="mt-6">
        <h2 class="text-xl font-semibold mb-4">RSVP for this event</h2>
        <input
          v-model="rsvpDetails.email"
          type="email"
          placeholder="Your Email"
          class="border p-2 rounded w-full mb-4"
        />
        <input
          v-model="rsvpDetails.phone"
          type="tel"
          placeholder="Your Phone Number"
          class="border p-2 rounded w-full mb-4"
        />
        <button
          type="submit"
          class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          RSVP Now
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { useEvents } from '@/composables/useEvents';
  
  const route = useRoute();
  const { events } = useEvents();
  
  // Get the event details
  const event = events.value.find((e) => e.id === parseInt(route.params.id));
  
  // RSVP form data
  const rsvpDetails = ref({ email: '', phone: '' });
  
  const submitRSVP = async () => {
    await fetch('/api/sendNotification', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: rsvpDetails.value.email,
        phone: rsvpDetails.value.phone,
        message: `Thank you for RSVPing for the event: ${event.title}`,
      }),
    });
    alert('RSVP successful!');
  };
  </script>
  