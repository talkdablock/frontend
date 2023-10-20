import { RequestModel, ResponseModel } from "../model";
import axiosInstance from "./axiosInstance";
import { URLs } from "./config";

export async function SubmitQuery(
    request: RequestModel
  ) {
    // return await axiosInstance.put(
    //   URLs().submitQuery,
    //   {
    //     ...request,
    //   }
    // );

    const response = await fetch('https://backend-production-967c.up.railway.app/query', {
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