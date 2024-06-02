import { Inter } from "next/font/google";
import { Button, Typography, Spin } from "antd";
import { useGetUsers } from "@/hooks/users/use-get-users";

const inter = Inter({ subsets: ["latin"] });

const { Title } = Typography;

export default function Home() {
    const { users, isLoadingUsers, isFetchingUsers, errorUsers, isErrorUsers } =
        useGetUsers();

    const isLoading = isLoadingUsers || isFetchingUsers;
    const errorMessage = errorUsers?.message ?? "There was an error";

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <Title>Users</Title>
            {isLoading && <Spin />}
            {isErrorUsers && <p>{errorMessage}</p>}
            {users &&
                users?.map((user) => <p key={user._id}>{user.firstName}</p>)}
        </main>
    );
}
