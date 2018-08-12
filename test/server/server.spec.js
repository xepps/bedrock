const request = require('supertest-as-promised');
const nock = require('nock');

const app = require('../../server/app');

describe('The Server', () => {
    beforeEach(() => {
        nock.disableNetConnect();
        nock.enableNetConnect('127.0.0.1');
    });

    test('responds to /api/term with the api endpoint', () => {
        nock('https://cors.io')
            .get('/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=manchester')
            .reply(200, JSON.stringify({ response: 'from-rentalcars' }));

        return request(app)
            .get('/api/manchester')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(res => {
                expect(res.type).toEqual('application/json');
                expect(res.body).toEqual({ response: 'from-rentalcars' });
            });
    });

    test('responds to / with the index.html', () =>
        request(app)
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200)
            .then(res => expect(res.text).toContain('<div id="root"></div>')));

    test('responds to favicon.icon request', () =>
        request(app)
            .get('/favicon.ico')
            .expect('Content-Type', 'image/x-icon')
            .expect(200));

    test('responds to any route with the index.html', () =>
        request(app)
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200)
            .then(res => expect(res.text).toContain('<div id="root"></div>')));
});
