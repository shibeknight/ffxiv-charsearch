import axios from 'axios';

export default {
  searchChars: async (query, page) => {
    const chars = await axios.get(`https://xivapi.com/character/search?name=${query}&page=${page}`);
    return chars;
  },
  charInfo: async query => {
    const char = await axios.get(`https://xivapi.com/character/${query}?extended=1&data=CJ`);
    return char;
  },
  fcInfo: async query => {
    const fc = await axios.get(`https://xivapi.com/freecompany/${query}?data=FCM`);
    return fc;
  },
};
