import React from "react";

export interface IPosts {
  user_id: number;
  id: number;
  title: string;
  body: string;
}
export interface IPostCart {
  postId: number;
  count: number;
}
export type PostContextType = {
  posts: IPosts[];
  setPosts: (posts: IPosts[]) => void;
  postsCart: IPostCart[];
  addPostCart: (postId: number) => void;
};

interface Props {
  children: React.ReactNode;
}

export const PostContext = React.createContext<PostContextType | null>(null);

const PostsProvider: React.FC<Props> = ({ children }) => {
  const [posts, setPosts] = React.useState<IPosts[]>([]);
  const [postsCart, setPostCart] = React.useState<IPostCart[]>([]);

  const addPostCart = (postId: number) => {
    //use find instead of filter
    const isPostCartExistWithId = postsCart.filter((obj) => {
      return obj.postId === postId;
    });
    if (isPostCartExistWithId.length) {
      isPostCartExistWithId[0].count = isPostCartExistWithId[0].count + 1;
      setPostCart([...postsCart]);
    } else {
      const newPostCartItem: IPostCart = {
        postId,
        count: 1,
      };
      setPostCart([...postsCart, newPostCartItem]);
    }
  };

  return (
    <PostContext.Provider value={{ posts, setPosts, addPostCart, postsCart }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostsProvider;
