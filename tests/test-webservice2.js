var should = require('should'),
    request = require('request'),
    expect = require('chai').expect,
    util = require('util');

describe('WebService #2 testing', function () {
    it('returns a user', function(done){
        request({
            url: 'https://api.github.com/users/mreis1',
            headers: {
                'User-Agent': 'request'
            }
        }, function(error, response, body){
            var bodyObj = JSON.parse(body);
            expect(response.statusCode).to.equal(200);
            expect(bodyObj.login).to.equal('mreis1');
            done()
        })
    })
})