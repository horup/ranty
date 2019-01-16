import * as React from 'react';
import {Comic, Action, Actor} from '../../model';
import { number } from 'prop-types';

function drawCaption(action:Action, ctx:CanvasRenderingContext2D, r:{x:number, y:number, w:number, h:number})
{
    ctx.textAlign = "left";
    ctx.fillStyle = "black";
    ctx.font = "18px standard";
    ctx.textBaseline = "top";
    ctx.fillText(action.caption, r.x + 2, r.y + 2)
}

function drawActor(actor:Actor, ctx:CanvasRenderingContext2D, r:{x:number, y:number, w:number, h:number})
{
    var img = new Image();
    img.src = actor.img;
    ctx.drawImage(img, r.x, r.y);
}

function drawActors(action:Action, ctx:CanvasRenderingContext2D, r:{x:number, y:number, w:number, h:number})
{
    for (let id in action.actors)
    {
        let actor = action.actors[id];
        let r2 = {x:r.x, y:r.y, h:r.h, w:r.w / 2};
        if (id != "0")
        {
            r2.x += r2.w;
        }

        drawActor(actor, ctx, r2);
    }
}

function drawDialogs(action:Action, ctx:CanvasRenderingContext2D, region:{x:number, y:number, w:number, h:number})
{
    if (action.dialogs.length == 0)
        return;

    let margin = 8;
    let y = region.y;
    let x = region.x + margin;
    let w = region.w - margin * 2;
    let h = region.h / action.dialogs.length;

    y += h/2;

    ctx.fillStyle = "black";
    ctx.font = "18px standard";
    ctx.textBaseline = "middle";

    for (let dialog of action.dialogs)
    {
        let yy = y;
        let xx = x;
        let lines = dialog.text.split('\n');

        if (dialog.actor % 2 == 0)
        {
            ctx.textAlign = "left";
        }
        else
        {
            ctx.textAlign = "right";
            xx = x + w;
        }

        for (let line of lines)
        {
            ctx.fillText(line, xx, yy, w);
            yy+=16;
        }
    }
}

function drawAction(action:Action, ctx:CanvasRenderingContext2D, region:{x:number, y:number, w:number, h:number})
{
    drawActors(action, ctx, {x:region.x, y:region.y, w:region.w, h:region.h / 2});
    drawDialogs(action, ctx, {x:region.x, y:region.y, w:region.w, h:region.h / 2});
    if (action.caption != null)
    {
        drawCaption(action, ctx, region);
    }
}

function drawFrame(action:Action, ctx:CanvasRenderingContext2D, region:{x:number, y:number, w:number, h:number})
{
    ctx.fillStyle = "white";
    ctx.fillRect(region.x, region.y, region.w, region.h);


    drawAction(action, ctx, region);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeRect(region.x, region.y, region.w, region.h);
}

export class Strip extends React.Component<{comic:Comic}>
{
    canvas:HTMLCanvasElement;

    draw()
    {
        let comic = this.props.comic;
        let headerSize = 32;
        let width = comic.dimensions.frame * comic.actions.length + comic.dimensions.gutter * (comic.actions.length + 1);
        let height = comic.dimensions.frame + comic.dimensions.gutter * 2 + 32;
        this.canvas.width = width;
        this.canvas.height = height;
        let ctx = this.canvas.getContext("2d");

        let x = comic.dimensions.gutter;
        let y = comic.dimensions.gutter + headerSize;

        ctx.fillStyle = "white";
        ctx.fillRect(0,0, width, height);
        ctx.font = "24px standard";
        ctx.textBaseline = "top";
        ctx.fillText(comic.title, comic.dimensions.gutter, comic.dimensions.gutter);


        for (let action of comic.actions)
        {
            drawFrame(action, ctx, {x:x, y:y, w:comic.dimensions.frame, h:comic.dimensions.frame});
            x += comic.dimensions.gutter + comic.dimensions.frame;
        }
    }

    preload(f:()=>any)
    {
        let imagesToLoad = 0;
        this.props.comic.actions.forEach(a=>
        {
            for (let id in a.actors)
            {
                imagesToLoad++;

                let img = new Image();
                img.onload = ()=>
                {
                    imagesToLoad--;
                    if (imagesToLoad == 0)
                    {
                        f();
                    }
                }
                
                img.src = a.actors[id].img;

            }
        });
    }

    componentDidMount = () => this.preload(()=>this.draw());
    componentDidUpdate = ()=> this.preload(()=>this.draw());

    render = ()=><canvas ref={(ref)=>this.canvas=ref}></canvas>
}