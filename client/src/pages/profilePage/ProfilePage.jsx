import { Box, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavbarPage from 'pages/navbar/NavbarPage';
import FriendListWidget from 'pages/widgets/FriendListWidget';
import MyPostWidget from 'pages/widgets/MyPostWidget';
import PostsWidget from 'pages/widgets/PostsWidget';
import UserWidget from 'pages/widgets/UserWidget';
import { setPostDeleted } from 'state';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  const postDeleted = useSelector((state) => state.postDeleted);
  const loggedUserPicture = useSelector((state) => state.user.picturePath);
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  const notify = () => toast('Post deleted successfully');

  useEffect(() => {
    if (postDeleted) {
      notify();
      dispatch(setPostDeleted(false));
    }
  }, [postDeleted]);

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null;

  return (
    <Box>
      <NavbarPage />
      <Box
        width='100%'
        padding='2rem 6%'
        display={isNonMobileScreens ? 'flex' : 'block'}
        gap='2rem'
        justifyContent='center'>
        <Box flexBasis={isNonMobileScreens ? '26%' : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
          <Box m='2rem 0' />
          <FriendListWidget userId={userId} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? '42%' : undefined}
          mt={isNonMobileScreens ? undefined : '2rem'}>
          <MyPostWidget picturePath={loggedUserPicture} />
          <Box m='2rem 0' />
          <PostsWidget type={'profile'} userId={userId} isProfile />
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default ProfilePage;
