"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InvalidSnippetArguments_1 = __importDefault(require("./error/InvalidSnippetArguments"));
class VsSnippet {
    constructor(title, prefix, body, description) {
        this.title = title;
        this.prefix = prefix;
        this.body = body;
        this.description = description;
        this.removeSpace();
        this.validateArguments();
    }
    validateArguments() {
        if (this.title.length == 0) {
            throw new InvalidSnippetArguments_1.default('Empty title is not allowed');
        }
        if (this.prefix.length == 0) {
            throw new InvalidSnippetArguments_1.default('Empty prefix is not allowed');
        }
        if (this.body.length == 0) {
            throw new InvalidSnippetArguments_1.default('Empty body is not allowed');
        }
    }
    removeSpace() {
        this.title = this.title.trim().replace(/["]/gi, '\\"');
        this.body = this.body.trim().replace(/["]/gi, '\\"');
        this.prefix = this.prefix.trim().replace(/["]/gi, '\\"');
        if (this.description.trim().length < 1) {
            this.description = this.title;
        }
    }
    getSnippet() {
        let snippet = '';
        snippet += `"${this.title}": {\n`;
        snippet += `\t"prefix": "${this.prefix}",\n`;
        let lines = this.body.split("\n");
        console.log("lines:" + lines);
        let bodys = lines.map((line) => { return `\t\t"t${line}"`; }).join(',\n');
        snippet += '\t"body": [\n' + bodys + "\n\t],\n";
        snippet += `\t"description": "${this.description}"\n}`;
        return snippet;
    }
}
exports.default = VsSnippet;
