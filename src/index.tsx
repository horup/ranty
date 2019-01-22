import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Strip, Editor } from './components';
import { Comic } from './model';

import store from './store';

class Index extends React.Component<{}, {}>
{
    componentDidMount()
    {
        store.save = ()=> this.setState({});
    }

    render()
    {
        let comet = Comic.Default();
        return (
            <div style={{textAlign:'center'}}>
                <Strip/>
                <Editor/>
            </div>
        )
    }
}

ReactDom.render(<Index/>, document.getElementById("main"));

let e = document.getElementById("preloader");
if (e!= null)
    e.remove();