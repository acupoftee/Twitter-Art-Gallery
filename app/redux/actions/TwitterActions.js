import { ADD_TWEET } from 'constants/ActionTypes';

export function addTweet(tweet) {
    return {
        type: ADD_TWEET,
        payload: { tweet }
    };
}