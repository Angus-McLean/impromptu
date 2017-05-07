import { User } from './User.model';

export const MyUsers: User[] = [
  <User>{
    id: '1',
    name: {
      first: 'Angus',
      last: 'McLean'
    },
    profile_img: '../assets/img/faces/profile_photo.jpg'
  },
  <User>{
    id: '2',
    name: {
      first: 'Amy',
      last: 'Mary-Anne'
    },
    profile_img: '../assets/img/faces/profile_photo1.jpg'
  },
  <User>{
    id: '3',
    name: {
      first: 'Luc',
      last: 'Morandi'
    },
    profile_img: '../assets/img/faces/profile_photo2.jpg'
  }
];
