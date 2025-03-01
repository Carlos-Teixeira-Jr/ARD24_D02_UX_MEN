export async function handleSaveUserOnDb(user) {
    try {
        const response = await fetch("http://localhost:3001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error(error);
        return { show: true, message: "Error on creating user!", type: "error" };
    }
}
