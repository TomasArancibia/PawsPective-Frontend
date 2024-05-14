import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { NavLink } from "react-router-dom";

const PostFeed = () => {

  const { store, actions } = useContext(Context);

  useEffect(() => {
    console.log(store.listOfPosts)
    actions.FetchPosts();
  }, []);

  return (
    <>
    <div className='col-md-2 float-end me-5 mb-3'>
    <NavLink className="btn btn-success btn-lg" to="/new_post">Create new Post</NavLink>
    </div>  
      <div className="container-fluid">
        {store.listOfPosts && store?.listOfPosts.map(post => (
        <div>
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
