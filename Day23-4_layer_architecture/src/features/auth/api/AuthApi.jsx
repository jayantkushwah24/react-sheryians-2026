import { api } from "../../../config/api";

export const loginUserApi = async (credentials) => {
  try {
    let response = await api.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const hydrateUser = async () => {
  let accessToken = localStorage.getItem("accessToken");
  
  try {
    let response = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
