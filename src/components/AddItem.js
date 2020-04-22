import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function AddItem() {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="sm">
            <div className={classes.paper} style={{
                background: 'linear-gradient(rgba(255,255,255, 1), rgba(255,255,255,.8))',
                padding: '50px',
                borderRadius: '15px'
            }}>
                <React.Fragment>
                    <Typography variant="h6" gutterBottom>
                        Item Details
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} >
                            <TextField
                                required
                                id="itemName"
                                name="itemName"
                                label="Item Name"
                                fullWidth
                                autoComplete="iname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="itemManufacturer"
                                name="itemManufacturer"
                                label="Item Manufacturer"
                                fullWidth
                                autoComplete="item Manufacturer"
                            />
                        </Grid>
                        {/*<Grid item xs={12}>*/}
                        {/*    <TextField*/}
                        {/*        id="itemNumber"*/}
                        {/*        name="itemNumber"*/}
                        {/*        label="Item Number"*/}
                        {/*        fullWidth*/}
                        {/*        autoComplete="Item Number"*/}
                        {/*    />*/}
                        {/*</Grid>*/}
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="Model"
                                name="Model"
                                label="Model"
                                fullWidth
                                autoComplete="Model"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="productionYear"
                                name="productionYear"
                                label="Production Year"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                multiline
                                rows="4"
                                id="itemDescription"
                                name="itemDescription"
                                label="Item Description"
                                fullWidth
                                autoComplete="Item Description"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox name="saveAddress" value="yes" />
                                }
                                label="Use this form to place your item order"
                            />
                        </Grid>
                    </Grid>

                    <Button variant="contained"  component="span" style={{marginTop: '30px',}}>
                        Submit
                    </Button>
                </React.Fragment>
            </div>
        </Container>
    )
}

