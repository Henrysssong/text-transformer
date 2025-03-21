function toCamelCase(word) {
    return word.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}


function toSnakeCase(word) {
    return word.replace(/([A-Z])/g, '_$1').toLowerCase();
}


function toKebabCase(word) {
    return word.replace(/([A-Z])/g, '-$1').toLowerCase();
}


function toPascalCase(word) {
    return word.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word) {
        return word.toUpperCase();
    }).replace(/\s+/g, '');
}


function toTitleCase(word) {
    return word.replace(/\b\w/g, function(word) {
        return word.toUpperCase();
    });
}


function toSentenceCase(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}


function toConstantCase(word) {
    return word.toUpperCase().replace(/\s+/g, '_');
}   


function toDotCase(word) {
    return word.replace(/([A-Z])/g, '.$1').toLowerCase();
}   


function toPathCase(word) {
    return word.replace(/([A-Z])/g, '/$1').toLowerCase();
}   


function toHeaderCase(word) {
    return toTitleCase(word).replace(/\s+/g, '-');
}      


function toSlugCase(word) {
    return word.toLowerCase().replace(/\s+/g, '-');
}      

// Fun and creative transformations

/**
 * Alternating uppercase and lowercase letters (Mocking SpongeBob meme style)
 */
function toMockingCase(word) {
    return word.split('').map((char, index) => 
        index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
    ).join('');
}

/**
 * Convert text to UwU speak
 */
function toUwuCase(word) {
    return word
        .replace(/[lr]/g, 'w')
        .replace(/[LR]/g, 'W')
        .replace(/n([aeiou])/g, 'ny$1')
        .replace(/N([AEIOU])/g, 'NY$1')
        .replace(/ove/g, 'uv')
        .replace(/(\.|\?|!)$/g, ' uwu$1');
}

/**
 * Convert text to full-width aesthetic vaporwave text
 */
function toVaporwaveCase(word) {
    return word.split('').map(char => {
        const code = char.charCodeAt(0);
        // Basic ASCII
        if (code >= 33 && code <= 126) {
            return String.fromCharCode(code + 0xFEE0); // Shift to full-width
        }
        // Space
        if (code === 32) {
            return '　'; // Full-width space
        }
        return char;
    }).join('');
}

/**
 * Convert text to 1337 (leet) speak
 */
function toLeetCase(word) {
    const leetMap = {
        'a': '4', 'e': '3', 'i': '1', 'o': '0', 
        's': '5', 't': '7', 'b': '8', 'g': '9',
        'l': '1', 'z': '2'
    };
    
    return word.toLowerCase().split('').map(char => 
        leetMap[char] || char
    ).join('');
}

/**
 * Reverse the text
 */
function toBackwardsCase(word) {
    return word.split('').reverse().join('');
}

/**
 * Add stutters to the first letter of each word
 */
function toStutterCase(word) {
    return word.replace(/\b(\w)/g, '$1-$1-$1');
}

/**
 * Randomly apply upper or lowercase to each letter
 */
function toRandomCase(word) {
    return word.split('').map(char => 
        Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()
    ).join('');
}

/**
 * Add "zalgo" text effect (corrupted/glitchy looking text)
 */
function toZalgoCase(word) {
    const zalgoUp = [
        '\u030d', '\u030e', '\u0304', '\u0305', '\u033f', 
        '\u0311', '\u0306', '\u0310', '\u0352', '\u0357',
        '\u0351', '\u0307', '\u0308', '\u030a', '\u0342'
    ];
    const zalgoMid = [
        '\u0315', '\u031b', '\u0340', '\u0341', '\u0358',
        '\u0321', '\u0322', '\u0327', '\u0328', '\u0334',
        '\u0335', '\u0336', '\u034f', '\u035c', '\u035d'
    ];
    const zalgoDown = [
        '\u0316', '\u0317', '\u0318', '\u0319', '\u031c',
        '\u031d', '\u031e', '\u031f', '\u0320', '\u0324',
        '\u0325', '\u0326', '\u0329', '\u032a', '\u032b'
    ];
    
    return word.split('').map(char => {
        let result = char;
        
        // Add random zalgo marks
        const intensity = 3; // Adjustable intensity
        
        for (let i = 0; i < Math.floor(Math.random() * intensity); i++) {
            result += zalgoUp[Math.floor(Math.random() * zalgoUp.length)];
        }
        for (let i = 0; i < Math.floor(Math.random() * intensity); i++) {
            result += zalgoMid[Math.floor(Math.random() * zalgoMid.length)];
        }
        for (let i = 0; i < Math.floor(Math.random() * intensity); i++) {
            result += zalgoDown[Math.floor(Math.random() * zalgoDown.length)];
        }
        
        return result;
    }).join('');
}

/**
 * Convert text to Morse code
 */
function toMorseCode(word) {
    const morseCodeMap = {
        'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 
        'f': '..-.', 'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 
        'k': '-.-', 'l': '.-..', 'm': '--', 'n': '-.', 'o': '---', 
        'p': '.--.', 'q': '--.-', 'r': '.-.', 's': '...', 't': '-', 
        'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-', 'y': '-.--', 
        'z': '--..', 
        '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', 
        '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', 
        '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', 
        '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', 
        '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', 
        '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', 
        '$': '...-..-', '@': '.--.-.'
    };
    
    return word.toLowerCase().split('').map(char => {
        if (char === ' ') return '   '; // 3 spaces between words
        return morseCodeMap[char] || char;
    }).join(' ');
}

/**
 * Convert text to binary representation
 */
function toBinaryCase(word) {
    return word.split('').map(char => 
        char.charCodeAt(0).toString(2).padStart(8, '0')
    ).join(' ');
}

/**
 * Convert text to Pig Latin
 */
function toPigLatinCase(word) {
    return word.replace(/\b([aeiou]\w*)\b/gi, '$1way')
        .replace(/\b([bcdfghjklmnpqrstvwxyz]+)(\w*)\b/gi, '$2$1ay');
}

/**
 * Replace characters with censorship symbols
 */
function toRedactedCase(word) {
    return word.replace(/[a-zA-Z0-9]/g, '█');
}

/**
 * Add clap emoji between each word
 */
function toClapsCase(word) {
    return word.replace(/\s+/g, ' 👏 ');
}

/**
 * Convert to hashtag style
 */
function toHashtagCase(word) {
    return word.replace(/\b(\w+)\b/g, '#$1');
}

/**
 * Minify text by removing all spaces
 */
function toMinifyCase(word) {
    return word.replace(/\s+/g, '').toLowerCase();
}

/**
 * Simple Caesar cipher encryption (ROT13)
 */
function toROT13Case(word) {
    return word.replace(/[a-zA-Z]/g, function(char) {
        const code = char.charCodeAt(0);
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            const base = code <= 90 ? 65 : 97;
            return String.fromCharCode(((code - base + 13) % 26) + base);
        }
        return char;
    });
}

/**
 * Convert to small caps using Unicode small capital letters
 */
function toSmallCapsCase(word) {
    const smallCapsMap = {
        'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ꜰ',
        'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ',
        'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ',
        's': 's', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x',
        'y': 'ʏ', 'z': 'ᴢ'
    };
    
    return word.replace(/([a-z])/g, char => smallCapsMap[char] || char);
}

/**
 * Add spaces between characters
 */
function toStretchedCase(word) {
    return word.split('').join(' ');
}

/**
 * Format text as a JSON string
 */
function toJSONCase(word) {
    return JSON.stringify({ text: word });
}

/**
 * Replace characters with similar-looking alternatives
 */
function toAlternateCase(word) {
    const alternateMap = {
        'a': 'α', 'b': 'в', 'c': 'ϲ', 'd': 'ԁ', 'e': 'е', 'i': 'і',
        'j': 'ј', 'k': 'к', 'l': 'ӏ', 'm': 'м', 'n': 'ո', 'o': 'о',
        'p': 'р', 's': 'ѕ', 't': 'т', 'u': 'υ', 'v': 'ν', 'w': 'ѡ',
        'x': 'х', 'y': 'у', 'z': 'ᴢ'
    };
    
    return word.replace(/([a-z])/gi, function(char) {
        const lowercase = char.toLowerCase();
        if (alternateMap[lowercase]) {
            return char === lowercase ? alternateMap[lowercase] : alternateMap[lowercase].toUpperCase();
        }
        return char;
    });
}

/**
 * Convert text to "old English" style
 */
function toOldEnglishCase(word) {
    return word
        .replace(/th/g, 'þ')
        .replace(/Th/g, 'Þ')
        .replace(/TH/g, 'Þ')
        .replace(/wh/g, 'ƿh')
        .replace(/Wh/g, 'Ƿh')
        .replace(/WH/g, 'ƿH')
        .replace(/w/g, 'ƿ')
        .replace(/W/g, 'Ƿ')
        .replace(/and/g, '&')
        .replace(/AND/g, '&')
        .replace(/you/g, 'thou')
        .replace(/You/g, 'Thou')
        .replace(/YOUR/g, 'THOU')
        .replace(/your/g, 'thy')
        .replace(/Your/g, 'Thy')
        .replace(/YOUR/g, 'THY')
        .replace(/are/g, 'art')
        .replace(/Are/g, 'Art')
        .replace(/ARE/g, 'ART')
        .replace(/is/g, 'ist')
        .replace(/Is/g, 'Ist')
        .replace(/IS/g, 'IST');
}

/**
 * Convert text to emojis based on key words
 */
function toEmojifyCase(word) {
    const emojiMap = {
        'happy': ' 😄', 'sad': ' 😢', 'love': ' ❤️', 'heart': ' ❤️',
        'laugh': ' 😂', 'eye': ' 👁️', 'eyes': ' 👀', 'smile': ' 😊',
        'cool': ' 😎', 'fire': ' 🔥', 'hot': ' 🔥', 'star': ' ⭐',
        'money': ' 💰', 'cat': ' 🐱', 'dog': ' 🐶', 'mouse': ' 🐭',
        'cow': ' 🐮', 'rabbit': ' 🐰', 'bear': ' 🐻', 'panda': ' 🐼',
        'fox': ' 🦊', 'tiger': ' 🐯', 'lion': ' 🦁', 'horse': ' 🐴',
        'unicorn': ' 🦄', 'pig': ' 🐷', 'frog': ' 🐸', 'monkey': ' 🐵',
        'chicken': ' 🐔', 'penguin': ' 🐧', 'bird': ' 🐦', 'baby': ' 👶',
        'man': ' 👨', 'woman': ' 👩', 'boy': ' 👦', 'girl': ' 👧',
        'clap': ' 👏', 'hands': ' 👐', 'handshake': ' 🤝', 'thumbs': ' 👍',
        'punch': ' 👊', 'fist': ' ✊', 'finger': ' 👆', 'hand': ' ✋',
        'sun': ' ☀️', 'moon': ' 🌙', 'star': ' ⭐', 'cloud': ' ☁️',
        'umbrella': ' ☂️', 'rain': ' 🌧️', 'snow': ' ❄️', 'winter': ' ⛄',
        'time': ' ⌚', 'clock': ' 🕰️', 'gift': ' 🎁', 'birthday': ' 🎂',
        'party': ' 🎉', 'christmas': ' 🎄', 'rocket': ' 🚀', 'car': ' 🚗',
        'bike': ' 🚲', 'plane': ' ✈️', 'ship': ' 🚢', 'house': ' 🏠',
        'building': ' 🏢', 'school': ' 🏫', 'hotel': ' 🏨', 'hospital': ' 🏥',
        'food': ' 🍔', 'pizza': ' 🍕', 'hamburger': ' 🍔', 'taco': ' 🌮',
        'burrito': ' 🌯', 'pasta': ' 🍝', 'popcorn': ' 🍿', 'cake': ' 🍰',
        'coffee': ' ☕', 'tea': ' 🍵', 'beer': ' 🍺', 'wine': ' 🍷',
        'dog': ' 🐶', 'cat': ' 🐱', 'mouse': ' 🐭', 'hamster': ' 🐹',
        'bunny': ' 🐰', 'fox': ' 🦊', 'bear': ' 🐻', 'panda': ' 🐼',
        'chicken': ' 🐔', 'penguin': ' 🐧', 'frog': ' 🐸', 'monkey': ' 🐵',
        'book': ' 📚', 'computer': ' 💻', 'phone': ' 📱', 'mail': ' 📧',
        'music': ' 🎵', 'game': ' 🎮', 'sport': ' ⚽', 'football': ' 🏈',
        'baseball': ' ⚾', 'basketball': ' 🏀', 'tennis': ' 🎾', 'rugby': ' 🏉'
    };
    
    // Case-insensitive replacement for each word in the dictionary
    Object.keys(emojiMap).forEach(key => {
        const regex = new RegExp(`\\b${key}\\b`, 'gi');
        word = word.replace(regex, match => match + emojiMap[key.toLowerCase()]);
    });
    
    return word;
}

/**
 * Add sparkles around the text ✨
 */
function toSparklesCase(word) {
    return `✨ ${word} ✨`;
}

/**
 * Create ASCII art blocks with text (box drawing)
 */
function toBoxedCase(word) {
    const lines = word.split('\n');
    const maxLength = Math.max(...lines.map(line => line.length));
    
    const top = `┌${'─'.repeat(maxLength + 2)}┐`;
    const bottom = `└${'─'.repeat(maxLength + 2)}┘`;
    
    const paddedLines = lines.map(line => 
        `│ ${line}${' '.repeat(maxLength - line.length)} │`
    );
    
    return `${top}\n${paddedLines.join('\n')}\n${bottom}`;
}

/**
 * Mirror text using special Unicode characters
 */
function toMirrorCase(word) {
    const mirrorMap = {
        'a': 'ɐ', 'b': 'q', 'c': 'ɔ', 'd': 'p', 'e': 'ǝ',
        'f': 'ɟ', 'g': 'ƃ', 'h': 'ɥ', 'i': 'ᴉ', 'j': 'ɾ',
        'k': 'ʞ', 'l': 'l', 'm': 'ɯ', 'n': 'u', 'o': 'o',
        'p': 'd', 'q': 'b', 'r': 'ɹ', 's': 's', 't': 'ʇ',
        'u': 'n', 'v': 'ʌ', 'w': 'ʍ', 'x': 'x', 'y': 'ʎ',
        'z': 'z', 'A': '∀', 'B': 'B', 'C': 'Ɔ', 'D': 'D',
        'E': 'Ǝ', 'F': 'Ⅎ', 'G': 'פ', 'H': 'H', 'I': 'I',
        'J': 'ſ', 'K': 'ʞ', 'L': '˥', 'M': 'W', 'N': 'N',
        'O': 'O', 'P': 'Ԁ', 'Q': 'Q', 'R': 'R', 'S': 'S',
        'T': '┴', 'U': '∩', 'V': 'Λ', 'W': 'M', 'X': 'X',
        'Y': '⅄', 'Z': 'Z', '0': '0', '1': 'Ɩ', '2': 'ᄅ',
        '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ',
        '8': '8', '9': '6', '.': '˙', ',': '\'', '\'': ',',
        '"': '„', '`': ',', '?': '¿', '!': '¡', '(': ')',
        ')': '(', '[': ']', ']': '[', '{': '}', '}': '{',
        '<': '>', '>': '<', '&': '⅋', '_': '‾', '^': 'v'
    };
    
    return word.split('').map(char => 
        mirrorMap[char] || char
    ).reverse().join('');
}

/**
 * Convert text to bubble letters using Unicode circled characters
 */
function toBubbleCase(word) {
    const bubbleMap = {
        'a': 'ⓐ', 'b': 'ⓑ', 'c': 'ⓒ', 'd': 'ⓓ', 'e': 'ⓔ',
        'f': 'ⓕ', 'g': 'ⓖ', 'h': 'ⓗ', 'i': 'ⓘ', 'j': 'ⓙ',
        'k': 'ⓚ', 'l': 'ⓛ', 'm': 'ⓜ', 'n': 'ⓝ', 'o': 'ⓞ',
        'p': 'ⓟ', 'q': 'ⓠ', 'r': 'ⓡ', 's': 'ⓢ', 't': 'ⓣ',
        'u': 'ⓤ', 'v': 'ⓥ', 'w': 'ⓦ', 'x': 'ⓧ', 'y': 'ⓨ',
        'z': 'ⓩ', 'A': 'Ⓐ', 'B': 'Ⓑ', 'C': 'Ⓒ', 'D': 'Ⓓ',
        'E': 'Ⓔ', 'F': 'Ⓕ', 'G': 'Ⓖ', 'H': 'Ⓗ', 'I': 'Ⓘ',
        'J': 'Ⓙ', 'K': 'Ⓚ', 'L': 'Ⓛ', 'M': 'Ⓜ', 'N': 'Ⓝ',
        'O': 'Ⓞ', 'P': 'Ⓟ', 'Q': 'Ⓠ', 'R': 'Ⓡ', 'S': 'Ⓢ',
        'T': 'Ⓣ', 'U': 'Ⓤ', 'V': 'Ⓥ', 'W': 'Ⓦ', 'X': 'Ⓧ',
        'Y': 'Ⓨ', 'Z': 'Ⓩ', '0': '⓪', '1': '①', '2': '②',
        '3': '③', '4': '④', '5': '⑤', '6': '⑥', '7': '⑦',
        '8': '⑧', '9': '⑨'
    };
    
    return word.split('').map(char => 
        bubbleMap[char] || char
    ).join('');
}

/**
 * Convert text to base64 encoding
 */
function toBase64Case(word) {
    if (typeof btoa === 'function') {
        return btoa(word); // Browser
    } else {
        return Buffer.from(word).toString('base64'); // Node.js
    }
}

/**
 * Convert words to scrambled text while keeping first and last letter intact
 * Based on the Cambridge University effect
 */
function toScrambledCase(word) {
    return word.replace(/\b\w{4,}\b/g, function(word) {
        const first = word.charAt(0);
        const last = word.charAt(word.length - 1);
        const middle = word.substring(1, word.length - 1).split('');
        
        // Shuffle the middle characters
        for (let i = middle.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [middle[i], middle[j]] = [middle[j], middle[i]];
        }
        
        return first + middle.join('') + last;
    });
}

/**
 * Convert text to NATO phonetic alphabet
 */
function toNATOCase(word) {
    const natoMap = {
        'a': 'Alpha', 'b': 'Bravo', 'c': 'Charlie', 'd': 'Delta', 
        'e': 'Echo', 'f': 'Foxtrot', 'g': 'Golf', 'h': 'Hotel', 
        'i': 'India', 'j': 'Juliett', 'k': 'Kilo', 'l': 'Lima', 
        'm': 'Mike', 'n': 'November', 'o': 'Oscar', 'p': 'Papa', 
        'q': 'Quebec', 'r': 'Romeo', 's': 'Sierra', 't': 'Tango', 
        'u': 'Uniform', 'v': 'Victor', 'w': 'Whiskey', 'x': 'X-ray', 
        'y': 'Yankee', 'z': 'Zulu',
        '0': 'Zero', '1': 'One', '2': 'Two', '3': 'Three', 
        '4': 'Four', '5': 'Five', '6': 'Six', '7': 'Seven', 
        '8': 'Eight', '9': 'Nine'
    };
    
    return word.toLowerCase().split('').map(char => 
        natoMap[char] ? natoMap[char] : char
    ).join(' ');
}

export {
    toCamelCase,
    toSnakeCase,
    toKebabCase,
    toPascalCase,
    toTitleCase,
    toSentenceCase,
    toConstantCase,
    toDotCase,
    toPathCase,
    toHeaderCase,
    toSlugCase,
    // Fun transformations
    toMockingCase,
    toUwuCase,
    toVaporwaveCase,
    toLeetCase,
    toBackwardsCase,
    toStutterCase,
    toRandomCase,
    // Additional transformations
    toZalgoCase,
    toMorseCode,
    toBinaryCase,
    toPigLatinCase,
    toRedactedCase,
    toClapsCase,
    toHashtagCase,
    toMinifyCase,
    toROT13Case,
    toSmallCapsCase,
    toStretchedCase,
    toJSONCase,
    toAlternateCase,
    toOldEnglishCase,
    toEmojifyCase,
    toSparklesCase,
    toBoxedCase,
    toMirrorCase,
    toBubbleCase,
    toBase64Case,
    toScrambledCase,
    toNATOCase
}