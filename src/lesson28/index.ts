// GENERIC CLASSES
// class DataCollection<T> {
//   constructor(private data: T[]) {}

//   loadOne(): T {
//     const i = Math.floor(Math.random() * this.data.length);
//     return this.data[i];
//   }
//   loadAll(): T[] {
//     return this.data;
//   }
//   add(val: T): T[] {
//     this.data.push(val);
//     return this.data;
//   }
// }

// interface TheUser {
//   name: string;
//   score: number;
// }

// const newUsers = new DataCollection<TheUser>([
//   { name: "Enes", score: 100 },
//   { name: "Merve", score: 1050 },
//   { name: "Selim", score: 10 },
// ]);

// newUsers.add({ name: "Luigi", score: 15 });

// const user1 = newUsers.loadOne();
// const user2 = newUsers.loadAll();

// console.log("load one - ", newUsers.loadOne());
// console.log("load all - ", newUsers.loadAll());
