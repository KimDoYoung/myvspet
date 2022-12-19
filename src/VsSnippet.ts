import InvalidSnippetArguments from "./error/InvalidSnippetArguments";

class VsSnippet{
    constructor(private title:string, 
        private prefix:string, 
        private body: string, 
        private description: string){
        
        this.removeSpace();
        this.validateArguments();
    }

    private validateArguments() {
        if(this.title.length == 0) {
            throw new InvalidSnippetArguments('Empty title is not allowed');
        }
        if(this.prefix.length == 0){
            throw new InvalidSnippetArguments('Empty prefix is not allowed')
        }
        if(this.body.length == 0) {
            throw new InvalidSnippetArguments('Empty body is not allowed')
        }
    }
    private removeSpace() {
       this.title = this.title.trim().replace(/["]/gi, '\\"');
       this.body = this.body.trim().replace(/["]/gi, '\\"');
       this.prefix = this.prefix.trim().replace(/["]/gi, '\\"');
       if(this.description.trim().length < 1){
        this.description = this.title;
       }
    }
    getSnippet(){

        let snippet: string = '';
        snippet += `"${this.title}": {\n`;
        snippet += `\t"prefix": "${this.prefix}",\n`;
        let lines = this.body.split("\n");
        console.log("lines:" + lines)
        let bodys = lines.map((line)=>{return `\t\t"t${line}"`}).join(',\n');
        snippet += '\t"body": [\n' + bodys + "\n\t],\n";
        snippet += `\t"description": "${this.description}"\n}` ;
        
        return snippet;
    }
}

export default VsSnippet;


