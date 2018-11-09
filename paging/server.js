"use strict";
// FUNCTION: paging()
// AUTHOR:   Peter Lasne, Principal Software Development Engineer
// PURPOSE:  This function shows an example of a paged result set for ADF.
Object.defineProperty(exports, "__esModule", { value: true });
// includes
const azure_functions_ts_essentials_1 = require("azure-functions-ts-essentials");
const loremIpsum = require("lorem-ipsum");
// function to get a number from a querystring
function getNumberFromQuerystring(context, name, defaultValue = 0) {
    if (!context.req)
        return defaultValue;
    if (!context.req.query)
        return defaultValue;
    if (!context.req.query[name])
        return defaultValue;
    const num = parseInt(context.req.query[name], 10);
    if (isNaN(num))
        return defaultValue;
    return num;
}
// module
async function run(context) {
    try {
        // validate
        if (!context.req || !context.res) {
            throw new Error('Request/Response must be defined in bindings.');
        }
        // look for an index or start at 0
        const index = getNumberFromQuerystring(context, 'index', 0);
        // respond with 10 results (a full page) or a partial and done
        if (index < 2) {
            const rows = [];
            for (let i = 0; i < 10; i++) {
                rows.push(loremIpsum({
                    count: 1,
                    format: 'plain',
                    units: 'sentences'
                }));
            }
            context.res.body = {
                next: index + 1,
                rows
            };
        }
        else {
            const rows = [];
            for (let i = 0; i < 3; i++) {
                rows.push(loremIpsum({
                    count: 1,
                    format: 'plain',
                    units: 'sentences'
                }));
            }
            context.res.body = {
                next: null,
                rows
            };
        }
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
