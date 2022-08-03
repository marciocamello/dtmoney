import { useTransactions } from "../../hook/useTransactions";
import { formatDate } from "../../utils/formatDate";
import { formatValue } from "../../utils/formatValue";
import { Container } from "./styles";

export function TransactionsTable() {

    const { transactions } = useTransactions();

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Created At</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions && transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {
                                    transaction.type === 'deposit' ?
                                        `+ ${formatValue(transaction.value)}` :
                                        `- ${formatValue(transaction.value)}`
                                }
                            </td>
                            <td>{transaction.category}</td>
                            <td>{formatDate(transaction.createdAt)}</td>
                        </tr>
                    ))}

                    {/* <tr>
                        <td>Bicycle</td>
                        <td>$100.00</td>
                        <td>Transport</td>
                        <td>20/06/2020</td>
                    </tr>
                    <tr>
                        <td>Lunch</td>
                        <td className="withdrawal">- $100.00</td>
                        <td>Food</td>
                        <td>20/06/2020</td>
                    </tr> */}
                </tbody>
            </table>
        </Container>
    )
}