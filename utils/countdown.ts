export const getCountdown = (eventDate:any) => {
    const now = new Date();
    const eventTime = new Date(eventDate).getTime();
    const difference = eventTime - now.getTime();
  
    if (difference <= 0) return 'Event Started';
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };
  