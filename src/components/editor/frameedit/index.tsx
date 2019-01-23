import * as React from 'react';
import {Button, Typography, TextField, Paper} from '@material-ui/core';
import {Action} from '../../../model';
import store from '../../../store';
import { ActorEdits } from './actors';

export class FrameEdit extends React.Component<{action:Action}, any>
{
    render()
    {
        let a = this.props.action;
        return (
            <Paper style={{textAlign:'left', padding:'16px', margin:'16px'}}>
                <form noValidate autoComplete="off">
                    <TextField fullWidth label="Caption" value={a.caption} onChange={(v)=>store.commit(()=>a.caption = v.target.value)}/>
                    <ActorEdits action={this.props.action}/>
                </form>
            </Paper>
        )
    }
}