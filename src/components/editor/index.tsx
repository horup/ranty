import * as React from 'react';
import {Button, Typography, Grid} from '@material-ui/core';
import {Comic} from '../../model';
import { FrameEdit } from './frameedit';
import store from '../../store';

export class Editor extends React.Component
{
    render()
    {
        return (
            <Grid container>
                {store.comic.actions.map((a, i)=>
                {
                    return <Grid key={i} item xs={4}><FrameEdit action={a}/></Grid>
                })}
            </Grid>
        )
    }
}