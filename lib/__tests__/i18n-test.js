/**
 * AttrEactive Internationalization
 */
/* global afterEach beforeEach describe it jest pit xdescribe xit */
/* global expect */

jest.autoMockOff();

var i18n = require("../i18n");

describe('i18n', function() {
  it('should work', function() {
    expect(i18n('abba')).toEqual('@abba@');
    i18n.extend('en', {
      'abba': 'Abba'
    });
    expect(i18n('abba')).toEqual('Abba');
    i18n.extend('ru', {
      'abba': 'Абба'
    });
    expect(i18n('abba')).toEqual('Abba');
    i18n.locale('ru');
    expect(i18n('abba')).toEqual('Абба');

    var i = i18n.createInstance();

    expect(i('abba')).toEqual('@abba@');
    i.extend('en', {
      'abba': 'Abba'
    });
    expect(i('abba')).toEqual('Abba');
    i.extend('ru', {
      'abba': 'Абба'
    });
    expect(i('abba')).toEqual('Abba');
    i.locale('ru');
    expect(i('abba')).toEqual('Абба');
  });
});
