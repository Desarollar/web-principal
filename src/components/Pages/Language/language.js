const translations = {
    es: {
      greeting: "Hola",
      farewell: "Adiós"
    },
    en: {
      greeting: "Hello",
      farewell: "Goodbye"
    },
    fr: {
      greeting: "Bonjour",
      farewell: "Au revoir"
    }
  };
  
  let currentLanguage = 'es';
  
  const setLanguage = (language) => {
    if (translations[language]) {
      currentLanguage = language;
      localStorage.setItem('language', language);
      updateText();
    } else {
      console.warn(`Language ${language} not supported.`);
    }
  };
  
  const getTranslation = (key) => {
    return translations[currentLanguage][key] || key;
  };
  
  const updateText = () => {
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      element.textContent = getTranslation(key);
    });
  };
  
  // On page load, set the language to the one stored in localStorage
  document.addEventListener('DOMContentLoaded', () => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage && translations[storedLanguage]) {
      setLanguage(storedLanguage);
    } else {
      setLanguage('es'); // Default language
    }
  });
  