import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const fetched = async () => {
    const req = await fetch(url);
    const res = await req.json();
    setData(res);
  };
  useEffect(() => {
    fetched();
  }, [url]);

  return data;
};

export default useFetch;
