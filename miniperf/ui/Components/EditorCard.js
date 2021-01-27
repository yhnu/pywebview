import React from "react";
import {UnControlled as CodeMirror} from "react-codemirror2";
import 'codemirror/lib/codemirror.css'
import 'codemirror/lib/codemirror'

import 'codemirror/theme/ayu-mirage.css'
import 'codemirror/mode/clike/clike'
import 'codemirror/mode/python/python'
import {Card, CardContent, CardHeader, IconButton, makeStyles} from "@material-ui/core";
import {Adb, GetApp, RotateLeft, SendOutlined, Stop} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    root: {
        width : '100%',
        height: '60%',
        // background:'lightgrey'
    },
    content:{
        height: '100%'
    }
}));

export default function EditorCard () {
    const classes = useStyles()
    return (
        <Card variant={'outlined'} className={classes.root}>
            <CardHeader title={'Coding'} action={[
                <IconButton aria-label="settings" title={'Reset'}>
                    <RotateLeft/>
                </IconButton>,
                <IconButton aria-label="settings" title={'DownLoad'}>
                    <GetApp/>
                </IconButton>,
                <IconButton aria-label="settings" title={'Run'}>
                    <SendOutlined/>
                </IconButton>,
                <IconButton aria-label="settings" title={'Debug'}>
                    <Adb/>
                </IconButton>,
                <IconButton aria-label="settings" title={'Stop'}>
                    <Stop/>
                </IconButton>
            ]}/>
            <CardContent className={classes.content}>
                <CodeMirror
                    value='re'
                    options={{
                        lineNumbers: true,
                        theme:'ayu-mirage',
                        mode:'python'
                    }}
                    className={classes.content}
                >
                </CodeMirror>
            </CardContent>
        </Card>

    )
}