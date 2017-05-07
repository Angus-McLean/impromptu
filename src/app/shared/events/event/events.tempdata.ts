import { Event } from './Event.model';

export const MyEvents: Event[] = [
  <Event>{
    id: '1',
    name: 'Birthday Party',
    categories: ['Outdoors', 'Party'],
    description: 'My mega dope birthday party with a 90s theme!',
    coords: {
      latitude: 40.742817,
      longitude: -73.984428
    }
  },
  <Event>{
    id: '2',
    name: 'Capture the Flag!!',
    categories: ['Outdoors', 'Excercise'],
    description: 'Get ready to throoow down! It\'s gonna be hella intense',
    coords: {
      latitude: 40.747817,
      longitude: -73.985428
    }
  },
  <Event>{
    id: '3',
    name: 'BBQ in the park! Woot!',
    categories: ['Outdoors', 'Food'],
    description: 'BBQ in the park... that\'s all there is to it.',
    coords: {
      latitude: 40.758817,
      longitude: -73.995428
    }
  }
];
