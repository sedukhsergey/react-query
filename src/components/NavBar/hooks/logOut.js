import { useMutation } from "react-query";
import { logOut } from "../../../api/auth";

export const useLogOut = () => {
  return useMutation(logOut, {
    onSuccess: (response, variables) => {
      variables.history.push("/home");
      return response;
    },
  });
};
