import {Dialog} from './dialog';
import { Actor } from './actor';

export class Action
{
    caption?:string = undefined;
    dialogs:Dialog[] = [];
    actors:{[id:number]:Actor} = {};
}