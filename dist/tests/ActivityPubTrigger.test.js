"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const globals_1 = require("@jest/globals");
const ActivityPubTrigger_1 = tslib_1.__importDefault(require("../src/ActivityPubTrigger"));
const actionsflow_core_1 = require("actionsflow-core");
const path_1 = require("path");
globals_1.describe('ActivityPubTrigger', () => {
    globals_1.test("test trigger run", () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        const parameters = yield actionsflow_core_1.getTriggerConstructorParams({
            name: "activitypub",
            workflowPath: path_1.resolve(__dirname, "fixtures/workflows/workflow.yml"),
        });
        const trigger = new ActivityPubTrigger_1.default(parameters);
        const result = yield trigger.run();
        globals_1.expect(result.length).toBe(1);
    }));
});
//# sourceMappingURL=ActivityPubTrigger.test.js.map