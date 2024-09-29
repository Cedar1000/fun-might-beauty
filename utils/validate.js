import toast from 'react-hot-toast';

import capitalize from './capitalize';

export const emptyField = (entries) => {
  let result = false;
  entries.forEach(([key, value]) => {
    if (key !== 'mobileAppRequest' && value === '') {
      toast(`${capitalize(key)} Field Can't be empty`);
      result = true;
    }
  });

  return result;
};

export const invalidEmail = (email) => {};
