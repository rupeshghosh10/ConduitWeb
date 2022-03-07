import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getArticlesByAuthor } from '../../services/articleApi';
import { getProfile } from '../../services/profileApi';
import { tabs } from '../Profile/tabs';
import UserContext from '../../components/UserContext/UserContext';
import Loading from '../../components/Loading/Loading';
import ArticleList from '../../components/ArticleList/ArticleList';
import NavTabs from '../../components/NavTabs/NavTabs';

const Profile = () => {

  const location = useLocation();
  const [profile, setProfile] = useState({});
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(1);
  const { user } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const response = await getProfile(location.pathname.slice(2));
      setProfile(response);
      const response2 = await getArticlesByAuthor(response.username);
      setArticles(response2);
      setIsLoading(false);
    })();
  }, [location.pathname]);

  return (
    <>
      <div className='bg-dark text-white pt-2 pb-3 d-flex flex-column align-items-center justify-content-center'>
        <h3>{profile.username}</h3>
        <p>{profile.bio}</p>
        <div className='w-75'>
          {user.username !== profile.username &&
            <button
              className='btn btn-sm btn-outline-light float-end'>
              <i className="bi bi-plus-lg"></i> Follow
            </button>}
          {user.username === profile.username &&
            <Link to='/settings' className='btn btn-sm btn-outline-light float-end'>
              <i className="bi bi-gear"></i> Edit Profile
            </Link>}
        </div>
      </div>
      <div className='container mt-2'>
        <div className='row'>
          <div className='col-md-9'>
            <NavTabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            {isLoading &&
              <div className='text-center mt-5'>
                <Loading width={120} />
              </div>}
            {(articles.length > 0 && !isLoading) &&
              <div className='mb-4'>
                <ArticleList articles={articles} />
              </div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
