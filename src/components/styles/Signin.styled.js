import styled from 'styled-components'
import { Link } from 'react-router-dom'
    
export const FormContainer = styled.div`
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #009fa7;
    justify-content: center;
    align-items: center;
`

export const FormWrap = styled.div` 
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;

    @media(min-width: 401px) {
        height: 100%;
    }
`

export const FormIconWrapper = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 81px;
    padding: 0 24px;

    @media(min-width: ${({ theme }) => theme.tablet}) {
        height: 79px;
    } 
`

export const Icon = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    text-transform: capitalize;
    letter-spacing: 0.1px;

    @media(min-width: ${({ theme }) => theme.tablet}) {
        font-size: 1.25rem;
    } 
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;

    @media(min-width: ${({ theme }) => theme.mobile}) {
        padding: 0;
    } 
`

export const Form = styled.form`
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0, 0.9);

    @media(min-width: 401px) {
        padding: 80px 32px;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size 20px;
    font-weight: 400;
    text-align: center;
    text-transform: capitalize;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`

export const FormInput = styled.input`
    padding: 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`

export const FormButton = styled.button`
    background: #01b6bf;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;
    text-transform: capitalize;
`