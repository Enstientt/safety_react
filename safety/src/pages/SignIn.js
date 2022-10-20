import React from 'react'
import { GlobalStyle, Container, H1t, H2t, Span, ButtonN,  InputUser, ContainerC,  InputSection, BottomSec } from '../component/Sign/signEL'
import { Link } from 'react-router-dom'
const SignIn = () => {
    return (
        <GlobalStyle  >
            <Container >
                <ContainerC >
                    <H2t>E-change sign in form</H2t>
                    <H1t>Hello again we re happy to have you back</H1t>
                    <Span>Use your email and password here!</Span>
                    <InputSection>
                        <InputUser type="email" placeholder="safety@gmail.com" required />
                        <InputUser type="password" placeholder="Your Password here" />
                    </InputSection>
                    <BottomSec>
                        <Link to='/sign-In' >Forgot the password</Link>
                        <ButtonN >LOG IN</ButtonN>
                        <Link to='/sign-Up' >Sign up here</Link>
                    </BottomSec>
                </ContainerC>
            </Container>
        </GlobalStyle>

    )
}

export default SignIn;