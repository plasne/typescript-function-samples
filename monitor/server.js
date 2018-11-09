"use strict";
// FUNCTION: paging()
// AUTHOR:   Peter Lasne, Principal Software Development Engineer
// PURPOSE:  This function shows an example of a paged result set for ADF.
Object.defineProperty(exports, "__esModule", { value: true });
// includes
const azure_functions_ts_essentials_1 = require("azure-functions-ts-essentials");
// module
async function run(context) {
    try {
        // validate
        if (!context.req || !context.res) {
            throw new Error('Request/Response must be defined in bindings.');
        }
        // check database
        // check other services
        // context.res.status = HttpStatusCode.InternalServerError;
        // respond
        context.res.status = azure_functions_ts_essentials_1.HttpStatusCode.OK;
    }
    catch (error) {
        if (context.res) {
            context.res.status = azure_functions_ts_essentials_1.HttpStatusCode.InternalServerError;
        }
        if (context.log)
            context.log.error(error.stack);
    }
}
exports.run = run;
