import { useEffect } from 'react';

import axios from 'axios';

import { API_URL } from '@/constants/env';

const useVisitPage = (p: any) => {
  useEffect(() => {
    // TODO: implement disini
    const post = async (p) => {
      try {
        await axios.post(`${API_URL}/web-visitor`, {
          page: p,
        });
      } catch (err) {
        if (err.response.data.status === 400 && (!err.response.data.errors || err.response.data.errors === '')) {
          console.log('visitor view multiple times in the same page in 1h');
        } else {
          console.error('Failed to send data', err);
        }
      }
    };
    post(p);
  });
};

export default useVisitPage;
