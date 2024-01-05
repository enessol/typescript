import { create } from "@mui/material/styles/createTransitions";

// Interfaces
interface Author {
  name: string;
  avatar: string;
}

const authorOne: Author = {
  name: "Enes",
  avatar: "/assets/enes.png",
};

// interface inside another

interface Post {
  title: string;
  body: string;
  tags: string[];
  created_at: Date;
  author: Author;
}

const newPost = {
  title: "Typescript",
  body: "Text Body",
  tags: ["gaming", "tech"],
  created_at: new Date(),
  //   author: authorOne,
  author: {
    name: "Enes",
    avatar: "/assets/enes.png",
  },
};

// interfaces as function argument types
function createPost(post: Post): void {
  console.log(`Created post ${post.title} by ${post.author.name}`);
}

createPost(newPost);

// with arrays
let posts: Post[] = [];
posts.push(newPost);
