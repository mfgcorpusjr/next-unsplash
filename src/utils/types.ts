export type User = {
  name: string;
  links: {
    html: string;
  };
  profile_image: {
    small: string;
  };
};

export type Image = {
  id: string;
  slug: string;
  links: {
    html: string;
  };
  urls: {
    regular: string;
  };
  user: User;
};
