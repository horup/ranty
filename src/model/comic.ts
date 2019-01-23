import { Action } from "./action";
import { Dialog } from "./dialog";
import { Actor, actors } from "./actor";

export class Comic
{
    title:string = "";
    actions:Action[] = [];
    dimensions = 
    {
        frame:264,
        gutter:16,
        border:4
    }


    static Default():Comic
    {
        let comic = new Comic();
        comic.title = "Demo Comic!";

        let action1 = new Action();
        action1.caption = "Start of action!";
        let action2 = new Action();
        action2.dialogs = [new Dialog(0, "Hi there!\nHow are you doing?"), 
        new Dialog(1, "\n\n\nHello to you to!\nVery Good thank you!")];

        action1.actors[0] = new Actor('test', 'happy');
        action1.actors[1] = new Actor('none', 'none');
        let action3 = new Action();
        action3.caption = "End of action!";
        action2.actors[0] = new Actor('test', 'happy');
        action2.actors[1] = new Actor('test', 'happy');
       
       
        action3.actors[0] = new Actor('test', 'happy');
        action3.actors[1] = new Actor('test', 'happy');

        action3.dialogs = [new Dialog(1, "Say! I forgot to ask!\nHows the misses?")]

        comic.actions.push(action1);
        comic.actions.push(action2);
        comic.actions.push(action3);

        return comic;
    }
}