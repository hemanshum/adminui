import { useSelector, useDispatch } from "react-redux";

import TableRow from "./TableRow";
import Loader from "../Loader";
import {
  paginate,
  selectCheckbox,
  unSelectCheckbox,
  removeItems,
} from "../../store/slices/users-slice";

const Table = (props) => {
  const dispatch = useDispatch();
  const totalPages = useSelector((state) => state.userList.totalPages);
  const currentPage = useSelector((state) => state.userList.currentPage);
  const selectedItems = useSelector((state) => state.userList.selectedCheckbox);

  //Get all page number buttons
  let pageNumBtns = [];
  for (let i = 1; i <= totalPages + 1; i++) {
    pageNumBtns.push(i);
  }

  //Show Loading until table loads
  if (props.users.length === 0) {
    return <Loader />;
  }

  //Show Result
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <TableRow
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              role={user.role}
              selectedItems={selectedItems}
              selectCheckbox={() => dispatch(selectCheckbox(user.id))}
              unSelectCheckbox={() => dispatch(unSelectCheckbox(user.id))}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>
              <button
                className="btn btn-sm btn-error"
                onClick={() => dispatch(removeItems(selectedItems))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block w-4 h-4 mr-2 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                Delete Selected
              </button>
            </th>
            <th></th>
            <th>
              <div className="btn-group">
                <button
                  className={`btn ${currentPage === 1 ? "btn-active" : null}`}
                  onClick={() => dispatch(paginate(1))}
                >
                  First
                </button>
                <button
                  className={`btn ${currentPage === 1 ? "btn-disabled" : null}`}
                  onClick={() => {
                    if (currentPage !== 1) {
                      dispatch(paginate(currentPage - 1));
                    }
                  }}
                >
                  Prev
                </button>
                {pageNumBtns.length !== 0
                  ? pageNumBtns.map((btnNum, i) =>
                      currentPage === btnNum ? (
                        <button
                          key={i}
                          className="btn btn-active"
                          onClick={() => dispatch(paginate(btnNum))}
                        >
                          {btnNum}
                        </button>
                      ) : (
                        <button
                          key={i}
                          className="btn"
                          onClick={() => dispatch(paginate(btnNum))}
                        >
                          {btnNum}
                        </button>
                      )
                    )
                  : null}
                <button
                  className={`btn ${
                    currentPage === totalPages + 1 ? "btn-disabled" : null
                  }`}
                  onClick={() => {
                    if (currentPage !== totalPages + 1) {
                      dispatch(paginate(currentPage + 1));
                    }
                  }}
                >
                  Next
                </button>
                <button
                  className={`btn ${
                    currentPage === totalPages + 1 ? "btn-active" : null
                  }`}
                  onClick={() => dispatch(paginate(totalPages + 1))}
                >
                  Last
                </button>
              </div>
            </th>
            <th></th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
