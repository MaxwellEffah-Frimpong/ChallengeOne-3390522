class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        const node = this._findNode(word);
        return node !== null && node.isEndOfWord;
    }

    startsWith(prefix) {
        return this._findNode(prefix) !== null;
    }

    _findNode(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return null;
            }
            node = node.children[char];
        }
        return node;
    }
}

// Example usage:
const commands = ["Trie", "insert", "search", "search", "startsWith", "insert", "search"];
const argumentsList = [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]];

const output = [];
let trie = null;

for (let i = 0; i < commands.length; i++) {
    const command = commands[i];
    const args = argumentsList[i];

    if (command === "Trie") {
        trie = new Trie();
        output.push(null);
    } else if (command === "insert") {
        trie.insert(args[0]);
        output.push(null);
    } else if (command === "search") {
        output.push(trie.search(args[0]));
    } else if (command === "startsWith") {
        output.push(trie.startsWith(args[0]));
    }
}

console.log(output); // [null, null, true, false, true, null, true]