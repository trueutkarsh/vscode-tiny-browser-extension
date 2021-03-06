// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


let url = "https://code.visualstudio.com/docs/extensions/webview";



// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "tiny-browser" is now active!');

    let panel = undefined;

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.openLinkHere', function() {
        // The code you place here will be executed every time your command is executed




        if (!panel) {

            let position = vscode.window.activeTextEditor.viewColumn;
            panel = vscode.window.createWebviewPanel('tinyBrowser', url, position, {
                enableScripts: true
            });
        }


        function httpGet(theUrl) {

            let xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    updateView(xmlhttp);
                }
            }
            xmlhttp.open("GET", theUrl, false, "", "");
            xmlhttp.send("");
        }

        function updateView(xmlhttp) {
            panel.webview.html = xmlhttp.responseText;
            panel.title = (/<title>(.*?)<\/title>/m).exec(xmlhttp.responseText)[1];

        }


        let options = {
            prompt: "Label: ",
            placeHolder: "(placeholder)"
        }

        vscode.window.showInputBox(options).then(value => {
            if (value) {
                url = value;
            }
            panel.webview.html = "Waiting for " + url;
            // show the next dialog, etc.
            httpGet(url);
        });


        // Display a message box to the user
        // vscode.window.showInformationMessage('Hello World!');
    });


    let disposable2 = vscode.commands.registerCommand('extension.openLinkNewWindow', function() {
        // The code you place here will be executed every time your command is executed



        let position = vscode.window.activeTextEditor.viewColumn;
        panel = vscode.window.createWebviewPanel('tinyBrowser', url, position, {
            enableScripts: true
        });


        function httpGet(theUrl) {

            let xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    updateView(xmlhttp);
                }
            }
            xmlhttp.open("GET", theUrl, false, "", "");
            xmlhttp.send("");
        }

        function updateView(xmlhttp) {
            panel.webview.html = xmlhttp.responseText;
            panel.title = (/<title>(.*?)<\/title>/m).exec(xmlhttp.responseText)[1];

        }


        let options = {
            prompt: "Label: ",
            placeHolder: "(placeholder)"
        }

        vscode.window.showInputBox(options).then(value => {
            if (value) {
                url = value;
            }
            panel.webview.html = "Waiting for " + url;
            // show the next dialog, etc.
            httpGet(url);
        });


        // Display a message box to the user
        // vscode.window.showInformationMessage('Hello World!');
    });



    context.subscriptions.push(disposable);
    context.subscriptions.push(disposable2);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}
exports.deactivate = deactivate;