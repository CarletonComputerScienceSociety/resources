import Fuse from "fuse.js";
import { ChangeEvent, useState } from "react";
import type { SearchProps, SearchResult } from "./Search.model";
import React from "react";
import "./Search.style.scss";

function Search(props: SearchProps) {
  const POST_LIMIT = 5;

  const OPTIONS = {
    keys: ["data.title", "body", "slug"],
    includeMatches: true,
    minMatchCharLength: 1,
    threshold: 0.5,
  };

  const [query, setQuery] = useState("");

  const fuse = new Fuse(props.searchList, OPTIONS);

  const posts = fuse
    .search<SearchResult>(query)
    .map((result) => result.item)
    .slice(0, POST_LIMIT);

  const handleOnSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={handleOnSearch}
          placeholder="Search"
          className="search"
        />
        <i className="fa fa-search"></i>
      </div>
      {query.length > 1 ? (
        <div className="search-results">
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
        </div>
      ) : null}
    </>
  );
}

export default Search;
