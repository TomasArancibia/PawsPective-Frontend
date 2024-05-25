import PostFeed from "../components/PostFeed";
import Card from "../components/Card";
import React, {useContext, useEffect} from "react";
import {Context} from "../store/appContext"


const Feed = () => {

    const {store, actions} = useContext(Context)
    
    useEffect(()=> {
        actions.loadFeed()
    }, [])

    return (
        <div>
            <PostFeed />
        </div>
    );
};

export default Feed;