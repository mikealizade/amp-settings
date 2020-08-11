import { atom, atomFamily, selector } from 'recoil';
import { fetchAllGuitarists, sendEmail } from './App.api.js';

export const formState = atom({
  key: 'formState',
  default: {
    isFeedbackSent: false,
    isFormOpen: false,
    name: '',
    message: '',
    errorName: false,
    errorMessage: false
  }
});

export const recentlyViewedState = atom({
  key: 'recentlyViewedState',
  default: []
});

export const fetchGuitarists = selector({
  key: 'fetchGuitarists',
  get: async () => { // { get } used to get recoil state in atoms
    return await fetchAllGuitarists();
  }
});

// export const sendFormData = selector({
//   key: 'sendFormData',
//   get: async ({ get }) => {
//     const { name, message } = get(formState)
//     if(name && message) {
//       debugger
//        await sendEmail(name, message)
//     }
//   },
// });
