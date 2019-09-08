import React from 'react';
import moment from 'moment'

import { APIConsumer } from '../../provider/api'
import './index.css'

const Hashtag = ({hashtags, displayMostFrequent, style}) => (
    <div className="hashtags" style={style}>
        {
            displayMostFrequent ? hashtags.map(hashtag => (
                    <span key={hashtag.text} className="hashtag">{`#${hashtag.text} : ${hashtag.count}`}</span>
            )) : (hashtags).map(hashtag => (
                    <span key={hashtag.text} className="hashtag">{`#${hashtag.text}`}</span>
            ))
        }
    </div>
)

function Result({ results, hashtags, isLoading }) {
    return (
        <div className='results'>   
            <div className="hashtags-container">
                <h3>Hashtags</h3>
                <Hashtag hashtags={hashtags} displayMostFrequent={true} style={{display: "flex", flexDirection: "column"}}/>
            </div>
            <div className="result-item-container">
                <h3>Tweets</h3>
                {
                    !isLoading ? results.map(({user, id, text, created_at, entities}) =>{
                        return (<div className='result-item' key={id}>
                            <div className="tweet-container">
                                <div className="user-image-container">
                                    <img
                                        src={user.profile_image_url}
                                        className="user-image"
                                        alt={user.name}
                                    />
                                </div>
                                <div className="tweet-info">
                                    <div className='user'>
                                        <span className="user-name">{user.name}</span>
                                        <span className="user-handle">{`@${user.screen_name}`}</span>
                                        <span className="user-handle">{moment(new Date(created_at)).fromNow()}</span>
                                    </div>
                                    <span className="tweet-text">{text}</span>
                                    <Hashtag hashtags={entities.hashtags}/>
                                </div>
                            </div>
                        </div>)}

                    ): <div className="loader"><div></div><div></div><div></div></div>
                }
            </div>

      </div>
    );
  }
  
const ResultContainer = () => (
    <APIConsumer>
        { ({ tweets, isLoading }) => <Result {...tweets} isLoading={isLoading}/>}
    </APIConsumer>
)

export default ResultContainer;