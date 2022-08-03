import Modal from "react-modal";
import { useState } from "react";

import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { TransactionsProvider } from "./context/TransactionsContext";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {

    const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);

    function handleNewTransactionOpen() {
        setIsNewTransactionOpen(true);
    }

    function handleNewTransactionClose() {
        setIsNewTransactionOpen(false);
    }

    return (
        <TransactionsProvider>
            <ThemeProvider theme={defaultTheme}>
                <Header
                    onOpenNewTransactionModal={handleNewTransactionOpen}
                />

                <Dashboard />

                <NewTransactionModal
                    isOpen={isNewTransactionOpen}
                    onRequestClose={handleNewTransactionClose}
                />

                <GlobalStyle />
            </ThemeProvider>
        </TransactionsProvider>
    )
}
