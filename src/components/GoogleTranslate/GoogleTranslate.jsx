import { useEffect } from 'react'

const GoogleTranslate = () => {
  useEffect(() => {
    const initTranslate = () => {
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        if (!document.querySelector('.goog-te-combo')) {
          new window.google.translate.TranslateElement({
            pageLanguage: 'en',
            autoDisplay: false
          }, 'google_translate_element');
        }
      }
    };

    // Try immediately
    initTranslate();

    // Also set a small interval just in case the script is still loading
    const interval = setInterval(() => {
      if (window.google && window.google.translate) {
        initTranslate();
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  return (
    <div id="google_translate_element" className="google-translate-container min-h-[32px] flex items-center"></div>
  )
}

export default GoogleTranslate
