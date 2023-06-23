import Fuse from "fuse.js";
import { useState } from "react";

function Search({ searchList }) {
  const POST_LIMIT = 5;

  const OPTIONS = {
    keys: ["data.title", "body", "slug"],
    includeMatches: true,
    minMatchCharLength: 1,
    threshold: 0.5,
  };

  const [query, setQuery] = useState("");

  const fuse = new Fuse(searchList, OPTIONS);

  const posts = fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, POST_LIMIT);

  const handleOnSearch = ({ target = {} }) => {
    const { value } = target;
    setQuery(value);
  };

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={handleOnSearch}
        placeholder="Search"
      />
      {query.length > 1 ? (
        <>
          {posts && posts.length > 0 ? (
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <a href={`/${post.slug}`}>{post.data.title}</a>
                </li>
              ))}
            </ul>
          ) : (
            <p>No Results</p>
          )}
        </>
      ) : null}
    </>
  );
}

export default Search;
