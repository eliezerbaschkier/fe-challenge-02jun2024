import { getUsers } from "@/api-calls/users";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/lib/types/users";

export function useGetUsers() {
    const {
        data: users,
        isLoading: isLoadingUsers,
        isError: isErrorFetchingUsers,
        error: errorFetchingUsers,
        isFetching: isFetchingUsers,
    } = useQuery<User[]>({
        queryKey: ["users"],
        queryFn: getUsers,
    });

    return {
        users,
        isLoadingUsers,
        isErrorFetchingUsers,
        errorFetchingUsers,
        isFetchingUsers,
    };
}
