import React, { Component } from 'react';
import axios from 'axios';
import styled from "styled-components";
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import Link from '@material-ui/core/Link';


const Item = props => (
    <tr>
        <Link href='/item'><td align='center'>{props.item.ItemName}</td></Link>
        <td align='center'>{props.item.ItemManufacturer}</td>
        <td align='center'>{props.item.ItemModel}</td>
        <td align='center'>{props.item.ProductionYear}</td>

    </tr>
)

export default class Collection extends Component {
    constructor(props) {
        super(props);

        this.state = {items: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/items/')
            .then(response => {
                this.setState({ items: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    itemList() {
        return this.state.items.map(currentitem => {
            return <Item item={currentitem}  key={currentitem._id}/>;
        })
    }

    render() {
        const PaperDiv = styled.div`
            background: linear-gradient(rgba(255,255,255, 1), rgba(255,255,255,.8));
            border-radius: 15px;
            margin: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
        `;
        return (
            <Container maxWidth='md'>
                <PaperDiv>
                    <Typography variant="h3" style={{
                        fontFamily: 'Montserrat',
                        marginTop: '20px'
                    }} noWrap >
                        My Collection
                    </Typography>
                    <PaperDiv  style={{border:'3px solid black', padding: '30px'}}>
                        <table className="table">
                            <thead className="thead-light">
                            <tr>
                                <th>Name</th>
                                <th>Manufacturer</th>
                                <th>Model</th>
                                <th>Production Year</th>
                            </tr>
                            </thead>
                            <tbody>
                                    { this.itemList() }
                            </tbody>
                        </table>
                    </PaperDiv>
                </PaperDiv>
            </Container>
        )
    }
}