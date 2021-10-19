import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/actions/fetchUserAction";

import UserListPage from "./pages/UserList";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container mx-auto">
      <UserListPage />
    </div>
  );
};

export default App;
