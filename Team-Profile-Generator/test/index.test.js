const Intern = require('../index')
const Engineer = require('../index')
const Manager = require('../index')

describe("Intern", () => {
    it("Create Intern", () => {
        const test = new Intern();
        expect(typeof(test)).toBe("object");
    });
})

describe("Engineer", () => {
    it("Create Engineer", () => {
        const test = new Engineer();
        expect(typeof(test)).toBe("object");
    });
})

describe("IManager", () => {
    it("Create Manager", () => {
        const test = new Manager();
        expect(typeof(test)).toBe("object");
    });
})