import * as React from 'react';
import { Comic, Action } from '../model';

export class Store
{
    private listener:(()=>any);
    comic:Comic = Comic.Default();
    

    listen(f:()=>any)
    {
        this.listener = f;
    }

    save()
    {
        if (this.listener != null)
            this.listener();
    }

    commit(f:()=>any)
    {
        f();
        this.save();
    }

}

let store = new Store();

export default store;
