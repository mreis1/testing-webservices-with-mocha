var should = require('should'),
    request = require('request'),
    expect = require('chai').expect,
    util = require('util');

describe('WebService testing', function () {
    it('needs user agent header', function(done){
        request({
            url: 'https://api.github.com/users/mreis1'
        }, function(error, response, body){
            // expect(error).to.not.be.undefined;
            expect(response.statusCode).to.not.equal(200);
            // expect(response.statusCode).to.equal(403);
            done();
        })
    });


    it('returns user', function(done){
        request({
            url: 'https://api.github.com/users/mreis1',
            headers: {
                'User-Agent': 'request'
            }
        }, function(error, response, body){
            if (error){
                console.log(error);
            }

            var bodyObj = JSON.parse(body);

            expect(bodyObj.login).to.equal('mreis1');
            expect(bodyObj.avatar_url).to.be.a('string');
            expect(response.statusCode).to.equal(200);
            done();
        })
    })
});