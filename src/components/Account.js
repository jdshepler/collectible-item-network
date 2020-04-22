import React, { Component } from 'react';
import styled from "styled-components";
import Container from '@material-ui/core/Container';

export class Account extends Component {

    render() {
        const PaperDiv = styled.div`
            background: linear-gradient(rgba(255,255,255, 1), rgba(255,255,255,.8));
            border-radius: 15px;
            margin: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 50px;
        `;
        return (
            <Container maxWidth="sm">
                <PaperDiv >
                    <img
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        width="150"
                        height="150"
                        style={{borderRadius: 75}}
                    >
                    </img>


                    <h1>Hello, User!</h1>

                    <b>Joined: March 2020</b>


                </PaperDiv>
            </Container>
        );
    }
}
