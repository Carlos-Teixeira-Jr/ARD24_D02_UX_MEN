import { API_URL } from "@/api/api";
import { IToast } from "../../components/toast/toast";
import { IUserData } from "../../interfaces/userDataInterface";

type UserProps = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
};

export async function handleSaveUserOnDb(
  user: UserProps
): Promise<IUserData | IToast["toastProps"]> {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { show: true, message: "Error on creating user!", type: "error" };
  }
}
