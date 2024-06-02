//   following https://tkdodo.eu/blog/using-web-sockets-with-react-query

import { url } from "@/api-calls/users";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export function useGetSEEUsers() {
    const queryClient = useQueryClient();
    useEffect(() => {
        const eventSource = new EventSource(`${url}/users/events`);
        eventSource.onopen = () => {
            console.log("connected");
        };

        eventSource.onmessage = (event) => {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        };

        return () => {
            eventSource.close();
        };
    }, []);
}
