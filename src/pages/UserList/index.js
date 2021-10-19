import { useSelector } from "react-redux";

import Header from "../../components/Header";
import Table from "../../components/Table";

const UserListPage = (props) => {
  const itemsPerPage = useSelector((state) => state.userList.itemsPerPage);
  const currentPage = useSelector((state) => state.userList.currentPage);

  return (
    <>
      <Header />
      <Table users={itemsPerPage[currentPage - 1] || []} />
    </>
  );
};

export default UserListPage;
