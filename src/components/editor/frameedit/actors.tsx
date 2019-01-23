import * as React from 'react';
import { Action } from '../../../model';
import { List, ListItem, Select, Card, CardContent, Grid, Typography, MenuItem, Input } from '@material-ui/core';
import { actors } from '../../../model';
import store from '../../../store';

let ActorEdit = ({action, index}:{action:Action, index:number}) => 
{
    let actor = action.actors[index];
    let actorList:string[] = [];
    for (let key in actors)
    {
        actorList.push(key);
    }

    let poseList:string[] = [];
    for (let key in actors[actor.actor])
    {
        poseList.push(key);
    }

    return (
    <Card style={{margin:'8px'}}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>
            Actor {index}
            </Typography>

            <Select onChange={(e)=>store.commit(()=>{actor.actor = e.target.value; actor.pose = Object.keys(actors[actor.actor])[0] })} value={actor.actor} fullWidth>
                {actorList.map((a,i)=><MenuItem key = {i} value = {a}>{a}</MenuItem>)}
            </Select>

            <Select onChange={(e)=>store.commit(()=>{actor.pose = e.target.value})} value={actor.pose} fullWidth>
                {poseList.map((a,i)=><MenuItem key = {i} value = {a}>{a}</MenuItem>)}
            </Select>
        </CardContent>
    </Card>
    )
}

export let ActorEdits = ({action}:{action:Action}) => (
    <Grid container>
        <Grid item xs={6}>
            <ActorEdit action = {action} index = {0}/>
        </Grid>
        <Grid item xs={6}>
            <ActorEdit action = {action} index = {1}/>
        </Grid>
    </Grid>
)