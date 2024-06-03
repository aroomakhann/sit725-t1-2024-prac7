const request = require("request");

require('../server.js');

const baseUrl = 'http://localhost:8000';

describe('API Tests', function () {
    describe('GET /api/paris', function () {
        it('should return status code 200 and an array of cards', function (done) {
            import('chai').then(chai => {
                const expect = chai.expect;
                request.get(`${baseUrl}/api/paris`, function (error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    expect(JSON.parse(body).data).to.be.an('array');
                    done();
                });
            }).catch(err => {
                console.error('Error importing Chai:', err);
                done(err);
            });
        });
    });
});

describe('API Tests', function () {
    describe('POST /api/addParis', function () {
        it('should return status code 200 and success message', function (done) {
            import('chai').then(chai => {
                const expect = chai.expect;
                const newCard = {
                    name: 'Eiffel Tower',
                    desc: 'Iconic landmark of Paris',
                    img: 'https://example.com/eiffel-tower.jpg'
                   
                };
                request.post({
                    url: `${baseUrl}/api/addParis`,
                    json: newCard
                }, function (error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    expect(body.message).to.equal('Paris added successfully');
                    done();
                });
            }).catch(err => {
                console.error('Error importing Chai:', err);
                done(err);
            });
        });
    });
})