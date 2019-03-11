import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResults() {
    const key = '6bb4b89ce1d6442b2ccd9d4ae3e678c5';
  try {
    const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`)
    this.result = res.data.recipes;
    console.log(this.result);
  } catch (error) {
    alert(error)
  }
  }
}
