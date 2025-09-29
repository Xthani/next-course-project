export interface Brand {
  id: number;
  name: string;
}

export interface Racket {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  type: string;
  model: string;
  year: number;
  top10: boolean;
  description: string;
  brandId: number;
  brand: Brand;
}

// API типы
export type ApiResponse<Entity> = {
  isError: boolean;
  data?: Entity;
};

export type GetRacketsParams = {
  page?: number;
  limit?: number;
};

export type GetRacketByIdParams = {
  id: string;
};
