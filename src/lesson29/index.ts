// GENERIC CONSTRAINTS
interface HasId {
  id: number;
}

class DataCollection<T extends HasId> {
  constructor(private data: T[]) {}

  loadOne(): T {
    const i = Math.floor(Math.random() * this.data.length);
    return this.data[i];
  }
  loadAll(): T[] {
    return this.data;
  }
  add(val: T): T[] {
    this.data.push(val);
    return this.data;
  }
  deleteOne(id: number): void {
    this.data = this.data.filter((item) => item.id !== id);
  }
}

interface TheUser {
  name: string;
  score: number;
  id: number;
}

const newUsers = new DataCollection<TheUser>([
  { name: "Enes", score: 100, id: 1 },
  { name: "Merve", score: 1050, id: 2 },
  { name: "Selim", score: 10, id: 3 },
]);

newUsers.add({ name: "Luigi", score: 15, id: 4 });
newUsers.deleteOne(1);

const user1 = newUsers.loadOne();
const user2 = newUsers.loadAll();

console.log("load one - ", newUsers.loadOne());
console.log("load all - ", newUsers.loadAll());
