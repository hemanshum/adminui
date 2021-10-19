const Header = () => {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="px-2 mx-2 navbar-start">
        <span className="text-lg font-bold">Admin UI</span>
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered"
        />
      </div>
      <div className="navbar-end">
        <div className="flex-none">
          <div className="avatar">
            <div className="rounded-full w-10 h-10 m-1">
              <img src="https://i.pravatar.cc/500?img=32" alt="avatar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
