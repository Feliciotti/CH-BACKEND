import chai from 'chai';
import supertest from 'supertest';
import { PORT } from '../server.js'

const expect = chai.expect


describe('Products Route Test', () => {

    const baseurl = `localhost:${PORT}`;
    let idNumber = 8

    // describe('testing getAll() route: ', () => {
    //     it('Should show all items available ', () => {
    //         supertest(baseurl)
    //             .get('/productos')
    //             .end(function(err, res) {
    //                 expect(res.status).to.be.equal(200)
    //                 if (err) {
    //                     throw err
    //                 }
    //             })
    //     });
    // });

    describe('testing save() route: ', () => {
        it('Should successfully create a new item', (done) => {
            supertest(baseurl)
                .post('/productos')
                .send({
                    "title": "Mocha Chai Cup",
                    "price": 10,
                    "thumbnail": "www.somecup.mocha.com",
                    "desc": "Mocha Chai Cup",
                    "stock": 10
                  })
                .end(function(err, res) {
                    expect(res.status).to.be.equal(201)
                    if (err) {
                        throw err
                    }
                })
                done()
        });
    });
        
    // describe('testing getById() route: ', () => {
    //     it('Should get items acording given ID', (done) => {
    //         supertest(baseurl)
    //             .get('/productos/' + idNumber)

    //             .end((err, res) => {
    //                 expect(res.status).to.be.equal(200)
    //                 expect(res.body.id).to.be.equal(idNumber)
    //                 if (err) {
    //                     throw err
    //                 }
    //                 done();
    //             });
    //     });
    // });

    // describe('testing delete() route: ', () => {

    //     it(`Should delete an item acording given ID`, (done) => {
    //         supertest(baseurl)
    //             .delete('/productos/' + idNumber)
    //             .end((err, res) => {
    //                 expect(res.status).to.be.equal(200)
    //                 if (err) {
    //                     throw err
    //                 }
    //                 done();
    //             });

    //     });

    // });
});