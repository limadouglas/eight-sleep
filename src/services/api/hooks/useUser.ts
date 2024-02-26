import { useQuery } from "@tanstack/react-query";
import { getUserData } from "../user";

export const useUser = (id: string) => {
  return useQuery({
    queryKey: [`user-${id}`],
    queryFn: () => getUserData(id),
  });
};
