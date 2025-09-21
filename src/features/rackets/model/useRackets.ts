import { useMemo } from "react";
import { racketsApi } from "../api/racketsApi";

export const useRackets = () => {
  const rackets = useMemo(() => racketsApi.getAll(), []);

  return {
    rackets,
    isLoading: false,
    error: null,
  };
};
