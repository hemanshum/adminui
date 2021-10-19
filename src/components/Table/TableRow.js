const TableRow = (props) => {
  return (
    <tr>
      <th>
        <label>
          <input
            type="checkbox"
            className="checkbox"
            defaultChecked={props.selectedItems.includes(props.id)}
            onChange={() => {
              if (props.selectedItems.includes(props.id)) {
                props.unSelectCheckbox();
              } else {
                props.selectCheckbox();
              }
            }}
          />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{props.name}</div>
          </div>
        </div>
      </td>
      <td>{props.email}</td>
      <td>{props.role}</td>
      <th>
        <button className="btn btn-ghost btn-sm btn-circle mr-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-sm btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#ff5724"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </th>
    </tr>
  );
};

export default TableRow;
