export interface SearchProps {
  searchList: [
    {
      id: string;
      slug: string;
      data: {
        title: string;
      };
      body: string;
    }
  ];
}

export interface SearchResult {
  id: string;
  slug: string;
  data: {
    title: string;
  };
}
