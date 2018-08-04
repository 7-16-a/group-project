import React from "react";
import "./Login.css";
import { Form, FormControl, FormGroup, Col, Button } from "react-bootstrap";
import axios from 'axios';

// export default () => {
//   return (
//     <div>

//     </div>
//   )
// }


class Post extends React.Component {
  render() {
    return (
      <div>
        <h1>Posts</h1>
      </div>
    );
  }

  login() {
    axios.post('/api/v1/users/posts', this.state).then(() => {
      alert('success')
    }).catch((err) => {
      console.log('error')
    })
  }
}

export default Post;