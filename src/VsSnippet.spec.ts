import InvalidSnippetArguments from './error/InvalidSnippetArguments';
import VsSnippet from './VsSnippet'

// "Print to console": {
	// 	"prefix": "log",
	// 	"body": [
	// 		"console.log('$1');",
	// 		"$2"
	// 	],
	// 	"description": "Log output to console"

describe('VsSnippet', () => {

    test('create', () => {
        let title: string = 'title  ';
        let prefix: string = 't123';
        let body: string = '123\n456';
        let description: string = '';
        const snippet = new VsSnippet(title, prefix, body, description);
        expect(snippet).toBeDefined();
        let code = snippet.getSnippet();
        console.log("---------------------------------------")
        console.log(code);
        console.log("---------------------------------------")
        
    })
    test('arguments validation',()=>{
        expect( () => { new VsSnippet('','','','') } ).toThrowError(InvalidSnippetArguments);
        expect( () => { new VsSnippet('11','','','') } ).toThrowError(InvalidSnippetArguments);
        expect( () => { new VsSnippet('11','22','','') } ).toThrowError(InvalidSnippetArguments);
    })
});