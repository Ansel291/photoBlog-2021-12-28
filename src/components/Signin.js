import React from 'react'
import { SiYourtraveldottv } from 'react-icons/si'
import { 
    FormContainer,
    FormWrap,
    FormIconWrapper,
    FormLink,
    FormLogoIconContainer,
    FormLogoText, 
    FormContent, 
    Form,
    FormH1, 
    FormLabel,
    FormInput, 
    FormButton,
    Text 
} from './styles/Signin.styled'

const Signin = () => {
    return (
        <>
            <FormContainer>
                <FormWrap>
                    <FormIconWrapper>
                        <FormLink to='/'>
                            <FormLogoIconContainer>
                                <SiYourtraveldottv/>
                            </FormLogoIconContainer>
                            <FormLogoText>Travel Blog</FormLogoText>
                        </FormLink>
                    </FormIconWrapper>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </FormContainer>
        </>
    )
}

export default Signin
