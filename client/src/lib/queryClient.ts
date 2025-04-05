import { QueryClient } from '@tanstack/react-query';

// API request helper
export async function apiRequest(
  url: string,
  method: string = 'GET',
  data?: unknown
): Promise<Response> {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  const config: RequestInit = {
    method,
    headers,
    credentials: 'include',
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(url, config);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response;
}

// Create a client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
    mutations: {
      retry: 2,
    },
  },
});