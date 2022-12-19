"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidSnippetArguments extends Error {
    constructor(message = 'Invalid snippet argumemt') {
        super(message);
    }
}
exports.default = InvalidSnippetArguments;
