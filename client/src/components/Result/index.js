import React from 'react';

import { APIConsumer } from '../../provider/api'
import './index.css'
import moment from 'moment'

const Hashtag = ({hashtags, displayMostFrequent, style}) => (
    <div className="hashtags" style={style}>
        {
            displayMostFrequent ? hashtags.map(hashtag => (
                    <span key={hashtag} className="hashtag">{`#${hashtag.text} : ${hashtag.count}`}</span>
            )) : (hashtags).map(hashtag => (
                    <span key={hashtag} className="hashtag">{`#${hashtag.text}`}</span>
            ))
        }
    </div>
)

function Result({ results, hashtags }) {
    return (
        <div className='results'>   
            <div className="hashtags-container">
                <h3>Hashtags</h3>
                <Hashtag hashtags={hashtags} displayMostFrequent={true} style={{display: "flex", flexDirection: "column"}}/>
            </div>
            <div className="result-item-container">
                <h3>Tweets</h3>
                {
                    results.map(({user, id, text, created_at, entities}) =>{
                        return (<div className='result-item' key={id}>
                            <div className="tweet-container">
                                <div className="user-image-container">
                                    <img
                                        src={user.profile_background_image_url}
                                        className="user-image"
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

                    )
                }
            </div>

      </div>
    );
  }
  
const ResultContainer = () => (
    <APIConsumer>
        { ({ tweets }) => <Result {...tweets}/>}
    </APIConsumer>
)

export default ResultContainer;