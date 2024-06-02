import { Inter } from "next/font/google";
import { Button, Typography, Spin } from "antd";
import { useGetUsers } from "@/hooks/users/use-get-users";
import UsersTable from "@/components/tables/users-table";
import { useGetSEEUsers } from "@/hooks/users/use-get-SSE-users";

const inter = Inter({ subsets: ["latin"] });

const { Title } = Typography;

export default function Home() {
    const { users, isLoadingUsers, isFetchingUsers, errorUsers, isErrorUsers } =
        useGetUsers();

    useGetSEEUsers();

    const isLoading = isLoadingUsers || isFetchingUsers;
    const errorMessage = errorUsers?.message ?? "There was an error";

    return (
        <main
            className={`flex min-h-screen flex-col items-center gap-3 p-10 ${inter.className}`}
        >
            <Title>Users</Title>
            {isLoading && <Spin />}
            {isErrorUsers && <p>{errorMessage}</p>}
            {!isLoading && users && <UsersTable data={users} />}
        </main>
    );
}
