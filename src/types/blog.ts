export interface IBlog {
  _id: string;
  title: string;
  rawContent: string;
  translations: {
    [key: string]: string;
  };
  autoTranslated: boolean;
  tags: string[];
  coverImage: string;
  publishedAt: string;
  status: 'published' | 'draft';
  isDeleted: boolean;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface GetBlogsResponse {
  success: boolean;
  message: string;
  data: IBlog[];
  total: number;
  currentPage: number;
  totalPages: number;
}