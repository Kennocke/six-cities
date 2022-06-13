export type User = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type Comment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
};

export type CommentPost = {
  comment: string;
  rating: number;
};

export type Comments = Comment[];
