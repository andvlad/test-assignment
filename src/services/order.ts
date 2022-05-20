import { ORDER, QUERY_KEYS } from 'app/constants';
import { queryClient } from '../App';

export const fetchOrder = async () => {
  /*
    There should be a real API request here,
    but since there is no API,
    mock data is returned
   */
  //  const response = await fetch(`https://api.huuva.io/assignment`);
  //  const result = await response.json();
  //
  //  return result.data;

  return ORDER;
};

export const updateOrder = async (data: any) => {
  /*
    There should be a real API request here,
    but since there is no API,
    I just change the cached data in react-query directly
   */
  //  const response = await fetch(`https://api.huuva.io/assignment`, {
  //    method: 'POST',
  //    headers: {
  //      'Content-Type': 'application/json'
  //    },
  //    body: JSON.stringify(data)
  //  });

  queryClient.setQueryData(QUERY_KEYS.ORDER, () => data);
};
