import React from "react";

const Search = ({ open, closeSidebar }) => {
  return (
    <div
      id="search-popup"
      className={`search-popup ${open ? "popup-visible" : ""}`}
    >
      <div className="close-search theme-btn" onClick={() => closeSidebar()}>
        <i className="far fa-times" />
      </div>
      <div className="popup-inner">
        <div className="overlay-layer" onClick={() => closeSidebar()} />
        <div className="search-form">
          <form method="post" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <fieldset>
                <input
                  type="search"
                  className="form-control"
                  name="search-input"
                  defaultValue=""
                  placeholder="Type & Enter"
                  required=""
                />
              </fieldset>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Search;
