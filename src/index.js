import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import moment from 'moment';

function Tweet({ tweet }) {
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar} />
            <div className="content">
                <Author author={tweet.author} />
                <Time time={tweet.timestamps}/>
                <Message txt={tweet.message} />
                <div className="buttons">
                    <ReplyButton />
                    <RetweetButton count={tweet.retweets} />
                    <LikeButton count={tweet.likes} />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    );
}

function Avatar({ hash }) {
    return (
        <img src={`https://www.gravatar.com/avatar/${hash}`} className="avatar" alt="avatar" />
    );
}

function Message({ txt }) {
    return (
        <div className="message">
            {txt}
        </div>
    );
}

function Author({ author }) {
    return (
        <span className="author">
            <span className="name">{author.name}</span>
            <span className="handle">@{author.handle}</span>
        </span>
    );
}

function Time({ time }) {
    return (
    <span className="time">{moment(time).fromNow()}</span>
    );
}

function ReplyButton() {
    return ( <i className="fa fa-reply reply-button" /> );
}

function RetweetButton({ count }) {
    return (
        <span className="like-button">
            <i className="fa fa-retweet">{count > 0 && <span className="retweet-count">{count}</span>}</i>
        </span>
    );
}

function LikeButton({ count }) {
    return (
        <span className="like-button">
            <i className="fa fa-heart">{count > 0 && <span className="like-count">{count}</span>}</i>
        </span>
    );
}

function MoreOptionsButton() {
    return ( <i className="fa fa-ellipsis-h more-options-button" /> );
}

const testTweet = {
    message: 'Hello from tweet',
    gravatar: 'xyz',
    author: {
        handle: 'yunnix',
        name: 'Yunus Bahtiar'
    },
    likes: 2,
    retweets: 30,
    timestamps: '2020-07-30 21:24:37'
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.querySelector('#root'));