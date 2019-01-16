
export type DialogType = 'talk' | 'shout' | 'thinking';

export class Dialog
{
    actor:number;
    type:DialogType;
    text:string;

    constructor(actor:number, text:string, type:DialogType = 'talk')
    {
        this.actor = actor;
        this.text = text;
        this.type = type;
    }
}