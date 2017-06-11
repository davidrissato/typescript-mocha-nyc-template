"use strict";

import "mocha";

// testing framework imports
import * as sinon from "sinon";
import {expect} from "chai";
import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);

// classes under testing
import Main from '../../main/ts/Main';


// sinon sandbox
let __sandbox;

beforeEach(function () {
    __sandbox = sinon.sandbox.create();
});

afterEach(function () {
    __sandbox.restore();
});



describe("Testing Main", function () {

    it("should work", async function () {
       await expect(Main.run([])).to.eventually.deep.equal({exitCode: 0, results: "OK", error: false});
    });


});
