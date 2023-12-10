import { RequestModel } from "../model";

export async function SubmitQuery(
    request: RequestModel
  ) {
    // return await axiosInstance.put(
    //   URLs().submitQuery,
    //   {
    //     ...request,
    //   }
    // );

    // const response = await fetch('https://tdb-backend.up.railway.app/query', {
    const response = await fetch('http://localhost:3001/query', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error('Failed to update data');
  }

  return response.json();
  }