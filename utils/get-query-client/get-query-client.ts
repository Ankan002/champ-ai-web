import { QueryClient } from "react-query";

const ReactQueryClient = {
	queryClient: new QueryClient(),
};

export const getQueryClient = () => ReactQueryClient.queryClient;
