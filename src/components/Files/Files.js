import React, { useState } from "react";
import { useQuery } from "react-query";
import { getFilesMetaData } from "../../api/files";
import { useAddFiles, useUpdateFiles } from "./hooks/useAddFiles";
import styles from "./styles.module.css";

const Files = () => {
  // const { isLoading, error, data } = useQuery("files", getFilesMetaData);
  const data = null;
  const {
    mutateAsync: updateFiles,
    isLoading: updateFilesLoading,
    error: updateFileError,
  } = useUpdateFiles();

  const {
    mutateAsync: addFile,
    isLoading: addFilesLoading,
    error: addFileError,
  } = useAddFiles();
  const [file, setFile] = useState(null);
  const handleChange = (e) => {
    setFile(e.target.files);
  };

  const handleSubmitFiles = async () => {
    const data = new FormData();
    const deletedFiles = JSON.stringify([10]);
    // data.append("problemId", 1);
    // data.append("date", "1990-05-23T20:00:00.000Z");
    // data.append("mskId", 1);
    // data.append("name", "test name");
    // data.append("indication", "indication");
    // data.append("outcome", "outcome");

    // data.append("outcome", "outcome string");
    // data.append("tests", "tests string");
    // data.append("overview", "overview string");
    // data.append("indication", "indication string");

    // data.append("categoryTypeId", 1);

    data.append("problemStatusId", "1");
    data.append("problemId", "2");
    data.append("categoryTypeId", "1");
    data.append("mskId", "1");
    data.append("from", "1990-05-23T20:00:00.000Z");
    data.append("until", "1990-05-23T20:00:00.000Z");
    data.append("notes", "test notes");
    data.append("deletedFiles", deletedFiles);

    if (file) {
      for (const key of file) {
        data.append(`file`, key);
      }
    }
    await updateFiles(data);
  };

  return (
    <div>
      <h2>ADD FILE</h2>
      <input type="file" onChange={handleChange} multiple />
      <button onClick={handleSubmitFiles}>SUbmit</button>
      {updateFileError && (
        <p className={styles.error}>{updateFileError?.data?.message}</p>
      )}
      <h2>Uploaded files</h2>
      <div>
        {data?.map((item) => (
          <div key={item.id}>{item.file_name}</div>
        ))}
      </div>

      <img
        src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
    AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
        9TXL0Y4OHwAAAABJRU5ErkJggg=="
        alt="Red dot"
      />
    </div>
  );
};

export default Files;
