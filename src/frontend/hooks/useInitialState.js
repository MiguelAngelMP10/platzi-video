import { useState, useEffect } from 'react';

const useInitilState = (API) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((result) => result.json())
      .then((data) => setVideos(data));
  }, []);

  return videos;
};

export default useInitilState;
