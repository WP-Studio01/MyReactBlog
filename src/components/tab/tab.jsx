import "./tab.css"
import React from 'react'

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.tab1=props.tab1;
        this.tab2=props.tab2;
        this.state={
            tab: 1
        };
    }
    tabswitch(n) {
        console.log('tab switch '+n);
        this.setState({
            tab: n
        });
    }
    componentDidMount() {
        this.tabswitch(1);
    }
    getContent(n) {
        switch(n) {
            case 1: 
                return this.tab1;
            case 2:
                return this.tab2;
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state['tab']==1?(<li className="Tab TabItemSelect" onClick={() => {this.tabswitch(1);}}>主页</li>):(<li className="Tab TabItem" onClick={() => {this.tabswitch(1);}}>主页</li>)}
                    {this.state['tab']==2?(<li className="Tab TabItemSelect" onClick={() => {this.tabswitch(2);}}>文章</li>):(<li className="Tab TabItem" onClick={() => {this.tabswitch(2);}}>文章</li>)}
                </ul>
                <div className="content">
                    {this.getContent(this.state['tab'])}
                </div>
            </div>
        );
    }
}

export default Tab