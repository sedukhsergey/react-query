import { useMutation } from "react-query";
import { login, loginConfirm } from "../../../api/auth";

export const useConfirm = () => {
  return useMutation(loginConfirm, {
    onSuccess: (response, variables) => {
      console.log("response", response);
      response.cookies.forEach((cookie) => {
        document.cookie = cookie;
      });
      variables.history.push("/home");
      return response;
    },
    onError: (error) => {
      console.log("error", error);
    },
  });
};
