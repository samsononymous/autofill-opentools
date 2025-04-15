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
