# casetext-transformer

The ultimate JavaScript text transformation library with 40+ different ways to transform your text. From standard case conversions to creative and fun text effects - this package has it all!

## Installation

```bash
npm install casetext-transformer
```

## Usage

```javascript
// Import specific functions
import { toCamelCase, toUwuCase, toZalgoCase } from 'casetext-transformer';

// Or import all functions
import * as caseUtils from 'casetext-transformer';

// Examples
toCamelCase("hello world");     // "helloWorld"
toVaporwaveCase("aesthetic");   // "ａｅｓｔｈｅｔｉｃ"
toZalgoCase("spooky");          // "s̨̤͘p̸̨o͕̐o̞͘͜ḱ̢̄y̝͗"
```

## Transformations

### Standard Case Transformations

| Function | Example Input | Example Output |
|----------|---------------|----------------|
| `toCamelCase` | "hello world" | "helloWorld" |
| `toSnakeCase` | "helloWorld" | "hello_world" |
| `toKebabCase` | "helloWorld" | "hello-world" |
| `toPascalCase` | "hello world" | "HelloWorld" |
| `toTitleCase` | "hello world" | "Hello World" |
| `toSentenceCase` | "hello world" | "Hello world" |
| `toConstantCase` | "hello world" | "HELLO_WORLD" |
| `toDotCase` | "helloWorld" | "hello.world" |
| `toPathCase` | "helloWorld" | "hello/world" |
| `toHeaderCase` | "hello world" | "Hello-World" |
| `toSlugCase` | "Hello World!" | "hello-world" |

### Social Media & Fun Transformations

| Function | Example Input | Example Output |
|----------|---------------|----------------|
| `toMockingCase` | "hello world" | "hElLo wOrLd" |
| `toUwuCase` | "hello world" | "hewwo wowwd uwu!" |
| `toHashtagCase` | "trending now" | "#trending #now" |
| `toClapsCase` | "make a point" | "make 👏 a 👏 point" |
| `toSparklesCase` | "special text" | "✨ special text ✨" |
| `toEmojifyCase` | "I love cats" | "I love cats 🐱" |
| `toScrambledCase` | "scrambled text" | "srelcbamd txet" |
| `toStutterCase` | "excited words" | "e-e-excited w-w-words" |
| `toRandomCase` | "random text" | "rAnDOm tExT" |

### Unicode & Visual Transformations

| Function | Example Input | Example Output |
|----------|---------------|----------------|
| `toVaporwaveCase` | "aesthetic" | "ａｅｓｔｈｅｔｉｃ" |
| `toSmallCapsCase` | "small caps" | "sᴍᴀʟʟ ᴄᴀᴘs" |
| `toBubbleCase` | "bubble text" | "ⓑⓤⓑⓑⓛⓔ ⓣⓔⓧⓣ" |
| `toStretchedCase` | "spaced out" | "s p a c e d  o u t" |
| `toMirrorCase` | "mirror text" | "ʇxǝʇ ɹoɹɹᴉɯ" |
| `toAlternateCase` | "similar chars" | "sіміӏаг сһагѕ" |
| `toOldEnglishCase` | "ye olde text" | "þe olde text" |
| `toBoxedCase` | "boxed text" | (text in an ASCII box) |
| `toZalgoCase` | "glitchy text" | "g̢̗̱l͞i̦̕t̡̙̞c̢̗̬h̠͘ỷ̢̙ t̳͖e͓͎x̧̙̘t̛̬" |

### Encoding & Special Transformations

| Function | Example Input | Example Output |
|----------|---------------|----------------|
| `toBinaryCase` | "binary" | "01100010 01101001 01101110 01100001 01110010 01111001" |
| `toMorseCode` | "SOS" | "... --- ..." |
| `toROT13Case` | "secret" | "frperg" |
| `toBase64Case` | "encode me" | "ZW5jb2RlIG1l" |
| `toJSONCase` | "json data" | "{\"text\":\"json data\"}" |
| `toMinifyCase` | "remove spaces" | "removespaces" |
| `toRedactedCase` | "classified" | "██████████" |
| `toNATOCase` | "NATO" | "November Alpha Tango Oscar" |
| `toPigLatinCase` | "pig latin" | "igpay atinlay" |
| `toLeetCase` | "elite hacker" | "31173 h4ck3r" |
| `toBackwardsCase` | "reversed" | "desrever" |

## Examples

Check out our mega-test.js for examples of all transformations in action:

```javascript
// Run the mega test to see all transformations
npm run mega-test
```

## Features

✅ 40+ text transformations in a single package  
✅ Standard case conversions (camel, snake, kebab, etc.)  
✅ Social media fun (mocking text, uwu speak, hashtags)  
✅ Unicode transformations (vaporwave, small caps, bubbles)  
✅ Encoding utilities (morse code, binary, base64)  
✅ Special effects (zalgo, redacted, boxed text)  
✅ Zero dependencies  
✅ Fully documented API  
✅ Works in Node.js and browsers  

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to help make this project even better.

### How to Contribute

1. Fork the repository on GitHub
2. Clone your fork: `git clone https://github.com/your-username/text-transformer.git`
3. Create a branch for your feature: `git checkout -b feature-name`
4. Make your changes and commit them: `git commit -m 'Add some feature'`
5. Push to your branch: `git push origin feature-name`
6. Submit a pull request

Some ideas for contributions:
- Add new text transformation functions
- Improve existing transformations
- Add TypeScript type definitions
- Write tests
- Create a demo website

## License

MIT © Henry Song
