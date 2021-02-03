import React from "react";
import {UnControlled as CodeMirror} from "react-codemirror2";
import 'codemirror/lib/codemirror.css'
import 'codemirror/lib/codemirror'

import 'codemirror/theme/ayu-mirage.css'
import 'codemirror/mode/clike/clike'
import 'codemirror/mode/python/python'
import {Card, CardContent, CardHeader, IconButton, makeStyles, TextareaAutosize} from "@material-ui/core";
import {Adb, GetApp, RotateLeft, SendOutlined, Stop} from "@material-ui/icons";
import AceEditor from "react-ace";

const useStyles = makeStyles((theme) => ({
    root: {
        width : '100%',
        height: '60%',
        // background:'lightgrey'
    },
    content:{
        height: '70%',
        position:'relative',
        flex:'1'
    },
    textArea:{
        height: '100% !important',
        width: '100% !important',
        position:'absolute',
        left:0,
        right:0,
        bottom:0,
        top:0
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
                {/*<CodeMirror*/}
                {/*    value='re'*/}
                {/*    options={{*/}
                {/*        lineNumbers: true,*/}
                {/*        theme:'ayu-mirage',*/}
                {/*        mode:'python'*/}
                {/*    }}*/}
                {/*    */}
                {/*>*/}
                {/*</CodeMirror>*/}
                <AceEditor
                    mode="java"
                    theme="github"
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                    className={classes.textArea}
                />
            </CardContent>
        </Card>

    )
}