export default class GetService {
    _apiBase = 'http://localhost:3000';


    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url} ${res.status}`);
        }
        return await res.json();
    }
}