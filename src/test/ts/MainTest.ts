// testing framework imports
import "mocha";
import * as TypeMoq from "typemoq";
import {expect} from "chai";

// classes under testing
import Main from '../../main/ts/Main';
import MyInterface from '../../main/ts/interfaces/MyInterface';


describe("Testing Main", function () {

    it("should work", async function () {
        const results = await Main.run([]);
        await expect(results).to.deep.equal({exitCode: 0, results: "OK", error: false});
    });

    it("should mock", async function () {
        const mock: TypeMoq.IMock<MyInterface> = TypeMoq.Mock.ofType<MyInterface>();
        let It = TypeMoq.It;
        mock.setup(x => x.test(It.isAny())).returns(()=>"ABC");
        const obj = mock.object;

        const result = obj.test("abc");

        expect(result).equal("ABC");
    });

});
