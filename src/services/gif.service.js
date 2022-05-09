import api from './api';
class GifService {
  getTrendingGifs() {
    return api.get('/reactions/populated?tagName=trending&count=100');
  }
  getSearchedGifs(keywords) {
    return api.get(`/gfycats/search?search_text=${keywords}&count=100`);
  }
}
export default new GifService();