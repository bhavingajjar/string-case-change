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
}

// Exporting the class
module.exports = stringCaseChange;
