import { useState } from 'react';
import LogoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({
    onOpenNewTransactionModal,
}: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="Dt Money" />
                <button
                    type="button"
                    onClick={onOpenNewTransactionModal}
                >
                    New Transaction
                </button>
            </Content>
        </Container>
    );
}