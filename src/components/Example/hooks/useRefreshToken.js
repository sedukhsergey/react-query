import { useMutation } from "react-query";
import { refreshToken } from "../../../api/auth";

export const useRefreshToken = () => {
  return useMutation(refreshToken, {
    onSuccess: (response, variables) => {
      // variables.history.push('/home')
      return response;
    },
  });
};
