# casetext-transformer

A lightweight JavaScript utility for transforming text between different case styles.

## Installation

```bash
npm install casetext-transformer
```

## Usage

```javascript
// Import specific functions
import { toCamelCase, toSnakeCase, toKebabCase, toPascalCase, toTitleCase } from 'casetext-transformer';

// Or import all functions
import * as caseUtils from 'casetext-transformer';

// Examples
toCamelCase("hello world");     // "helloWorld"
toSnakeCase("helloWorld");      // "hello_world"
toKebabCase("helloWorld");      // "hello-world"
toPascalCase("hello world");    // "HelloWorld"
toTitleCase("hello world");     // "Hello World"
```

## API

### toCamelCase(string)
Converts text to camelCase (first word lowercase, subsequent words capitalized with no spaces).

### toSnakeCase(string)
Converts text to snake_case (all lowercase with underscores).

### toKebabCase(string)
Converts text to kebab-case (all lowercase with hyphens).

### toPascalCase(string)
Converts text to PascalCase (all words capitalized with no spaces).

### toTitleCase(string)
Converts text to Title Case (first letter of each word capitalized).

## License

ISC © Henry Song
# text-transformer
