import {
  useMutation,
} from 'react-query';
import { login } from "../../../api/auth";

export const useLogin = () => {
  return useMutation(login, {
    onSuccess: (response, variables) => {
      console.log('variables',variables)
      variables.history.push('/home')
      return response;
    },
    onError: (error => {
      console.log('error onErorr',error)
    })
  });
};
