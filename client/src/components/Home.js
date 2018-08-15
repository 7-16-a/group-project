import React, { Component } from "react";
import axios from 'axios';

class Home extends React.Component {

    state = {}

    setValue(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentDidMount() {
        let authToken = window.localStorage.token;
        let payload = (authToken) ? JSON.parse(window.atob(authToken.split('.')[1])) : null;
        axios.get(`/api/posts/${payload.id}`).then((res) => {
            this.setState({
                owner: payload.id,
                posts: res.data
            })
        })
    }

    // componentWillReceiveProps(newProps) {
    //     if (newProps.errors) {
    //       this.setState({ errors: newProps.errors });
    //     }
    //   }

    save(e) {
        e.preventDefault();
        axios.post('/api/posts', this.state).then(() => {
            window.location.reload()
        })

    }

    edit(pt) {
        let newPost = window.prompt(`Update Post: ${pt.message}`);
        this.setState({ newPost: newPost }, () => {
            axios.put(`/api/posts/${pt._id}`, this.state).then(() => {
                window.location.reload();
            })
        })
    }

    delete(pt) {
        axios.delete(`/api/posts/${pt._id}`).then(() => {
            window.location.reload()
        })
    }

    render() {
        return (
            <div>
                <div className="post-form mb-3">
                    <div className="card card-info">
                        <div className="card-header bg-info text-white">What's New?</div>
                        <div className="card-body">
                            <form onSubmit={(e) => this.save(e)}>
                                <div className="form-group">
                                    <textarea rows="10" cols="100" placeholder="Say something..." name="message" onChange={(e) => this.setValue(e)} />
                                </div>
                                <button onClick={() => this.save()} type="submit" className="btn btn-dark">
                                    Submit</button>
                            </form>
                        </div>
                        <br />
                        <div className="card-header bg-info text-white">My Posts</div>
                        <div className="card-body">
                            {/* <div className="jumbotron"> */}
                            <ul>
                                {(this.state.posts) ? this.state.posts.map((post, index) => (
                                    <li key={index}>{post.message}
                                        <br />
                                        <br />
                                        <div className="btn-group">
                                            <button className="btn btn-danger" onClick={() => this.edit(post)}>edit</button>
                                            <button className="btn btn-dark" onClick={() => this.delete(post)}>delete</button>
                                        </div>
                                    </li>
                                )) : null}
                            </ul>
                            {/* </div> */}

                            <br />
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;