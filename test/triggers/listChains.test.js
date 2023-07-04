/* globals describe, expect, test, it */

const zapier = require("zapier-platform-core");

const App = require("../../index");
const appTester = zapier.createAppTester(App);
zapier.tools.env.inject();

describe("triggers.list_chains_trigger", () => {
  it("should run", async () => {
    const bundle = { inputData: {} };

    const results = await appTester(
      App.triggers.list_chains_trigger.operation.perform,
      bundle
    );
    expect(results).toBeDefined();
    // TODO: add more assertions
  });
});
