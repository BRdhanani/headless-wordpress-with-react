import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import {  Card, Col, Row, Avatar  } from 'antd';
import { Link} from "react-router-dom";
const { Meta } = Card;

class Posts extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts:[]
    }
  }

  componentDidMount = async () => {
    await axios.get(
      'http://localhost/gutenberg-demo/wp-json/wp/v2/posts/?_embed'
      ).then(post =>{
        this.setState({posts : post.data});
      }).catch(error => {
        console.log(error);
      });
  }

  removeTags = (str) => {
      if ((str===null) || (str===''))
      return false;
      else
      str = str.toString();
      return str.replace( /(<([^>]+)>)/ig, '');
   }

  render(){
    return (
       <div className="site-card-wrapper">
        <Row gutter={16}>
        {
          this.state.posts.map(post=>
            <Link to={{ pathname: "/post", id: post.id }} key={post.id} >
              <Col span={6} style={{ paddingTop: 50,paddingBottom:0,paddingRight:0,paddingLeft:50 }}>
                <Card
                  style={{ width: 380 }}
                  cover={
                    <img
                      alt="example"
                      src={post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url}
                    />
                  }
                >
                  <Meta
                    avatar={<Avatar src={post._embedded['author'][0].avatar_urls[24]} />}
                    title={post.title.rendered}
                    description={this.removeTags(post.excerpt.rendered)}
                  />
                </Card>
              </Col>
            </Link>
          )
        }
        </Row>
      </div>
    );
  }
}

export default Posts;
