const request = require("request");
require('../server.js');

const baseUrl = 'http://localhost:3100';

describe('API Tests', function () {
    describe('GET /api/cat', function () {
        it('should return status code 200 and an array of cats', function (done) {
            import('chai').then(chai => {
                const expect = chai.expect;
                request.get(`${baseUrl}/api/cats`, function (error, response, body) {
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
    describe('POST /api/addCat', function () {
        it('should return status code 200 and success message', function (done) {
            import('chai').then(chai => {
                const expect = chai.expect;
                const newCat = {
                    name: 'Test Cat',
                    desc: 'Test Desc',
                   
                };
                request.post({
                    url: `${baseUrl}/api/addCat`,
                    json: newCat
                }, function (error, response, body) {
                    expect(response.statusCode).to.equal(200);
                    expect(body.message).to.equal('Cat added successfully');
                    done();
                });
            }).catch(err => {
                console.error('Error importing Chai:', err);
                done(err);
            });
        });
    });
})