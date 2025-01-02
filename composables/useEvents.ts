// composables/useEvents.js
import { ref } from 'vue';

const events = ref([
  {
    id: 1,
    title: 'Community Cleanup',
    description: 'Join us for a community cleanup event!',
    date: '2025-05-01',
    time: '10:00 AM',
    location: 'Central Park',
  },
]);

export const useEvents = () => {
  const addEvent = (event:any) => events.value.push(event);
  const deleteEvent = (id:any) => {
    events.value = events.value.filter((event) => event.id !== id);
  };

  return { events, addEvent, deleteEvent };
};
