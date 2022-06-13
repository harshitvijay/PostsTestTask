import React from "react";

export interface IPostsComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
export type PostCommentContextType = {
  postsComments: IPostsComments[];
  setPostsComments: (posts: IPostsComments[]) => void;
};

interface Props {
  children: React.ReactNode;
}

export const PostCommentContext =
  React.createContext<PostCommentContextType | null>(null);

const PostsCommentProvider: React.FC<Props> = ({ children }) => {
  const [postsComments, setPostsComments] = React.useState<IPostsComments[]>(
    []
  );

  return (
    <PostCommentContext.Provider value={{ postsComments, setPostsComments }}>
      {children}
    </PostCommentContext.Provider>
  );
};

export default PostsCommentProvider;
