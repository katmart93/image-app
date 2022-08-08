import React from "react";

export default function Search({ inputVal, setInputVal }) {
  return (
    <form>
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
