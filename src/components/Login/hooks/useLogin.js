import {
  useMutation,
} from 'react-query';
import { login } from "../../../api/auth";

export const useLogin = () => {
  return useMutation(login, {
    onSuccess: (response) => response,
  });
};
