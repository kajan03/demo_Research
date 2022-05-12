import axiosInstance from "./axiosInstance";

export const studentPerformance = async (requestBody) => {
  try {
    console.log(requestBody);

    const res = await axiosInstance.post("/predict", requestBody);
    return res;
  } catch (error) {
    return error;
  }
};

export default { studentPerformance };