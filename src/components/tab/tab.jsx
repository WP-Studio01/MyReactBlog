import "./tab.css"
import React from 'react'
import ReactDOM from 'react-dom'

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
    render() {
        // let tab_1=(this.state['tab']==1?(<li className="Tab TabItemSelect" onClick={() => {this.tabswitch(1);}}>Tab1</li>):(<li className="Tab TabItem" onClick={() => {this.tabswitch(1);}}>Tab1</li>));
        // let tab_2=(this.state['tab']==2?(<li className="Tab TabItemSelect" onClick={() => {this.tabswitch(2);}}>Tab2</li>):(<li className="Tab TabItem" onClick={() => {this.tabswitch(2);}}>Tab2</li>));
        return (
            <div>
                <ul>
                    <li className="Tab TabItem" onClick={() => {this.tabswitch(1);}}>Tab1</li>
                    <li className="Tab TabItem" onClick={() => {this.tabswitch(2);}}>Tab2</li>
                    {/* (this.state['tab']==1?(<li className="TabItemSelect" onClick={() => {this.tabswitch(1);}}>Tab1</li>):(<li className="TabItem" onClick={() => {this.tabswitch(1);}}>Tab1</li>))
                    (this.state['tab']==2?(<li className="TabItemSelect" onClick={() => {this.tabswitch(2);}}>Tab2</li>):(<li className="TabItem" onClick={() => {this.tabswitch(2);}}>Tab2</li>)) */}
                </ul>
            </div>
        );
    }
}

export default Tab