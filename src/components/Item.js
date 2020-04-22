import React, { Component } from 'react';
import styled from "styled-components";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';


const Item = props => (
    <tr>
        <td>{props.item.ItemName}</td>
        <td>{props.item.ItemManufacturer}</td>
        <td>{props.item.ItemModel}</td>
        <td>{props.item.ProductionYear}</td>

    </tr>

)

export default class Home extends Component {
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
            padding: 50px;
        `;
        return (
            <Container maxWidth="md">
                <PaperDiv >
                    <Grid container spacing={3} justify="space-between" alignItems="center">
                        <Grid item xs={6} >
                            <h1>Princess Diana Bear</h1>
                            <p>Manufacturer: Ty Inc.</p>
                            <p>Model: Beanie Baby</p>
                            <p>Production Year: 1997</p>

                            </Grid>
                        <Grid item xs={6} >

                            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi.ebayimg.com%2Fimages%2Fi%2F200602670829-0-1%2Fs-l1000.jpg&f=1&nofb=1"

                                 style={{borderRadius: 15, border:'5px solid black'}}
                                 alt='ItemImage'
                                 width = '250px'
                                 height = '375px'
                            >
                            </img>

                        </Grid>
                        <ExpansionPanel>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <h3>Description:</h3>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Ty introduced Princess on October 29, 1997. In November 1997, Ty informed retailers they could only order 12 Princess Beanie Babies for delivery in December. This restriction caused many collectors and retailers to believe Princess would be a limited edition.

                                    The "limited edition" rumors caused a buying frenzy when Princess first shipped to Ty retailers in late December 1997. Announcements from Ty and Patricia A. Roche (Managing director of Ty Europe, at that time) that Princess would be in plentiful supply in 1998, did little to calm the buying frenzy.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                </PaperDiv>
            </Container>
        );
    }
}
