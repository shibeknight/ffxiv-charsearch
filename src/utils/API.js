import axios from 'axios';

export default {
  searchChars: async (query, page) => {
    const chars = await axios.get(`https://xivapi.com/character/search?name=${query}&page=${page}`);
    return chars;
  },
};
