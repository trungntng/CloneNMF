import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';

const en = require('./languages/en');
const vi = require('./languages/vi');

i18n.fallbacks = true;
i18n.translations = {en, vi};

const fallback = {languageTag: 'vi', isRTL: false};

const {languageTag} =
  RNLocalize.findBestAvailableLanguage(Object.keys(i18n.translations)) ||
  fallback;
i18n.locale = languageTag;
