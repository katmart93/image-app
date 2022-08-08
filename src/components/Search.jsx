import React from "react";

export default function Search({ inputVal, setInputVal, handleSearch }) {
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search for an image..."
        autoFocus
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
