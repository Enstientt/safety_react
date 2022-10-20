import React from 'react'
import { Link } from 'react-router-dom'
import { GlobalStyle, Container, H1t, H2t, Span, ButtonN,  InputUser, ContainerC,  InputSection, BottomSec } from '../component/Sign/signEL'

const SignUp = () => {
    return (
        <>
            <GlobalStyle  >
                <Container>
                    <ContainerC>
                        <H2t>E-change sign-up form</H2t>
                        <H1t>Hello Welcome to our Platform </H1t>
                        <Span>Sign up here !</Span>
                        <InputSection>
                            <InputUser type="text" placeholder="Your First Name" required />
                            <InputUser type="text" placeholder="Your Last Name " required />
                            <InputUser type="Date" placeholder="19/12/1998" required />
                            <InputUser type="email" placeholder="safety@gmail.com" required />
                            <InputUser type="password" placeholder="Your Password here" />
                            <InputUser type="password" placeholder="confirm your password" />

                        </InputSection>
                        <BottomSec>
                            <ButtonN>Sign Up</ButtonN>
                            <Link to='/Sign-In'>already have an account</Link>

                        </BottomSec>
                    </ContainerC>
                </Container>
            </GlobalStyle>
        </>
    )
}

export default SignUp