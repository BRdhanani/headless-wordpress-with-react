import React from 'react';
import axios from "axios";

/*This component is used to display content of the single post*/
class About extends React.Component {
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
      'http://localhost/gutenberg-demo/wp-json/wp/v2/pages/849'
      ).then(post =>{
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
    return (
      <div>
        <h1>{this.state.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
      </div>
    )
  }
}

export default About;
