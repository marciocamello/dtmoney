import {
    ActiveModelSerializer,
    createServer,
    Model,
    Response
} from 'miragejs';

export type Transaction = {
    id: number
    title: string
    amount: number
    category: string
    type: 'withdrawal' | 'deposit'
    date: Date
}

export function makeServer() {
    const server = createServer({
        serializers: {
            application: ActiveModelSerializer,
        },

        models: {
            transaction: Model.extend<Partial<Transaction>>({})
        },

        routes() {
            this.namespace = 'api';
            this.timing = 750;

            this.get('/transactions', function (schema, request) {

                const transactions = schema.all('transaction');

                return new Response(
                    200,
                    {},
                    { transactions }
                )
            });

            this.get('/transactions/:id');
            this.post('/transactions');

            this.namespace = '';
            this.passthrough();
        }
    });

    return server;
}