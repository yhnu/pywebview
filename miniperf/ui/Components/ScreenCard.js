import React from "react";
import {Button, ButtonGroup, Card, CardContent, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        // background:'lightgrey'
    },
    Screen:{
      height:'100% - 40px'
    },
    Group: {
        height:'40px',
        width:'100%'
    }
}));

export default function ScreenCard () {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.Screen}>
                <canvas/>
            </div>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" fullWidth>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                <Button>One</Button>
                <Button>Two</Button>
            </ButtonGroup>
        </div>
    )
}