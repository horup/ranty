
export let actors =
{
    "test":
    {
        "angry":require("../../imgs/actors/test/angry.png"),
        "happy":require("../../imgs/actors/test/happy.png"),
        "talking":require("../../imgs/actors/test/talking.png")
    }
}

export class Actor
{
    img:any;

    constructor(img:any)
    {
        this.img = img;
    }
}