# tiny-browser README

Switching back and forth between browser and code editor can be annoying. Specially when using github/stackoverflow it is easy to
get lost between lines. Don't you dare think that we can can intergrate a browser in vscode. It is a lightweight code-editor and 
it is suppose to stay that way (practically I don't even know how to do it.)

Through this extension we aim to open urls directly in vscode windows to reduce the hustle. Clearly we can't open dyanmic pages yet, 
but this works just fine for github and stackoverflow urls. Support for other urls might be added in future.

## Features

### Done
1. Open hardcoded urls
2. Read urls from dialogue box or commandbox itself

### TODO

3. Retain webview on switching tabs
4. Try external loading css
5. Open new url in same/other window

## Limitations / Issues

* Can't open 
* * pdfs
* * Webpages with 
* * * images
* * * gifs
* * * videos

* Why ?
* * This is primarily because no we can't do ajax calls here and xmlhttp request doesn't waits for all asynchronous calls to get finished.

## Requirements

Nothing special.

## Extension Settings

Will update this late
<!-- Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: enable/disable this extension
* `myExtension.thing`: set to `blah` to do something -->

<!-- ## Known Issues

* first
* second
* third -->


## Release Notes

Still in development phase.
<!-- 
### 1.0.0

Initial release of tiny-browser

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z. -->

