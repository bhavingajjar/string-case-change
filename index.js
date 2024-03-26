class stringCaseChange {
    // Function to convert string to lowercase
    static toLowerCase(str) {
        return str.toLowerCase();
    }

    // Function to convert string to uppercase
    static toUpperCase(str) {
        str = this.toLowerCase(str); // Convert to lowercase first
        return str.toUpperCase();
    }

    // Function to convert string to title case
    static toTitleCase(str) {
        str = this.toLowerCase(str); // Convert to lowercase first
        return str.replace(/\b\w/g, function (char) {
            return char.toUpperCase();
        });
    }

    // Function to convert string to sentence case
    static toSentenceCase(str) {
        str = this.toLowerCase(str); // Convert to lowercase first
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    // Function to convert string to camel case
    static toCamelCase(str) {
        str = this.toLowerCase(str); // Convert to lowercase first
        return str.replace(/\s(.)/g, function ($1) {
            return $1.toUpperCase();
        }).replace(/\s/g, '').replace(/^(.)/, function ($1) {
            return $1.toLowerCase();
        });
    }

    // Function to convert string to snake case
    static toSnakeCase(str) {
        str = this.toLowerCase(str); // Convert to lowercase first
        return str.replace(/\s/g, '_');
    }

    // Function to convert string to kebab case
    static toKebabCase(str) {
        str = this.toLowerCase(str); // Convert to lowercase first
        return str.replace(/\s/g, '-');
    }

    // Function to convert string to pascal case
    static toPascalCase(str) {
        str = this.toLowerCase(str); // Convert to lowercase first
        return str.replace(/\w+/g, function (w) {
            return w[0].toUpperCase() + w.slice(1).toLowerCase();
        }).replace(/\s/g, '');
    }

    // Function to convert string to constant case (UPPERCASE_SNAKE_CASE)
    static toConstantCase(str) {
        str = this.toLowerCase(str); // Convert to lowercase first
        return str.replace(/\s/g, '_').toUpperCase();
    }

    // Function to convert string to dot case (lowercase.dot.case)
    static toDotCase(str) {
        str = this.toLowerCase(str); // Convert to lowercase first
        return str.replace(/\s/g, '.');
    }

    // Function to convert string to path case (lowercase/path/case)
    static toPathCase(str) {
        str = this.toLowerCase(str); // Convert to lowercase first
        return str.replace(/\s/g, '/');
    }

    static toAlternatingCase(str) {
        return str.split('').map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
    }

    // Function to convert string to inverted case
    static toInvertedCase(str) {
        return str.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
    }

    // Function to convert string to sponge case
    static toSpongeCase(str) {
        return str.split('').map(char => Math.random() < 0.5 ? char.toUpperCase() : char.toLowerCase()).join('');
    }

    // Function to convert string to reverse case
    static toReverseCase(str) {
        return str.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).reverse().join('');
    }

    // Function to convert string to small caps
    static toSmallCaps(str) {
        return str.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char).join('');
    }

    // Function to convert string to mirrored case
    static toMirroredCase(str) {
        const mirroredChars = {
            a: 'ɐ',
            b: 'q',
            c: 'ɔ',
            d: 'p',
            e: 'ǝ',
            f: 'ɟ',
            g: 'ƃ',
            h: 'ɥ',
            i: 'ᴉ',
            j: 'ɾ',
            k: 'ʞ',
            l: 'l',
            m: 'ɯ',
            n: 'u',
            o: 'o',
            p: 'd',
            q: 'b',
            r: 'ɹ',
            s: 's',
            t: 'ʇ',
            u: 'n',
            v: 'ʌ',
            w: 'ʍ',
            x: 'x',
            y: 'ʎ',
            z: 'z',
            A: '∀',
            B: '𐐒',
            C: 'Ɔ',
            D: 'ᗡ',
            E: 'Ǝ',
            F: 'Ⅎ',
            G: '⅁',
            H: 'H',
            I: 'I',
            J: 'ſ',
            K: '⋊',
            L: '⅂',
            M: 'W',
            N: 'N',
            O: 'O',
            P: 'Ԁ',
            Q: 'Ό',
            R: 'ᴚ',
            S: 'S',
            T: '⊥',
            U: '∩',
            V: 'ᴧ',
            W: 'M',
            X: 'X',
            Y: '⅄',
            Z: 'Z',
            '0': '0',
            '1': 'Ɩ',
            '2': 'ᄅ',
            '3': 'Ɛ',
            '4': 'ㄣ',
            '5': 'ϛ',
            '6': '9',
            '7': 'ㄥ',
            '8': '8',
            '9': '6',
            '?': '¿',
            '!': '¡',
            '.': '˙',
            ',': "'",
            "'": ',',
            '"': ',,',
            '`': ',',
            '(': ')',
            ')': '(',
            '[': ']',
            ']': '[',
            '{': '}',
            '}': '{',
            '<': '>',
            '>': '<',
            '<': '>',
            '>': '<'
        };
        return str.split('').map(char => mirroredChars[char] ? mirroredChars[char] : char).reverse().join('');
    }
}

// Exporting the class
module.exports = stringCaseChange;
