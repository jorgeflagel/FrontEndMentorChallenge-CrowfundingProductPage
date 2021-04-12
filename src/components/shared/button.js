import styled, { css } from 'styled-components';

const Button = styled.button`
    border-radius: 33.5px;
    border: none;
    background-color: #3CB3AB;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    cursor: pointer;
    &:hover, &:focus {
        background-color: rgba(20,122,115,1);
        outline: none;
    }

    ${(props) => {
        switch(props.size) {
            case("m"):
                return css`width: min(100%, 157px); height: 48px;`;
            case("l"):
                return css`width: min(100%, 204px); 
                        height: 56px;
                        `;
            default:
                return css`width: min(100%, 107px); 
                        height: 48px;
                        `;

        }
    }}
    ${(props) => {
        if(props.disabled) {
            return(
                css`
                    background: rgba(0,0,0,50%);
                    &:hover{
                        background:rgba(0,0,0,50%);
                        cursor: default;
                    }
                    
                `
            );
        }
    }}
`;

export default Button;