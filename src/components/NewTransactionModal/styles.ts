import styled from 'styled-components';
import { darken, transparentize } from 'polished';
import { ButtonHTMLAttributes, FormHTMLAttributes } from 'react';
import { defaultTheme } from '../../styles/themes/default';

type FormProps = FormHTMLAttributes<HTMLFormElement>;

export const Container = styled.form<FormProps>`
    h2{
        color: ${(props) => props.theme['text-title']};
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        
        border: 1px solid ${(props) => props.theme['input-border']};
        background: ${(props) => props.theme['input-background']};

        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: ${(props) => props.theme['text-body']};
        }

        & + input{
            margin-top: 1rem;
        }
    }

    button[type='submit']{
        width: 100%;
        padding:0 1.5rem;
        height: 4rem;
        background: ${(props) => props.theme['green']};
        color: ${(props) => props.theme['white']};
        border: 0;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.5rem;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

type RadioBoxProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isActive?: boolean;
    activeColor: 'deposit' | 'withdrawal';
}

const radioBoxColors = {
    deposit: defaultTheme.green,
    withdrawal: defaultTheme.red
}

export const RadioBox = styled.button<RadioBoxProps>`
    height: 4rem;
    border: 1px solid ${(props) => props.theme['input-border']};
    border-radius: 0.25rem;

    background: ${(props) => props.isActive
        ? transparentize(0.9, radioBoxColors[props.activeColor])
        : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;

    transition: border-color 0.2s;

    &:hover{
        border-color: ${(props) => darken(0.1, props.theme['input-border'])};
    }

    img{
        width: 20px;
        height: 20px;
    }

    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: ${(props) => props.theme['text-title']};
    }
`;