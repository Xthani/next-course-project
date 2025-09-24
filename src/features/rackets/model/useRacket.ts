import { useMemo } from "react";
import { racketsApi } from "../api/racketsApi";

interface UseRacketProps {
  racketId: string;
}

export const useRacket = ({ racketId }: UseRacketProps) => {
  const racket = useMemo(() => racketsApi.getById(racketId), [racketId]);

  return {
    racket,
    isLoading: false,
    error: racket ? null : "Ракетка не найдена",
  };
};
