# Autofill OpenTools (Internal Use Only)

This project is used internally to automate:
- Autofilling basic information in forms
- Launching necessary tools for testing small applications

> ⚠️ **Note:** This tool is intended for internal use only.

## How to Use

Due to security restrictions (Content Security Policy), loading external scripts from GitHub may not work on certain web pages (like Athena).  
Instead, we use an **inline bookmarklet** approach.

### 1. Copy the Inline Bookmarklet

- Open `main_script.js`
- Minify the code using a tool like [https://javascript-minifier.com/](https://javascript-minifier.com/)
- Wrap the minified code like this:

```js
javascript:(function(){/* paste minified main_script.js here */})();
