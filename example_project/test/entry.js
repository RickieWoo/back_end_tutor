'use strict';

let chai = require('chai');
let expect = require('chai').expect;
const debug = require('debug')('TEST');

chai.use(require('chai-http'));
chai.use(require('chai-json-schema'));

let getUserSchema = {
    title: 'Entry Response JSON Schema v1',
    type: 'object',
    required: ['phone'],
    properties: {
        phone: {type: 'string'},
    }
};

describe('test create API', function () {

    // this.timeout(15000);

    it('should return a value', done => {

        let body = {user_name: 'test_user', phone: '123456789'};

        chai.request('http://localhost:3000')
            .post(`/entry_form/new`)
            .send(body)
            .end((err, res) => {
                console.log('res: ', res.body);
                debug(JSON.stringify(res.body, null, 2));
                expect(res.body).to.be.jsonSchema(getUserSchema);
                done();
            })
    });
    it('createUser', done => {

        let body = {user_name: 'test_user', phone: '123456789'};

        chai.request('http://localhost:3000')
            .get(`/entry_form/userlist`)
            .end((err, res) => {
                console.log('res: ', res.body);
                debug(JSON.stringify(res.body, null, 2));
                // expect(res.body).to.be.jsonSchema(getUserSchema);
                done();
            })
    });
})