import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getFilesMetaData } from '../../api/files';
import { useAddFiles } from './hooks/useAddFiles';
import styles from './styles.module.css';

const Files = () => {
  const {
    isLoading, error, data,
  } = useQuery('files', getFilesMetaData);
  const { mutateAsync: addFile, isLoading: addFilesLoading, error: addFileError } = useAddFiles();
  const [file, setFile] = useState(null);
  console.log('addFileError',addFileError)
  const handleChange = e => {
    setFile(e.target.files);
  };

  const handleSubmitFiles = async () => {
    if (file) {
      const data = new FormData();
      for (const key of file) {
        data.append(`file-${key.name}`, key);
      }
      await addFile(data);
    }
  };

  return (
    <div>
      <h2>ADD FILE</h2>
      <input
        type="file"
        onChange={handleChange}
        multiple/>
      <button onClick={handleSubmitFiles}>SUbmit</button>
      {addFileError && <p className={styles.error}>{addFileError?.data?.message}</p>}
      <h2>Uploaded files</h2>
      <div>{data?.map(item => (
        <div key={item.id}>
          {item.file_name}
        </div>
      ))}</div>
    </div>
  );
};

export default Files;
