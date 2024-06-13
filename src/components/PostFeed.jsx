import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faComment,
  faPaperPlane,
  faLocationPin
} from "@fortawesome/free-solid-svg-icons";

const PostFeed = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadFeed();
  }, []);

  // Función para procesar la localización
  const getSafeLocation = (location) => {
    if (!location) return null;
    if (location === 0) return null;

    // Suponiendo que location está en formato "nombre_direccion, ciudad, pais"
    const parts = location.split(',');
    if (parts.length < 3) return null;
    if (parts.length > 5) {return `${parts[1]},${parts[3]}, ${parts[parts.length-1]}`;};
    if (parts.length <= 5) { return `${parts[1]},${parts[2]}, ${parts[parts.length-1]}`;};
  };

  return (
    <>
      <div className='col-md-2 text-center pt-3 cntr-btn'>
        <NavLink className="btn btn-lg newcard" to="/new_post">Create new Post</NavLink>
      </div>  
      <div className="container-fluid">
        {store.listOfPosts && store?.listOfPosts.toReversed().map(post => (
          <div className='mt-4 mb-4' key={post.id}>
            <div className="card p-1 m-1" style={{ width: "18rem" }}>
              <div className="container-fluid p-1">
                <img
                  src={post.source_url}
                  className="card-img-top"
                  alt="Placeholder"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center p-1 m-1">
                <div className='pt-3'>
                  {post.location !== 0 && (
                    <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text loc-body"><FontAwesomeIcon icon={faLocationPin}/></span>
                    <span className="locationlabel w-50 location-text">{getSafeLocation(post.location)}</span>
                  </div>
                  )}
                </div>
                <div className="border rounded-pill d-inline-flex text-light p-1">
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