import React from "react";

const SearchForm = ({ username, onInputChange, onFormSubmit }) => (
  <form onSubmit={onFormSubmit}>
    <input
      type="text"
      value={username}
      onChange={onInputChange}
      placeholder="Enter GitHub username"
    />
    <button type="submit">Search</button>
  </form>
);

export default SearchForm;
