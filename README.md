# autofill-opentools

> ⚠️ **Note:** This project is intended for **internal use only**.

This repository provides a convenient bookmarklet-based loader that dynamically fetches and executes a JavaScript automation script hosted on GitHub. The main purpose is to **autofill basic information on documentation pages and open testing tools**—saving time and ensuring consistency across sessions.

---

## 📁 Files

### 🔹 `main_script.js`

This is the main script that contains the automation logic. For example, it may:

- Autofill text fields with default values (e.g., name, email).
- Open developer tools, testing panels, or modals.
- Perform any custom tasks defined by the user.

Update this file as needed to customize the behavior of the bookmarklet.

---

### 🔹 `bookmarklet.js`

This is a **loader script** that can be saved as a browser bookmark. When clicked, it dynamically fetches and executes the content of `main_script.js` directly from GitHub.

#### Structure of the loader:

```javascript
javascript:(async () => {
  const rawGithubUrl = 'https://raw.githubusercontent.com/samsononymous/autofill-opentools/main/main_script.js';

  try {
    const response = await fetch(rawGithubUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsCode = await response.text();

    const scriptElement = document.createElement('script');
    scriptElement.textContent = jsCode;
    document.head.appendChild(scriptElement);

    scriptElement.remove();

  } catch (error) {
    console.error('Error fetching or executing the script:', error);
    alert(`Error: ${error.message}`);
  }
})();
