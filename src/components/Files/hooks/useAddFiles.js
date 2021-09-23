import { useMutation, useQueryClient } from "react-query";
import { addFiles, updateFiles } from "../../../api/files";

export const useAddFiles = () => {
  const queryClient = useQueryClient();

  return useMutation(addFiles, {
    onSuccess: (response, variables) => {
      // const cachedFiles = queryClient.getQueryData('files');
      // if (cachedFiles) {
      //   queryClient.setQueryData('files', [...cachedFiles, ...response]);
      //   return Promise.resolve();
      // }
      // queryClient.setQueryData('files', [...response]);
      // return Promise.resolve();
    },
    // onError: error => Promise.reject(),
  });
};

export const useUpdateFiles = () => {
  const queryClient = useQueryClient();

  return useMutation(updateFiles, {
    onSuccess: (response, variables) => {
      // const cachedFiles = queryClient.getQueryData('files');
      // if (cachedFiles) {
      //   queryClient.setQueryData('files', [...cachedFiles, ...response]);
      //   return Promise.resolve();
      // }
      // queryClient.setQueryData('files', [...response]);
      // return Promise.resolve();
    },
    // onError: error => Promise.reject(),
  });
};
