import {useContext} from 'react';
import {Context} from '../store/appContext';
import NewPostForm from '../components/NewPostForm';


const NewPost = () => {

    const { store, actions } = useContext(Context);

  return (
    <>
      <h1>Create Post</h1>
      <NewPostForm formdata={store.post} handleSubmit={actions.handleSubmit} handleChange={actions.handleChange} />
    </>
  );
};

export default NewPost;