import axios from 'axios';

export default {
  searchChars: async query => {
    const chars = await axios.get(`https://xivapi.com/character/search?name=${query}`);
    return chars;
  },
};
