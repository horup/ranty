import * as React from 'react';
import { List, ListItem, Select, Card, CardContent, Grid, Typography, MenuItem, Input, TextField, Button } from '@material-ui/core';
import { actors, Dialog, Action } from '../../../model';
import store from '../../../store';


let Say = ({dialog, action}:{dialog:Dialog, action:Action})=>
{
    let del = ()=>
    {
        store.commit(()=>action.dialogs.splice(action.dialogs.indexOf(dialog), 1));
    }
    let updateText = (v:string)=>
    {
        store.commit(()=>dialog.text = v)
    }
    let updateActor = (v:number)=>
    {
        store.commit(()=>dialog.actor = v);
    }
    
    return (
        <div style={{display:'flex'}}>
            <Select value={dialog.actor} onChange={(e)=>updateActor(e.target.value as any)}>
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
            </Select>
            <TextField onChange={(e)=>updateText(e.target.value)} multiline={true} fullWidth value = {dialog.text}/>
            <Button onClick={()=>del()}>-</Button>
        </div>
    )
}

export let DialogEdit = ({action}:{action:Action}) => 
{
    let add = ()=>
    {
        store.commit(()=>action.dialogs.push(new Dialog(action.dialogs.length % 2, "")));

    }
    return (
    <Card style={{margin:'8px'}}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>
            Dialog
            </Typography>
            {action.dialogs.map((d,i)=><Say dialog={d} action={action} key={i}/>)}
            <Button onClick={()=>add()}>+</Button>
        </CardContent>
    </Card>
    )
}
