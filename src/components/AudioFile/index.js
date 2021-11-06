import React, { useState, useEffect } from "react";
import { getConsultAudioFile } from "../../api/files";

export const AudioFile = () => {
  const [url, setUrl] = useState(null);
  useEffect(() => {
    const getFile = async () => {
      const url = await getConsultAudioFile();
      console.log("url", url);
      setUrl(url.publicUrl);
    };
    getFile();
  }, []);
  return (
    <div>
      {url ? (
        <audio controls>
          <source src={url} type="audio/mpeg" />
        </audio>
      ) : null}
    </div>
  );
};
