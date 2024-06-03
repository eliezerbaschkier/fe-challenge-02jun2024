import { deleteUser } from "@/api-calls/users";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteUser() {
    const queryClient = useQueryClient();
    const {
        mutate: deleteUserMutation,
        isError: isErrorDeleteUser,
        isPending: isPendingDeleteUser,
        error: errorDeleteUser,
    } = useMutation({
        mutationFn: deleteUser,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
    });
    return {
        deleteUserMutation,
        isErrorDeleteUser,
        isPendingDeleteUser,
        errorDeleteUser,
    };
}
