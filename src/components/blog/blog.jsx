import "./blog.css"
import React from 'react'

// const settings = {
//     'user': 'hwtalk',
//     'repo': 'hwtalk-posts',
//     'content': [1]
// };
const datarepo=['hwtalk','hwtalk-data'];
function httpGet(url) {
    let xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET",url,false);
    xmlhttp.send(null);
    return xmlhttp.responseText;
}
let data=httpGet('https://api.github.com/repos/'+datarepo[0]+'/'+datarepo[1]+'/issues/1');
data=JSON.parse(data);
const settings = JSON.parse(data['body']);
class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.props=props;
        this.state={};
    }
    componentDidMount() {
        console.log('文章页已加载');
    }
    componentWillUnmount() {
        console.log('文章页已卸载');
    }
    httpGet(url) {
        let xmlhttp=new XMLHttpRequest();
        xmlhttp.open("GET",url,false);
        xmlhttp.send(null);
        return xmlhttp.responseText;
    }
    render() {
        let list=[];
        let contents=settings['content'];
        let user=settings['user'];
        let repo=settings['repo'];
        for(let i in contents) {
            let url='https://api.github.com/repos/'+user+'/'+repo+'/issues/'+contents[i];
            let json=this.httpGet(url);
            json=JSON.parse(json);
            list.push(<a class="item" href={"blog/?id="+contents[i]}>{json['title']+' - '+json['user']['login']}</a>);
        }
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default Blog