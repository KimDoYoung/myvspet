declare class VsSnippet {
    private title;
    private prefix;
    private body;
    private description;
    constructor(title: string, prefix: string, body: string, description: string);
    private validateArguments;
    private removeSpace;
    getSnippet(): string;
}
export default VsSnippet;
