import { RequestModel } from "../model";
import axiosInstance from "./axiosInstance";
import { URLs } from "./config";

export async function SubmitQuery(
    request: RequestModel
  ) {
const response = await axiosInstance.put(
  URLs().submitQuery,{...request}
) 
  return response.data;
  }