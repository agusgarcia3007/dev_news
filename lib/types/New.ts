export type New = {
  title: string;
  description: string;
  image?: string;
  url: string;
  cover_image?: string;
  type_of: string;
  published_at: string;
  large?: boolean;
  user: User;
};

type User = {
  username: string;
  profile_image: string;
};
