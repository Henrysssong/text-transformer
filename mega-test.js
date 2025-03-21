import * as caseUtils from './index.js';

const testPhrase = "Hello world, this is an example sentence!";
console.log("Original:", testPhrase);
console.log("\n=== STANDARD TRANSFORMATIONS ===");
console.log("Camel Case:", caseUtils.toCamelCase(testPhrase));
console.log("Snake Case:", caseUtils.toSnakeCase(testPhrase));
console.log("Kebab Case:", caseUtils.toKebabCase(testPhrase));
console.log("Pascal Case:", caseUtils.toPascalCase(testPhrase));
console.log("Title Case:", caseUtils.toTitleCase(testPhrase));
console.log("Sentence Case:", caseUtils.toSentenceCase(testPhrase));
console.log("Constant Case:", caseUtils.toConstantCase(testPhrase));
console.log("Dot Case:", caseUtils.toDotCase(testPhrase));
console.log("Path Case:", caseUtils.toPathCase(testPhrase));
console.log("Header Case:", caseUtils.toHeaderCase(testPhrase));
console.log("Slug Case:", caseUtils.toSlugCase(testPhrase));

console.log("\n=== SOCIAL MEDIA & FUN TRANSFORMATIONS ===");
console.log("Mocking Case:", caseUtils.toMockingCase(testPhrase));
console.log("UwU Case:", caseUtils.toUwuCase(testPhrase));
console.log("Leet Case:", caseUtils.toLeetCase(testPhrase));
console.log("Hashtag Case:", caseUtils.toHashtagCase(testPhrase));
console.log("Claps Case:", caseUtils.toClapsCase(testPhrase));
console.log("Backwards Case:", caseUtils.toBackwardsCase(testPhrase));
console.log("Stutter Case:", caseUtils.toStutterCase(testPhrase));
console.log("Random Case:", caseUtils.toRandomCase(testPhrase));
console.log("Emojify Case:", caseUtils.toEmojifyCase(testPhrase));
console.log("Sparkles Case:", caseUtils.toSparklesCase(testPhrase));

console.log("\n=== UNICODE & VISUAL TRANSFORMATIONS ===");
console.log("Vaporwave Case:", caseUtils.toVaporwaveCase(testPhrase));
console.log("Small Caps Case:", caseUtils.toSmallCapsCase(testPhrase));
console.log("Bubble Case:", caseUtils.toBubbleCase(testPhrase));
console.log("Stretched Case:", caseUtils.toStretchedCase(testPhrase));
console.log("Alternate Case:", caseUtils.toAlternateCase(testPhrase));
console.log("Old English Case:", caseUtils.toOldEnglishCase(testPhrase));
console.log("Mirror Case:", caseUtils.toMirrorCase(testPhrase));

// These can look a bit messy in the console, so we'll separate them
console.log("\n=== ENCODING & SPECIAL TRANSFORMATIONS ===");
console.log("Binary Case:", caseUtils.toBinaryCase(testPhrase));
console.log("Morse Code:", caseUtils.toMorseCode(testPhrase));
console.log("ROT13 Case:", caseUtils.toROT13Case(testPhrase));
console.log("Base64 Case:", caseUtils.toBase64Case(testPhrase));
console.log("JSON Case:", caseUtils.toJSONCase(testPhrase));
console.log("Minify Case:", caseUtils.toMinifyCase(testPhrase));
console.log("Redacted Case:", caseUtils.toRedactedCase(testPhrase));
console.log("NATO Case:", caseUtils.toNATOCase(testPhrase));
console.log("Pig Latin Case:", caseUtils.toPigLatinCase(testPhrase));
console.log("Scrambled Case:", caseUtils.toScrambledCase(testPhrase));

// Zalgo can break terminal formatting, so we'll do it last
console.log("\n=== SPECIAL EFFECT ===");
console.log("Zalgo Case:", caseUtils.toZalgoCase(testPhrase));

// Example with box drawing (needs to handle multiline)
console.log("\n=== BOX DRAWING ===");
console.log(caseUtils.toBoxedCase("This is a boxed text example\nWith multiple lines\nTo show how boxing works!")); 