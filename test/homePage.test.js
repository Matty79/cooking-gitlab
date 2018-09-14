const app = require('../app.js');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-http'));
chai.use(require('chai-expected-cookie'));
const request = require('supertest');

const userDetails = {
    username: 'Amelie',
		password: 'pass123',
		firstname: 'Clair',
		lastname: 'Buggs'
}

describe('GET /', function() {
    it('respond with status code 200', function(done) {
      request(app)
        .get('/')
        .expect(function(res) {
          expect(res.text).to.contain('Cookbook');
        })
        .expect(200, done);
    });
  }); 

  describe('POST /register', function() {
    it('returns cookie', function(done) {
      request(app)
        .post('/register')
        .send(userDetails)
        // .send('username=alice1')
        // .send('password=passw')
        // .send('firstname=Alice')
        // .send('lastname=Briggs')
        .set('Accept', 'application/json')
        .expect(function(res) {
          expect(res).to.containCookie({
            name: 'cookinguser'
          })
        })
        .expect(200, done);
    });
  });

  describe('POST /login', function(){
    it('returns a cookie', function(done){
      request(app)
      .post('/login')
      .set('Accept', 'application/json')
      .expect(function(res) {
        expect(res).to.containCookie({
          name: 'cookinguser'
        })
      })
      .expect(200, done);
    })
  });
