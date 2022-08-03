import { Container } from "./styles";

import { useTransactions } from "../../hook/useTransactions";

import TotalImg from "../../assets/total.svg";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import { Transaction } from "../../services/mirage";
import { formatValue } from "../../utils/formatValue";

export function Summary() {
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction: Transaction) => {
        if (transaction.type === "deposit") {
            acc.deposits += transaction.value;
            acc.total += transaction.value;
        } else {
            acc.withdrawals += transaction.value;
            acc.total -= transaction.value;
        }

        return acc;
    }, {
        deposits: 0,
        withdrawals: 0,
        total: 0,
    });

    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={IncomeImg} alt="Income" />
                </header>
                <strong>
                    + {formatValue(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Outcome</p>
                    <img src={OutcomeImg} alt="Income" />
                </header>
                <strong>
                    - {formatValue(summary.withdrawals)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Income" />
                </header>
                <strong>
                    {formatValue(summary.total)}
                </strong>
            </div>
        </Container>
    )
}