import {
    ActiveModelSerializer,
    createServer,
    Model,
    Response
} from 'miragejs';

export type Transaction = {
    id: number
    title: string
    value: number
    category: string
    type: 'withdrawal' | 'deposit'
    createdAt: Date
}

export function makeServer() {
    const server = createServer({
        serializers: {
            application: ActiveModelSerializer,
        },

        models: {
            transaction: Model.extend<Partial<Transaction>>({})
        },

        seeds: (server) => {

            server.db.loadData({
                transactions: [
                    {
                        id: 1,
                        title: 'Salary',
                        value: 1000,
                        category: 'Dev',
                        type: 'deposit',
                        createdAt: new Date('2020-01-01 00:00:00')
                    },
                    {
                        id: 2,
                        title: 'Rent',
                        value: 1000,
                        category: 'salary',
                        type: 'withdrawal',
                        createdAt: new Date('2020-02-01 00:00:00')
                    }
                ]
            });
        },

        routes() {
            this.namespace = 'api';
            this.timing = 750;

            this.get('/transactions', (schema) => {

                const transactions = schema.all('transaction');

                return new Response(
                    200,
                    {},
                    { transactions }
                )
            });

            this.get('/transactions/:id');

            this.post('/transactions', (schema, request) => {
                const transaction = JSON.parse(request.requestBody);
                const newTransaction = schema.create('transaction', transaction);

                return new Response(
                    201,
                    {},
                    { transaction: newTransaction }
                )
            });

            this.namespace = '';
            this.passthrough();
        }
    });

    return server;
}