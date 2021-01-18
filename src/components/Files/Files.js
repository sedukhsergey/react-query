import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getFilesMetaData } from '../../api/files';
import { useAddFiles } from './hooks/useAddFiles';

const Files = () => {
  const {
    isLoading, error, data,
  } = useQuery('files', getFilesMetaData);
  const [addFile, { isLoading: addFilesLoading }] = useAddFiles();
  const [file, setFile] = useState(null);
  const handleChange = e => {
    setFile(e.target.files);
  };

  const handleSubmitFiles = async () => {
    if (file) {

      const data = new FormData();
      for (const key of file) {
        data.append(`file-${key.name}`, key);
      }
      try {
        const response = await addFile(data);
        console.log('response',response)
      } catch (e) {
      }
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
