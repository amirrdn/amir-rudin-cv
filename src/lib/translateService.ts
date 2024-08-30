import axios from 'axios';

const TRANSLATE_PROXY_URL = 'https://translate.googleapis.com/translate_a/single';

export const translateText = async (text: string, targetLang: string) => {
  try {
    const response = await axios.get(TRANSLATE_PROXY_URL, {
      params: {
        client: 'gtx',
        sl: 'auto', // Source language (auto detects language)
        tl: targetLang, // Target language
        dt: 't', // Translation
        q: text, // Text to translate
      },
    });
    const translatedText = response.data.translatedText || response.data[0][0][0];
    return translatedText;
  } catch (error) {
    console.error('Error translating text:', error);
    throw error;
  }
};