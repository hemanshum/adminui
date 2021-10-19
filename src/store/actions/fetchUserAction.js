import userAPI from "../../apis/usersAPIs";
import { getUsers } from "../slices/users-slice";

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await userAPI.get("/members.json");
    dispatch(getUsers(response.data));
  } catch (error) {
    throw new Error("Could not fetch data!");
  }
};
