const supertest = require("supertest");
const should = require("should");
const server = supertest.agent("http://localhost:5000");

describe("sample", function () {
  it("should return home page", function (done) {
    server
      .get("/")
      .expect("Content-type", /json/)
      .expect(200) // THis is HTTP response
      .end(function (err, res) {
        // HTTP status should be 200
        res.status.should.equal(200);
        // Error key should be false.
        res.body.error.should.equal(false);
        done();
      });
  });
});
