import {
  Racket,
  ApiResponse,
  GetRacketsParams,
  GetRacketByIdParams,
} from "@/shared/types";
import { API_CONFIG } from "../../../shared/config";
import { apiWrapper, apiWrapperWith404 } from "@/shared/utils/apiWrapper";

export const getRackets = async ({
  page = 1,
  limit = 2,
}: GetRacketsParams): Promise<ApiResponse<Racket[]>> => {
  return apiWrapper<Racket[]>(() =>
    fetch(`${API_CONFIG.BASE_URL}/products?page=${page}&limit=${limit}`)
  );
};

export const getTop10Rackets = async (): Promise<ApiResponse<Racket[]>> => {
  return apiWrapper<Racket[]>(() => fetch(`${API_CONFIG.BASE_URL}/top-10`));
};

export const getRacketById = async ({
  id,
}: GetRacketByIdParams): Promise<ApiResponse<Racket>> => {
  return apiWrapperWith404<Racket>(
    () => fetch(`${API_CONFIG.BASE_URL}/product/${id}`),
    async (response) => {
      const data: { product: Racket } = await response.json();
      return data.product;
    }
  );
};

export const getRacketByIdSlow = async ({
  id,
}: GetRacketByIdParams): Promise<ApiResponse<Racket>> => {
  return apiWrapperWith404<Racket>(
    () => fetch(`${API_CONFIG.BASE_URL}/product-slow/${id}`),
    async (response) => {
      const data: { product: Racket } = await response.json();
      return data.product;
    }
  );
};
