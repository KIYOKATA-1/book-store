export type Book = {
  id: string;
  title: string;
  author: string;
  coverId?: number;
  year?: number;
};

export type OpenLibraryBook = {
  key: string;
  title: string;
  author_name?: string[];
  cover_i?: number;
  first_publish_year?: number;
};

export type OpenLibraryResponse = {
  docs: OpenLibraryBook[];
};