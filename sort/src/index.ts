import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
import { CharacterCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, 0, -5, 1]);
numbersCollection.sort();
console.log(numbersCollection.data);

const characterCollection = new CharacterCollection("XazsjF");
characterCollection.sort();
console.log(characterCollection.data);

const linked = new LinkedList();
linked.add(400);
linked.add(-1);
linked.add(-12);
linked.add(42);
linked.sort();
linked.print();
