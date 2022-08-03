import ReactModal from "react-modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useTransactions } from "../../hook/useTransactions";

import { Container, RadioBox, TransactionTypeContainer } from "./styles";

import CloseImg from "../../assets/close.svg";
import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const newTransactionSchema = zod.object({
    title: zod.string(),
    value: zod.number(),
    category: zod.string(),
});

export function NewTransactionModal({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) {

    const { createTransaction } = useTransactions();

    const [transactionType, setTransactionType] = useState<"deposit" | "withdrawal">(
        "deposit"
    );

    const {
        handleSubmit,
        register,
        reset
    } = useForm({
        resolver: zodResolver(newTransactionSchema),
    });

    async function handleCreateNewTransaction(data: any) {

        const newTransactionData = {
            ...data,
            type: transactionType,
            createdAt: new Date()
        }

        await createTransaction(newTransactionData);
        onRequestClose();
        reset();
        setTransactionType("deposit");
    }

    function onError(error: any) {
        console.log('onError', error);
    }

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={CloseImg} alt="Close" />
            </button>
            <Container
                onSubmit={handleSubmit(handleCreateNewTransaction, onError)}
                noValidate
            >

                <h2>New Transaction</h2>

                <input
                    placeholder="Title"
                    {...register("title")}
                />

                <input
                    type="number"
                    placeholder="Value"
                    {...register("value", {
                        setValueAs: (v) => v ? Number(v) : undefined
                    })}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setTransactionType("deposit")}
                        isActive={transactionType === "deposit"}
                        activeColor={transactionType}
                    >
                        <img src={IncomeImg} alt="Income" />
                        <span>Income</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setTransactionType("withdrawal")}
                        isActive={transactionType === "withdrawal"}
                        activeColor={transactionType}
                    >
                        <img src={OutcomeImg} alt="Outcome" />
                        <span>Outcome</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Category"
                    {...register("category")}
                />

                <button
                    type="submit"
                >
                    Save
                </button>
            </Container>
        </ReactModal>
    );
}