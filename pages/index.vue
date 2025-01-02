<template>
  <div>
    <h1 class="text-2xl font-bold">Manage Events</h1>
    <form @submit.prevent="createEvent">
      <input v-model="newEvent.title" placeholder="Event Title" class="border p-2 rounded mt-2" />
      <textarea v-model="newEvent.description" placeholder="Event Description" class="border p-2 rounded mt-2"></textarea>
      <input v-model="newEvent.date" type="date" class="border p-2 rounded mt-2" />
      <input v-model="newEvent.time" type="time" class="border p-2 rounded mt-2" />
      <input v-model="newEvent.location" placeholder="Location" class="border p-2 rounded mt-2" />
      <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded mt-2">Add Event</button>
    </form>

    <ul class="mt-4">
      <li v-for="event in events" :key="event.id" class="border p-4 rounded mt-2">
        <h2 class="font-bold">{{ event.title }}</h2>
        <p>{{ event.description }}</p>
        <p>{{ event.date }} - {{ event.time }}</p>
        <p>Location: {{ event.location }}</p>
        <button @click="deleteEvent(event.id)" class="bg-red-500 text-white px-4 py-2 rounded mt-2">
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useEvents } from '@/composables/useEvents';

const { events, addEvent, deleteEvent } = useEvents();

const newEvent = ref({
  title: '',
  description: '',
  date: '',
  time: '',
  location: '',
});

const createEvent = () => {
  addEvent({ id: Date.now(), ...newEvent.value });
  newEvent.value = { title: '', description: '', date: '', time: '', location: '' };
};
</script>
