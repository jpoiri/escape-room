import { createServer, Response } from 'miragejs';

const CORRECT_ANSWER = '9243';

export function makeServer({ environment = 'development'} = {}) {
    let server = createServer({
        environment,
        routes() {
            this.namespace = 'api';
            this.post('/answers', (schema, request) => {
                const answer = JSON.parse(request.requestBody).answer;
                if (answer === CORRECT_ANSWER) {
                    return new Response(200);
                }
                return new Response(400);
            })  
        }
    });
    return server;
}