import {
  useMutation, useQueryCache,
} from 'react-query';
import { addFiles } from '../../../api/files';

export const useAddFiles = () => {
  const cache = useQueryCache();

  return useMutation(addFiles, {
    onSuccess: (response, variables) => {
      const cachedFiles = cache.getQueryData('files');
      if (cachedFiles) {
        cache.setQueryData('files', [...cachedFiles, ...response]);
        return Promise.resolve();
      }
      cache.setQueryData('files', [...response]);
      return Promise.resolve();
    },
    onError: error => Promise.reject(),
  });
};
