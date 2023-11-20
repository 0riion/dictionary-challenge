import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axiosInstance from "../utils/axios";

export const useWord = () => {
  const [word, setWord] = useState('');

  const fetchWord = async () => {
    if (!word) return null;
    const {data} = await axiosInstance.get(`api/v2/entries/en/${word}`);
    return data;
  };

  const query = useQuery('get word', fetchWord, {
    refetchOnWindowFocus: false,
  });

  const { data, isLoading, isError, error, isFetching, refetch } = query;

  useEffect(() => {
    if (isError) {
      console.log('error');
    }
  }, [isError]);

  useEffect(() => {
    refetch();
  }, [word]);

  return {
    data,
    word,
    isLoading: isLoading || isFetching,
    isError,
    error,
    setWord,
    refetch,
  };
};
