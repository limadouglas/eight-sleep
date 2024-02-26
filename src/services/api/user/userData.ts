import ApiClient from "../core";
import { UserData } from "./types";

export const getUserData = async (id: string) => {
  try {
    const response = await ApiClient.get<UserData>(`/${id}.json`);
    return response.data;
  } catch (error) {
    console.error("getUsers - Error: ", error);
    throw error;
  }
};
