import { useMutation } from "react-query";
import { login } from "../../../api/auth";

export const useLogin = () => {
  return useMutation(login, {
    onSuccess: (response, variables) => {
      response.cookies.forEach((cookie) => {
        document.cookie = cookie;
      });
      variables.history.push("/home");
      return response;
    },
  });
};
