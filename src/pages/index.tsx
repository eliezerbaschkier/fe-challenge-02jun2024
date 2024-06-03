import { Inter } from "next/font/google";
import { Button, Typography, Spin } from "antd";
import { useGetUsers } from "@/hooks/users/use-get-users";
import UsersTable from "@/components/tables/users-table";
import { useGetSEEUsers } from "@/hooks/users/use-get-SSE-users";
import { useDeleteUser } from "@/hooks/users/use-delete-user";
import { useRouter } from "next/router";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const { Title } = Typography;

export default function Home() {
    const {
        users,
        isLoadingUsers,
        isFetchingUsers,
        errorFetchingUsers,
        isErrorFetchingUsers,
    } = useGetUsers();
    const { errorDeleteUser } = useDeleteUser();
    useGetSEEUsers();
    const router = useRouter();

    const handleNavigateToCreateUser = () => {
        router.push("/create-user");
    };

    const isLoading = isLoadingUsers || isFetchingUsers;
    const errorFetchingMessage =
        errorFetchingUsers?.message ?? "There was an error fetching the users";
    const errorDeletingMessage =
        errorDeleteUser?.message ?? "There was an error deleting the user";

    return (
        <main
            className={`flex min-h-screen flex-col items-center gap-3 p-10 ${inter.className}`}
        >
            <Title>Users</Title>
            <Button type="primary" onClick={handleNavigateToCreateUser}>
                Create user
            </Button>
            {isLoading && <Spin />}
            {isErrorFetchingUsers && <p>{errorFetchingMessage}</p>}
            {errorDeleteUser && <p>{errorDeletingMessage}</p>}
            {!isLoading && users && <UsersTable data={users} />}
        </main>
    );
}
