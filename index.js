class StringCaseChange {
    // Function to convert string to lowercase
    static toLowerCase(str) {
        return str.toLowerCase();
    }

    // Function to convert string to uppercase
    static toUpperCase(str) {
        return str.toUpperCase();
    }

    // Function to convert string to title case
    static toTitleCase(str) {
        return str.replace(/\b\w/g, function (char) {
            return char.toUpperCase();
        });
    }

    // Function to convert string to sentence case
    static toSentenceCase(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

// Exporting the class
module.exports = StringCaseChange;
