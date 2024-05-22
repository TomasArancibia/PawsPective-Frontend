import PostFeed from "../components/PostFeed";
import Card from "../components/Card";
import React, {useContext, useEffect} from "react";
import {Context} from "../store/appContext"

const Feed = () => {

    const {store, actions} = useContext(Context)
    
    useEffect(()=> {
        console.log(store.listOfPosts)
        actions.FetchPosts()
    }, [])

    return (
        <div>
            <PostFeed />
            <Card />
        </div>
    );
};

export default Feed;