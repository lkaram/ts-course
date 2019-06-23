import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";
import { CharacterCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 3, 0, -5, 1]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);

const characterCollection = new CharacterCollection("XazsjF");
const sorter2 = new Sorter(characterCollection);
sorter2.sort();
console.log(characterCollection.data);
