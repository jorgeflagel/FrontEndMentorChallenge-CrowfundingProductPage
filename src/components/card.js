import React from 'react';
import styled, { css } from 'styled-components';
import Button from './shared/button';
import devices from '../shared/breakpoints';

const CardContainer = styled.div`
    position: relative;
    width: min(279px, 100%);
    border: 2px solid rgba(122,122,122, 0.2);
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 8px;
    padding: 24px;
    @media ${devices.pc} {                       
        width: 100%;
        padding: 32px;
        padding-top: 38px
    }
    ${(props) => {
        if(props.modal) {
            return(
                css`
                    padding-left: 0;
                    padding-right: 0;
                    @media ${devices.pc}{
                        padding-left: 0;
                        padding-right: 0;
                        width: min(100%, 634px);
                    }`
            )
        }
    }}
    ${(props) => {
        if(props.selected) {
            return(
                css`
                    border-color: rgba(60,179,171,1);
                `
            );
        }
    }}
    ${(props) => {
        if(props.disabled) {
            return(
                css`
                    opacity: 50%;
                `
            );
        }
    }}
`;

const CardHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    ${(props) => {
            if(props.modal) {
                return(css`
                    padding-left: 64px;
                    padding-right: 64px;
                `);
            }
        }}
    @media ${devices.pc} {
        flex-direction: row;
        justify-content: space-between;
        ${(props) => {
            if(props.modal) {
                return(css`
                    padding-left: 76px;
                    padding-right: 28px;
                `);
            }
        }}
    }
`;

const CardTitle = styled.h3`
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    ${(props) => {
        if(props.modal && !props.disabled) {
            return(
                css`
                    &:hover{
                        color: rgba(60,179,171,1);
                        cursor: pointer;
                    }
                `
            )
        }
    }}
`;

const CardSubtitle = styled.h4`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: rgba(60,179,171,1);
`;

const Text = styled.p`
    font-size: 14px;
    line-height: 24px;
    color: rgba(122,122,122,1);
    ${(props) => {
        if(props.modal) {
            return(css`
                padding-left: 24px;
                padding-right: 24px;
                @media ${devices.pc} {
                    padding-left: 76px;
                    padding-right: 28px;
                }
            `);
        }
    }
    }
`;

const TextMobile = styled(Text)`
    @media ${devices.pc} {
        display: none;
    }
`;

const TextDesktop = styled(Text)`
    display: none;
    @media ${devices.pc} {
        display: inline;
     }
`;

const RadioButton = styled.div`
    position: absolute;
    border-radius: 100%;
    left: 28px;
    display: inline-block;
    margin-right: 16px;
    & > input {
        opacity: 0%
    }
    & > input:hover {
        cursor: pointer;
    }
    & > input:focus {
        opacity: 100%;
    }
    & > input:checked, & > input:active  {
        opacity: 0%;
    }


    ${CardTitle}:hover && {
        border-color: rgba(60,179,171,1);
    }

    @media ${devices.pc} {
        margin-right: 0;
    }
    ${(props) => {
        if(props.selected) {
            return(
                css`
                    box-sizing: content-box;
                    width: 10px;
                    height: 10px;
                    border: 5px rgba(255,255,255) solid;
                    background: rgba(60,179,171,1);
                    box-shadow: 0 0 0 1px rgba(122,122,122, 0.2);
                    &:hover{
                        border: 5px rgba(255,255,255) solid;
                        background: rgba(60,179,171,1);
                    }
                    ${CardTitle}:hover && {
                        border-color: #fff;
                    }
                `
            )
        } else {
            return(
                css`
                    width: 20px;
                    height: 20px;
                    border: 1px rgba(122,122,122, 0.2) solid;                    
                `)
        }
    }}
    ${(props) => {
        if(!props.disabled) {
            return(
                css`
                    &:hover {
                        border-color: rgba(60,179,171,1);
                        cursor: pointer;
                    }
                `
            )
        }
        else {
            return(
                css`
                    ${CardTitle}:hover && {
                        border-color: rgba(122,122,122, 0.2);
                    }
                `)
        }
    }}
    `;

const CardFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-top: 24px;
    padding-bottom: 0;
    & > div {
        position: relative;
        gap: 16px;
        display: flex;
        flex-direction: row;
        width:100%;
        justify-content: space-between;
    }
    @media ${devices.pc} {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 24px 0px;
        padding-bottom: 0;
        & > div {
            width: 60%;
            display: flex;
            gap: 16px;
            justify-content: flex-end;
        }
    }
    ${(props) => {
        if(props.modal) {
            return (css`
                border-top: solid 1px;
                border-color: rgba(0,0,0,0.15);
                align-items: center;
                padding: 24px 28px;
                padding-bottom: 0;
                @media ${devices.pc} {
                    padding: 24px 28px;
                    padding-bottom: 0;
                }
            `);
        }
    }}
`;

const Bold = styled.span`
    color: rgba(0,0,0,1);
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
`;

const Input = styled.input`
    width: min(100px, 100%);
    height: 48px;
    border-radius: 33.5px;
    border: 1px solid rgba(122,122,122, 0.2);
    box-shadow: none;
    appearance: textfield;
    text-align: center;
    font-weight: 700;
    &:focus {
        border-color: rgba(60,179,171,1);
        outline: none;
    }
    &:invalid {
        border-color: red;
    }
`;

const DolarSign = styled.span`
    position: absolute;
    left: 12px;
    top: 15px;
    color: rgba(0,0,0, .2);
    font-size: 14px;
    line-height: 17px;
    font-weight: 700;
    @media ${devices.pc} {
        left: 104px;
    }
`;

function Card({id, title, subtitle, text, rewards, setRewards, modal, showModal, selectedEdition, selectEdition, min,
    pledge, setPledge, setTotal, total, backers, setBackers, setSuccess}) {

        var disabled = rewards[id] === 0;
        
        return(
            <CardContainer modal={modal} disabled={disabled} selected={selectedEdition === title} id={modal ? `card${id}` : null}>
                <CardHeader modal={modal}>
                    <CardTitle modal={modal} disabled={disabled} onClick={modal && !disabled ? ()=>selectEdition(title) : null} >
                        {modal 
                            ?   <RadioButton disabled={disabled} selected={title === selectedEdition} >
                                    <input type="radio" value={title} checked={selectedEdition === title} disabled={disabled}
                                        onChange={modal && !disabled ? (e)=>selectEdition(e.target.value) : null}/>
                                </RadioButton>
                            : null
                        }
                        {title}
                    </CardTitle>
                    <CardSubtitle>{subtitle}</CardSubtitle>
                    {id !== 0 && modal ? <TextDesktop modal={modal}><Bold>{rewards[id]}</Bold> left</TextDesktop> : null}
                </CardHeader>
                <Text modal={modal}>{text}</Text>
                {modal 
                    ?   <React.Fragment>
                            {id !== 0 ? <TextMobile modal={modal}><Bold>{rewards[id]}</Bold> left</TextMobile> : null}
                            {selectedEdition === title 
                                ?   <CardFooter modal>
                                        <Text>Enter your pledge</Text>
                                        <div>
                                            <DolarSign>$</DolarSign>
                                            <Input type="number" min={min} value={pledge} onChange={(e) => setPledge(Number(e.target.value))}/>
                                            <Button disabled={pledge < min | pledge === 0} onClick={
                                                pledge >= min 
                                                ? () => {
                                                    setTotal(total + pledge);
                                                    setBackers(backers + 1);
                                                    setRewards({...rewards, [id]:rewards[id] - 1});
                                                    setPledge(null);
                                                    setSuccess(true);
                                                    window.scroll({top: 100, left: 0, behavior: 'smooth'});
                                                }
                                                : null
                                                }>Continue</Button>
                                        </div>
                                    </CardFooter>
                                :    null 
                            }
                        </React.Fragment>
                    :   <CardFooter>
                            {id !== 0 ? <Text modal={modal}><Bold>{rewards[id]}</Bold> left out</Text> : null}
                            <Button size={"m"} disabled={disabled} onClick={()=> {
                                selectEdition(title); 
                                showModal(true);
                                setTimeout(() => {
                                    const el = document.getElementById(`card${id}`)
                                    const y = window.scrollY + el.getBoundingClientRect().y - 50;
                                    window.scroll({top:y, left:0, behavior: "smooth"});
                                    }, 50)
                                }
                            }>{disabled ? "Out of Stock" : "Select Reward"}</Button>
                        </CardFooter>
                }
            </CardContainer>
        );
}

export default Card;