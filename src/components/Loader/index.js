const Loader = () => {
  return (
    <div className="h-14 w-14 mx-auto mt-20 animate-ping">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#37cdbe"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
      <h1>Loading...</h1>
    </div>
  );
};

export default Loader;
