import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    useEffect(() => {
        api.get('transactions')
            .then(response => {
                console.log(response.data);
            });
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Salary</td>
                        <td className="deposit">$1000.00</td>
                        <td>Salary</td>
                        <td>20/06/2020</td>
                    </tr>
                    <tr>
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
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}