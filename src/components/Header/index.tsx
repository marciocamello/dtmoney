import LogoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

export function Header() {
    return (
        <Container>
            <Content>
                <img src={LogoImg} alt="Dt Money" />
                <button type="button">
                    New Transaction
                </button>
            </Content>
        </Container>
    );
}