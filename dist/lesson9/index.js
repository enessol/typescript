"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorOne = {
    name: "Enes",
    avatar: "/assets/enes.png",
};
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
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
// with arrays
let posts = [];
posts.push(newPost);
