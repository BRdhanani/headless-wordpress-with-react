import React from 'react';
import axios from "axios";

/*This component is used to display content of the single post*/
class Post extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts:[],
      title:'',
      content:''
    }
  }

  componentDidMount = async () =>{
    await axios.get(
      'http://localhost/gutenberg-demo/wp-json/wp/v2/posts/' + this.props.location.id
      ).then(post =>{
        console.log(post.data.title.rendered)
        this.setState({
          posts : post.data,
          title : post.data.title.rendered,
          content : post.data.content.rendered
        });
      }).catch(error => {
        console.log(error);
      });
  }

  render(){
    console.log(this.state.content)
    return (
      <div>
        <h1>{this.state.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
      </div>
    )
  }
}

export default Post;
