
export let actors =
{
    "none":
    {
        "none":"none"
    },
    "test":
    {
        "angry":require("../../imgs/actors/test/angry.png"),
        "happy":require("../../imgs/actors/test/happy.png"),
        "talking":require("../../imgs/actors/test/talking.png")
    },
    "devguy":
    {
        "angry":require("../../imgs/actors/test/angry.png"),
        "happy":require("../../imgs/actors/test/happy.png"),
        "talking":require("../../imgs/actors/test/talking.png")
    }
}

export class Actor
{
    actor:string;
    pose:string;
    
    constructor(actor:string, pose:string)
    {
        this.actor = actor;
        this.pose = pose;
    }

    getImage()
    {
        console.log(actors[this.actor][this.pose]);
        return actors[this.actor][this.pose];
    }
}