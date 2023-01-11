import "./blog.css"
import React from 'react'

const settings = {
    'user': 'hwtalk',
    'repo': 'hwtalk-posts',
    'content': [2,1]
};
class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.props=props;
        this.state={};
    }
    componentDidMount() {
        console.log('文章页已加载');
    }
}

export default Blog