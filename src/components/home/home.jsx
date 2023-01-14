import './home.css'
import React from 'react'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.props=props;
        this.state={};
    }
    componentDidMount() {
        console.log('主页已加载');
    }
    componentWillUnmount() {
        console.log('主页已卸载');
    }
    releasePost() {
        alert('暂不支持发帖,如果需要请去仓库的issue页面发帖');
        if(window.confirm('是否前往')) {
            window.open('https://github.com/hwtalk/hwtalk-posts/issues');
        }
    }
    render() {
        return (
            <div>
                <p>{'本站是HelloWorld开设的一个博客站点,所有人皆可发帖(需要审核)'}</p>
                <button onClick={() => {window.open('https://github.com/login/oauth/authorize?client_id=3c00539554efb22117f8')}}>登录</button>
                <button onClick={this.releasePost}>发帖</button>
            </div>
        );
    }
}

export default Home