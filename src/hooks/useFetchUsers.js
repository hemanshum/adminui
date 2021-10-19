import { useEffect, useState } from "react";

import userAPI from "../apis/usersAPIs";

const useFetchUsers = () => {
  const [usersDetails, setUsersDetails] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  const fetchUserList = async () => {
    try {
      const response = await userAPI.get("/members.json");
      setUsersDetails(response.data);
    } catch (error) {
      setFetchError(error.message);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return [usersDetails, fetchError];
};

export default useFetchUsers;
