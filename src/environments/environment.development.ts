export const environment = {
    production: false,
    baseUrl : 'http://localhost:8000/api',
    get endpoint() { return `${this.baseUrl}`;}
};
