import React, { Component } from "react";

class RecentPosts extends Component {
    render() {
        return (
            <form>
                <div className="recent-posts">
                    <div className="recent-posts-wrapper">
                        <div className="recent-posts-heading">Recent Posts</div>
                        <ul className="recentes-posts-posts">
                            <li>Recent post 0</li>
                            <li>Recent post 1</li>
                            <li>Recent post 2</li>
                        </ul>
                    </div>
                </div>
            </form>
        )
    }
}

export default RecentPosts;