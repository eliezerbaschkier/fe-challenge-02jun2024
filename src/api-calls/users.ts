const url = process.env.NEXT_PUBLIC_URL || "";
const username = process.env.NEXT_PUBLIC_USERNAME || "";
const password = process.env.NEXT_PUBLIC_PASSWORD || "";
const headers = new Headers();
headers.set("Authorization", "Basic " + btoa(username + ":" + password));

export async function getUsers() {
    try {
        return await fetch(`${url}/users`, { method: "GET", headers: headers });
    } catch (error) {
        console.error(error);
        throw new Error("Error getting users");
    }
}
