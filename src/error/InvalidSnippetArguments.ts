export default class InvalidSnippetArguments extends Error {
    constructor(message='Invalid snippet argumemt'){
        super(message);
    }   
}