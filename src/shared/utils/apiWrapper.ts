import { ApiResponse } from "@/shared/types";

/**
 * Обертка для унификации обработки API запросов
 */
export const apiWrapper = async <T>(
  fetchFn: () => Promise<Response>
): Promise<ApiResponse<T>> => {
  try {
    const result = await fetchFn();

    if (!result.ok) {
      return { isError: true, data: undefined };
    }

    const data: T = await result.json();
    return { isError: false, data };
  } catch {
    return { isError: true, data: undefined };
  }
};

/**
 * Обертка для обработки API запросов с кастомной логикой для 404
 */
export const apiWrapperWith404 = async <T>(
  fetchFn: () => Promise<Response>,
  dataExtractor?: (response: Response) => Promise<T>
): Promise<ApiResponse<T>> => {
  try {
    const result = await fetchFn();

    if (result.status === 404) {
      return { isError: false, data: undefined };
    }

    if (!result.ok) {
      return { isError: true, data: undefined };
    }

    const data = dataExtractor 
      ? await dataExtractor(result)
      : await result.json();
    
    return { isError: false, data };
  } catch {
    return { isError: true, data: undefined };
  }
};
