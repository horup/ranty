import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Strip, Editor } from './components';
import { Comic } from './model';

class Index extends React.Component<any, {comic:Comic}>
{
    state = {comic:Comic.Default()}

    render()
    {
        let comic = this.state.comic;
        return (
            <div style={{textAlign:'center'}}>
                <Strip comic={comic}/>
                <Editor>

                </Editor>
            </div>
        )
    }
}

ReactDom.render(<Index/>, document.getElementById("main"));

document.getElementById("preloader").remove();