import React from "react";
import {AppBar, Card, CardContent, makeStyles, Paper, Tab, Tabs} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        width : '100%',
        height: '40%',
        'overflow-y':'auto',
        // background:'lightgrey'
    }
}));

function HierarchyContent(){
    return(
        <div>HierarchyContent</div>
    )
}

function ConsoleContent(){
    return(
        <div>ConsoleContent</div>
    )
}

function Content(props){
    console.log(props)
    const {index,...others} = props
    if(index === 0){
        return(
            <HierarchyContent/>
        )
    }else{
        return(
            <ConsoleContent/>
        )
    }
}

export default function ConsoleCard () {
    const classes = useStyles()
    const [page,setPage] = React.useState(0)
    const ChangePage = (e,v)=>{
        setPage(v)
    }

    return (
        <Card variant={'outlined'} className={classes.root}>
            <CardContent>
                {/*<Paper square>*/}
                <Tabs
                    value={page}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={ChangePage}
                    aria-label="disabled tabs example"
                >
                    <Tab label={'Hierarchy'}/>
                    <Tab label={'Console'}/>
                </Tabs>
                <Content index={page}/>
                {/*</Paper>*/}

            </CardContent>
        </Card>
    )
}