import request from 'supertest';
import app from '../app';

describe('GET /', () => {
    it('should return 200 isValid true', async () => {
        const res = await request(app).get('/valida').query({cnpj: 10490181000569})
        expect(res.status).toBe(200);
        expect(res.text).toStrictEqual("{\"isValid\":true}");
    });
    it('should return 200 isValid false', async () => {
        const res = await request(app).get('/valida').query({cnpj: 123456})
        expect(res.status).toBe(200);
        expect(res.text).toStrictEqual("{\"isValid\":false}");
    });
});