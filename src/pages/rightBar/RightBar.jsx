import "./rightBar.css";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
export default function RightBar() {
  const { setSortBy } = useContext(AppContext); // Access the setSelectedCategory and setSortBy functions from context

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <div className="right-bar">
      <h3 className="right-bar-heading">Sort By</h3>
      <select
        className="right-bar-select"
        name="sort"
        onChange={handleSortChange}
      >
        <option value="latestPost">Latest Post</option>
        <option value="mostUpvoted">Most Upvoted</option>
      </select>
    </div>
  );
}
