/**
 * AttrEactive Internationalization
 */

function createInstance() {
  var library = {};
  var currentLocale = 'en';

  function i18n(key) {
    if (!library[currentLocale] || !library[currentLocale][key]) {
      return '@' + key + '@';
    }

    return library[currentLocale][key];
  }

  function extend(locale, messages) {
    if (!library[locale]) {
      library[locale] = {};
    }

    Object.keys(messages).forEach(function(key) {
      library[locale][key] = messages[key];
    });
  }

  function locale(locale) {
    currentLocale = locale;
  }

  i18n.extend = extend;
  i18n.locale = locale;

  return i18n;
}

module.exports = createInstance();
module.exports.createInstance = createInstance;
