import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;

    table{
        width: 100%;
        border-spacing: 0 0.5rem;

        th{
            color: ${props => props.theme['text-body']};
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td{
            padding: 1rem 2rem;
            border: 0;
            background: ${props => props.theme['shape']};
            color: ${props => props.theme['text-body']};
            border-radius: 0.25rem;

            &:first-child{
                color: ${props => props.theme['text-title']};
            }

            &.deposit{
                color: ${props => props.theme['green']};
            }

            &.withdrawal{
                color: ${props => props.theme['red']};
            }
        }
    }
`;