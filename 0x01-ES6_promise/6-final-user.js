import { signUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUser(firstName, lastName), uploadPhoto(fileName)]).then((results) => [
    {
      status: results[0],
      value: results[0].status === 'fulfilled' ? results[0].value : results[0].reason,
    },
  ]);
}
