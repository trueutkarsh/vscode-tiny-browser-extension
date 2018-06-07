# tiny-browser README

Switching back and forth between browser and code editor can be annoying. Specially when using github/stackoverflow it is easy to
get lost between lines. Don't you dare think that we can can intergrate a browser in vscode. It is a lightweight code-editor and 
it is suppose to stay that way (practically I don't even know how to do it.)

Through this extension we aim to open urls directly in vscode windows to reduce the hustle. Clearly we can't open dyanmic pages yet, 
but this works just fine for github and stackoverflow urls. Support for other urls might be added in future.

**Current Version** : 1.0.0

## Features

### Done
1. Open hardcoded urls
2. Read urls from dialogue box or commandbox itself
3. Retain webview on switching tabs
4. Open new url in same/other window

### TODO

5. Try external loading css
6. Try speeding up webviewloading / File an issue 

## Limitations / Issues

* *Can't open*
* * pdfs
* * Webpages with 
* * * images
* * * gifs
* * * videos
* *Why ?*
* * This is primarily because no we can't do ajax calls here and xmlhttp request doesn't waits for all asynchronous calls to get finished.
* * Might fix this in future
* *Webview Loading is Slow*
* *Why ?*
* * Can't figure out right now. Will file an issue soon.
## Requirements

Nothing special.

<!-- ## Extension Settings

Will update this late
Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: enable/disable this extension
* `myExtension.thing`: set to `blah` to do something

## Known Issues

* first
* second
* third
 -->

## Release Notes


### 1.0.0

Initial release of tiny-browser.
TODO #1-4 are done and tiny-broswer is ready to be used.

<!-- ### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z. -->

