"use strict";
class DataCollection {
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll() {
        return this.data;
    }
    add(val) {
        this.data.push(val);
        return this.data;
    }
    deleteOne(id) {
        this.data = this.data.filter((item) => item.id !== id);
    }
}
const newUsers = new DataCollection([
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
