import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "antd";
import { useQuery } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const { data } = useQuery({
        queryKey: ["test"],
        queryFn: () =>
            fetch("http://jsonplaceholder.typicode.com/users").then((res) =>
                res.json()
            ),
    });

    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <Button type="primary">Primary Button</Button>
        </main>
    );
}
