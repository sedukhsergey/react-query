import {
  useMutation,
} from 'react-query';
import { registration } from "../../../api/auth";

export const useRegistration = () => {
  return useMutation(registration, {
    onSuccess: (response, variables) => {
      variables.history.push('/todos')
    },
  });
};
