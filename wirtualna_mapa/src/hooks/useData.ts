import { IServerResponse } from "../models/responses/serverResponse";
import axiosDefault from "../setup/axios/defaultInstance";
import { ENDPOINTS } from "../utils/consts";

const useData = () => {
  const getGradeData = async (): Promise<IServerResponse> => {
    try {
      const response = await axiosDefault.get(ENDPOINTS.gradeData, {
        headers: {
          authorization: "Basic YWRtaW5AZ21haWwuY29tOkFkbWluMTIzIw==",
        },
      });
      const rawData = response.data;
      return { succeed: true, data: rawData };
    } catch (error) {
      return { succeed: false, errorMessage: "Coś poszło nie tak." };
    }
  };
  const getRecruitmentTypeData = async (): Promise<IServerResponse> => {
    try {
      const response = await axiosDefault.get(ENDPOINTS.recruitmentTypeData, {
        headers: {
          authorization: "Basic YWRtaW5AZ21haWwuY29tOkFkbWluMTIzIw==",
        },
      });
      const rawData = response.data;
      return { succeed: true, data: rawData };
    } catch (error) {
      return { succeed: false, errorMessage: "Coś poszło nie tak." };
    }
  };
  const getWorkModeData = async (): Promise<IServerResponse> => {
    try {
      const response = await axiosDefault.get(ENDPOINTS.workModeData, {
        headers: {
          authorization: "Basic YWRtaW5AZ21haWwuY29tOkFkbWluMTIzIw==",
        },
      });
      const rawData = response.data;
      return { succeed: true, data: rawData };
    } catch (error) {
      return { succeed: false, errorMessage: "Coś poszło nie tak." };
    }
  };
  const getContractTypeData = async (): Promise<IServerResponse> => {
    try {
      const response = await axiosDefault.get(ENDPOINTS.contractTypeData, {
        headers: {
          authorization: "Basic YWRtaW5AZ21haWwuY29tOkFkbWluMTIzIw==",
        },
      });
      const rawData = response.data;
      return { succeed: true, data: rawData };
    } catch (error) {
      return { succeed: false, errorMessage: "Coś poszło nie tak." };
    }
  };
  const AmountFromDate = async (date: string): Promise<IServerResponse> => {
    try {
      const response = await axiosDefault.get(
        ENDPOINTS.offersFromCertainDay + "?date=" + date,
        {
          headers: {
            authorization: "Basic YWRtaW5AZ21haWwuY29tOkFkbWluMTIzIw==",
          },
        }
      );
      const rawData = response.data[0].amountOfOffers;
      return { succeed: true, data: rawData };
    } catch (error) {
      return { succeed: false, errorMessage: "Coś poszło nie tak." };
    }
  };
  const getCategoriesData = async (): Promise<IServerResponse> => {
    try {
      const response = await axiosDefault.get(ENDPOINTS.categories, {
        headers: {
          authorization: "Basic YWRtaW5AZ21haWwuY29tOkFkbWluMTIzIw==",
        },
      });
      const rawData = response.data;
      return { succeed: true, data: rawData };
    } catch (error) {
      return { succeed: false, errorMessage: "Coś poszło nie tak." };
    }
  };
  const getEmployersData = async (): Promise<IServerResponse> => {
    try {
      const response = await axiosDefault.get(ENDPOINTS.employers, {
        headers: {
          authorization: "Basic YWRtaW5AZ21haWwuY29tOkFkbWluMTIzIw==",
        },
      });
      const rawData = response.data;
      return { succeed: true, data: rawData };
    } catch (error) {
      return { succeed: false, errorMessage: "Coś poszło nie tak." };
    }
  };
  const getSalaryRangeData = async (): Promise<IServerResponse> => {
    try {
      const response = await axiosDefault.get(ENDPOINTS.salaryRangeData, {
        headers: {
          authorization: "Basic YWRtaW5AZ21haWwuY29tOkFkbWluMTIzIw==",
        },
      });
      const rawData = response.data;
      return { succeed: true, data: rawData };
    } catch (error) {
      return { succeed: false, errorMessage: "Coś poszło nie tak." };
    }
  };
  return {
    getGradeData,
    getRecruitmentTypeData,
    getWorkModeData,
    getContractTypeData,
    AmountFromDate,
    getCategoriesData,
    getEmployersData,
    getSalaryRangeData,
  };
};

export default useData;
