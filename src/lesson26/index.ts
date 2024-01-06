// Intersection Type

// type Player = {
//   firstName: string;
//   id: number;
// };

// type PlayerUser = Person & {
//   email: string;
// };

interface HasID {
  id: number;
}

function addIdToValue<T>(val: T): T & HasID {
  const id = Math.random();

  return { ...val, id };
}

interface Post {
  title: string;
  thumbsUp: number;
}

const post = addIdToValue<Post>({ title: "Rules", thumbsUp: 491 });
console.log(post.id, post.title, post.thumbsUp);
