import React from "react";
import {LoginTopWrapper, MiddleContainer, UsernamePasswordWrapper} from "../../styles/containers";
import {LoginTitle} from "../../styles/buttons";
import {ThankYouRegistration} from "../../styles/paragraphs";


export const NotFound = () => {
        return (
            <>
                <MiddleContainer>
                    <LoginTopWrapper>
                        <LoginTitle>404 NOT FOUND</LoginTitle>
                    </LoginTopWrapper>
                    <UsernamePasswordWrapper>
                        <ThankYouRegistration>
                            Unfortunately the page you were looking for could not be found. <br/><br/> Please got back or try another page!
                        </ThankYouRegistration>
                    </UsernamePasswordWrapper>
                </MiddleContainer>
            </>
        );

}