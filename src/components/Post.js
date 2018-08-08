import React from "react";
import "./Login.css";
import { Jumbotron, Button } from "mdbreact";
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
        <Jumbotron>
        <div class="form-group">
          <div class="md-form">
             <textarea class="form-control rounded-0" placeholder="Write something here" id="exampleFormControlTextarea1" rows="10">
              </textarea>
          </div>
      <Button type="submit"> Submit </Button>
      </div>
      </Jumbotron>
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