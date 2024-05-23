import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const PostFeed = () => {

  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadFeed();
  }, []);

  return (
    <>
    <div className='col-md-2 text-center'>
    <NavLink className="btn btn-lg newcard" to="/new_post">Create new Post</NavLink>
    </div>  
      <div className="container-fluid">
        {store.listOfPosts && store?.listOfPosts.map(post => (
        <div className='mt-4 mb-4'>
        <div className="card p-1 m-1" style={{ width: "18rem" }}>
          <div className="container-fluid p-1">
            <img
              src={post.source_url}
              className="card-img-top"
              alt="Placeholder"
            />
          </div>
          <div className="d-inline-flex justify-content-end space-evenly text-light p-1 m-1">
            <div className="border rounded-pill d-inline-flex p-1">
              <div className="p-1">
                <FontAwesomeIcon icon={faPaw} />
              </div>
              <div className="p-1">
                <FontAwesomeIcon icon={faComment} />
              </div>
              <div className="p-1">
                <FontAwesomeIcon icon={faPaperPlane} />
              </div>
            </div>
          </div>
          <div className="card-body border p-1 m-1 rounded">
            <p className="card-text">
              {post.description}
            </p>
          </div>
        </div>
      </div>
        ))}
      </div>
    </>
  );
};

export default PostFeed;
