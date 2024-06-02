import { Inter } from "next/font/google";
import { Button } from "antd";
import { useGetUsers } from "@/hooks/users/use-get-users";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const { users } = useGetUsers();

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <Button type="primary">Primary Button</Button>
        </main>
    );
}
