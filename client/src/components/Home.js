import React, { Component } from "react";
import axios from 'axios';
import "./Home.css";

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
                <div className="card card-body bg-secondary mb-2">
                    <div className="row">
                        <div className="">
                        </div>
                        <div className="p-4 mb-1 text-left text-white">
                            <h3>HELLO!{}</h3>
                        </div>
                    </div>
                </div>
                <div className="post-form mb-3">
                    <div className="card card-info">
                        <div className="card-header p-3 mb-1 bg-info text-white">New Post</div>
                        <div className="card-body bg-info">
                            <div className="">
                                <form onSubmit={(e) => this.save(e)}>
                                    <div className="form-group">
                                        <textarea className="form-control form-rounded bg-light" rows="10" cols="20" placeholder="Say something..." name="message" onChange={(e) => this.setValue(e)} />
                                    </div>
                                    <button onClick={() => this.save()} type="submit" className="btn btn-secondary">
                                        Submit</button>
                                </form>
                            </div>
                        </div>
                        <br />
                        <div className="card-header p-3 mb-1 bg-secondary text-white">My Posts</div>
                        <div className="card-body mb-2 text-lg bg-secondary">
                        <div className="jumbotron p-3 mb-1 bg-white">
                        <br />
                            <ul>
                                {(this.state.posts) ? this.state.posts.map((post, index) => (
                                    <li key={index}>{post.message}
                                        <br />
                                        <br />
                                        <div className="">
                                            <button className="btn btn-danger btn-sm" onClick={() => this.edit(post)}>edit</button>
                                            <button className="btn btn-secondary btn-sm" onClick={() => this.delete(post)}>delete</button>
                                        </div>
                                        <br />
                                        <br />
                                    </li>
                                )) : null}
                            </ul>
                            </div>

                            <br />
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
            </div >
        )
    }
}
export default Home;