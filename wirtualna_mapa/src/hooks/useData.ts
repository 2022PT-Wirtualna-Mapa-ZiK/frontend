import { IServerResponse } from "../models/responses/serverResponse";
import axiosDefault from "../setup/axios/defaultInstance";
import { ENDPOINTS } from "../utils/consts";

const useData = () => {
  
  const getWorkModeData = async(): Promise<IServerResponse> => {
    try {
      const response = await axiosDefault.get(ENDPOINTS.workModeData, {
        headers: {
        'authorization': 'Basic YWRtaW5AZ21haWwuY29tOkFkbWluMTIzIw==',
      }})
      const rawData = response.data;
      return { succeed: true, data: rawData}
    } catch (error) {
      return { succeed: false, errorMessage: 'Coś poszło nie tak.' }
    } 
  }

  return {
    getWorkModeData,
  }
}

export default useData
