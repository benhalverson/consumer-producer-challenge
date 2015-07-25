
'use strict';
var consumer = require('../consumer');
var request = require('supertest');
var assert = require('assert');

describe('http requests', function(){
  it('should return 200 when adding two numbers', function(){
    request(consumer.app)
    .get('/2+2')
    .expect(200)
    .end(function(err, res){
      assert.equal(JSON.parse(res.res.text).sum, 4);
    });
  });
});
