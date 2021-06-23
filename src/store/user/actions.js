import { apiUrl } from "../../config/constants";
import { selectToken } from "../user/selector";
import axios from "axios";

const loginSuccess = (userWithToken) => {
  return {
    type: "login/success",
    payload: userWithToken,
  };
};

const userData = (userdata) => {
  return {
    type: "user/data",
    payload: userdata,
  };
};

const photoDeleted = (id) => {
  return {
    type: "photo/deleted",
    payload: id,
  };
};

export const logOut = () => ({ type: "Logout" });

export const login = (email, password) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/login`, { email, password });
      dispatch(loginSuccess(response.data));
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
};

export const signUp = (name, email, password, country) => {
  return async (dispatch, getState) => {
    try {
      console.log(name, email, password, country);
      const response = await axios.post(`${apiUrl}/signup`, {
        name,
        email,
        password,
        country,
      });
      console.log(response);
      dispatch(loginSuccess(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const myData = () => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    try {
      const response = await axios.get(`${apiUrl}/mydata`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(userData(response.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const deletePhoto = (id) => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    console.log(id);
    try {
      const response = await axios.delete(`${apiUrl}/deletephoto/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("reponse", response);
      dispatch(photoDeleted(id));
    } catch (e) {
      console.log(e);
    }
  };
};
