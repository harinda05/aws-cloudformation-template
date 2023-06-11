import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { handler } from '../../hello-world';
import { expect, describe, it } from '@jest/globals';

import * as helloWorldEvent from '../../../events/hello-world-event.json';

describe('Unit tests for lambda functions', function () {
    it('helloWorldFunction verifies successful response', async () => {
        const event: APIGatewayProxyEvent = helloWorldEvent;
        const result: APIGatewayProxyResult = await handler(event);

        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual(
            JSON.stringify({
                message: 'hello Harinda',
            }),
        );
    });
});
