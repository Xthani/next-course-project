import { rackets } from "@/features/rackets/api/mock";
import { Racket } from "@/shared/types";

export const racketsApi = {
  getAll: (): Racket[] => {
    return rackets;
  },

  getById: (id: string): Racket | undefined => {
    return rackets.find((racket) => String(racket.id) === id);
  },

  getByBrand: (brandName: string): Racket[] => {
    return rackets.filter((racket) => racket.brand.name === brandName);
  },

  getTop10: (): Racket[] => {
    return rackets.filter((racket) => racket.top10);
  },
};
