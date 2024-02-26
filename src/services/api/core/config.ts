export const queryConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 2,
      retryDelay: 1000,
      staleTime: 5 * 60 * 1000,
    },
  },
}