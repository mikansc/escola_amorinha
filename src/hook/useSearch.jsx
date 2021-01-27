import { useEffect, useState } from "react";

const useSearch = (defaultTerm) => {
  const [tempSearchTerm, setTempSearchTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState(defaultTerm);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setSearchTerm(tempSearchTerm);
      setLoading(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [tempSearchTerm]);

  const search = (inputTerm) => {
    setTempSearchTerm(inputTerm);
  };

  return [searchTerm, search, loading];
};

export default useSearch;
