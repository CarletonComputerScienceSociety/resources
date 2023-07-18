import Fuse from "fuse.js";
import { ChangeEvent, useState } from "react";
import type { SearchProps, SearchResult } from "./Search.model";
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
      <div className="header-search-bar">
        <svg className="fa fa-search" />
        <input
          type="text"
          value={query}
          onChange={handleOnSearch}
          placeholder="Search..."
          className="search"
        />
      </div>
      {query.length > 1 ? (
        <div className="header-search-results">
          <div className="header-search-results__text">Search Results</div>
          {posts && posts.length > 0 ? (
            <div className="header-search-results__link-container">
              {posts.map((post) => (
                <a className="header-search-results__link" href={`/${post.slug}`}>
                  <div className="header-search-results__link__title">{post.data.title}</div>
                  <div className="header-search-results__link__cta">Go to File</div>
                </a>
              ))}
            </div>
          ) : (
            <p className="header-search-results__no-result">No Results</p>
          )}
        </div>
      ) : null}
    </>
  );
}

export default Search;
