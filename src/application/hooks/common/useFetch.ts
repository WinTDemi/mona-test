import { useQuery, UseQueryOptions } from "@tanstack/react-query";
// useFetch<type>(mainKey, param, dataFetchingFn, options?) 
// => [mainKey, param] is the queryKey 
// and 
// () => dataFetchingFn(param) is the queryFn
export const useFetch = <T>(
    mainKey: string,
    param: string,
    dataFetchingFn: (param: string) => Promise<T>,
    // options is an object that contains the options for the useQuery hook
    // options them cac gia tri mac dinh cua useQuery bang object
    options: Omit<UseQueryOptions<T, Error, T>, 'queryKey' | 'queryFn'> = {}
) => {

    const queryKey = [mainKey, param];

    return useQuery<T>({
        queryKey,
        queryFn: () => dataFetchingFn(param),
        staleTime: 30 * 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        // placeholderData: keepPreviousData, // giúp cho dữ liệu cũ không bị mất khi fetch dữ liệu mới 
        ...options,
    });
};