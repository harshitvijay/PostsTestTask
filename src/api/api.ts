export const getPosts = () => {
  return `https://jsonplaceholder.typicode.com/posts`;
};

export const getPostsComments = (id: string) => {
  return `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
};
