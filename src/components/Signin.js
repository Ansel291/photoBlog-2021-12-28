import React from 'react'
import { 
    FormContainer,
    FormWrap,
    FormIconWrapper,
    Icon,
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
                        <Icon to='/'>travel blog</Icon>
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
