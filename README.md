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
javascript:/* paste minified main_script.js here */

------

## 🧩 Google Apps Script

This repository includes a reference Google Apps Script.

You can use this script as a starting point to deploy your own version of the backend logic in [Google Apps Script](https://script.google.com). This is particularly helpful if you want to handle the form data or automate tasks based on the autofilled fields.

### How to Use

1. Go to [https://script.google.com](https://script.google.com).
2. Create a new project.
3. Copy the contents of `appscript codes` into the project.
4. Apply some modification depending on your own needs.
5. Deploy as a web app if needed (e.g., for form handling or triggers).

> **Note:** This project is for internal use and should be customized depending on your workflow.

