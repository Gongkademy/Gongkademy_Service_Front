import { END_POINT } from "@apis/apiConstants";
import { axiosInstance } from "@apis/axiosInstance";

export const validateDuplicateNickname = (nickname) => {
  return axiosInstance.get(`/check-nickname?nickname=${nickname}`);
};

export const validateDuplicateEmail = (email) => {
  return axiosInstance.get(`/check-email?email=${email}`);
};

export const sendEmail = (email) => {
  return axiosInstance.post("/mailSend", {
    email: email,
  });
};

export const checkAuthNum = (email, authNum) => {
  return axiosInstance.post("/mailauthCheck", {
    email: email,
    authNum: authNum,
  });
};

export const login = (username, password) => {
  const header = { headers: { "Content-Type": "x-www-form-urlencoded" } };
  const form = new FormData();
  form.append("username", username);
  form.append("password", password);

  return axiosInstance.post(END_POINT.LOGIN, form, header);
};

export const getMemberInfo = (memberId) => {
  return axiosInstance.get(END_POINT.MEMBER(memberId));
};

export const deleteMember = (memberId) => {
  return axiosInstance.delete(END_POINT.MEMBER(memberId));
};

export const join = (email, nickname, password, birthday) => {
  return axiosInstance.post(END_POINT.MEMBERS, {
    email: email,
    nickname: nickname,
    password: password,
    birthday: birthday,
  });
};

export const updateNickname = (memberId, newNickname) => {
  return axiosInstance.patch("/update-member", {
    memberId: memberId,
    newNickname: newNickname,
  });
};

export const updatePassword = (memberId, newPassword) => {
  return axiosInstance.patch("/update-password", {
    memberId: memberId,
    newPassword: newPassword,
  });
};
