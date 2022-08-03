import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export type Transaction = {
    id: number
    title: string
    value: number
    category: string
    type: 'withdrawal' | 'deposit'
    createdAt: Date
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsContextProps {
    transactions: Transaction[];
    createTransaction: (transaction: Transaction) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextProps>({} as TransactionsContextProps);

interface TransactionsProviderProps {
    children: React.ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([] as Transaction[]);

    useEffect(() => {
        api.get('transactions')
            .then(response => {
                setTransactions(response.data.transactions.models);
            });
    }, []);

    async function createTransaction(transaction: TransactionInput) {

        try {
            const response = await api.post("/transactions", transaction);
            setTransactions(state => [...state, response.data.transaction]);

        } catch (error) {
            console.log('createTransaction::error', error);
        }
    }

    return (
        <TransactionsContext.Provider
            value={{
                transactions,
                createTransaction,
            }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}