import {
  toMockingCase,
  toUwuCase,
  toVaporwaveCase,
  toLeetCase,
  toBackwardsCase,
  toStutterCase,
  toRandomCase
} from './index.js';

const testPhrase = "Hello world, this is an example sentence!";

console.log("Original text:", testPhrase);
console.log("\nFun Transformations:");
console.log("------------------");
console.log("Mocking Case:", toMockingCase(testPhrase));
console.log("UwU Case:", toUwuCase(testPhrase));
console.log("Vaporwave Case:", toVaporwaveCase(testPhrase));
console.log("Leet Case:", toLeetCase(testPhrase));
console.log("Backwards Case:", toBackwardsCase(testPhrase));
console.log("Stutter Case:", toStutterCase(testPhrase));
console.log("Random Case (changes each time):", toRandomCase(testPhrase)); 