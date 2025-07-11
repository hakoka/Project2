const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const { expect } = chai;

describe('App Routes', () => {
  it('GET / should return welcome message', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal('Welcome to Codefresh Training!');
        done();
      });
  });

  it('GET /health should return status UP', (done) => {
    chai.request(app)
      .get('/health')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equal('UP');
        done();
      });
  });
});
