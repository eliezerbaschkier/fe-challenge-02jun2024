export const url = process.env.NEXT_PUBLIC_URL || "";
const username = process.env.NEXT_PUBLIC_USERNAME || "";
const password = process.env.NEXT_PUBLIC_PASSWORD || "";
const headers = new Headers();
headers.set("Authorization", "Basic " + btoa(username + ":" + password));

export async function getUsers() {
    return fetch(`${url}/users`, { method: "GET", headers: headers })
        .then((response) => response.json())
        .catch((error) => console.error("Error:", error));
}

export async function deleteUser(id: string): Promise<void> {
    return fetch(`${url}/users/${id}`, { method: "DELETE", headers: headers })
        .then((response) => {
            return;
        })
        .catch((error) => console.error("Error:", error));
}
