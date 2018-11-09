// FUNCTION: paging()
// AUTHOR:   Peter Lasne, Principal Software Development Engineer
// PURPOSE:  This function shows an example of a paged result set for ADF.

// includes
import { Context, HttpStatusCode } from 'azure-functions-ts-essentials';

// module
export async function run(context: Context) {
    try {
        // validate
        if (!context.req || !context.res) {
            throw new Error('Request/Response must be defined in bindings.');
        }

        // check database
        // check other services
        // context.res.status = HttpStatusCode.InternalServerError;

        // respond
        context.res.status = HttpStatusCode.OK;
    } catch (error) {
        if (context.res) {
            context.res.status = HttpStatusCode.InternalServerError;
        }
        if (context.log) context.log.error(error.stack);
    }
}
