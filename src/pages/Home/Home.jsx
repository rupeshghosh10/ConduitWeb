import { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import NavTabs from '../../components/NavTabs/NavTabs';
import Loading from '../../components/Loading/Loading';
import { getArticles } from '../../services/articleApi';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';
import ArticleList from '../../components/ArticleList/ArticleList';

const tabs = [
  {
    id: 1,
    name: 'Your Feed'
  },
  {
    id: 2,
    name: 'Global Feed'
  }
];

const Home = () => {

  const [activeTab, setActiveTab] = useState(2);
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const handleTabClick = id => {
    setActiveTab(id);
  }

  useEffect(() => {
    (async () => {
      const response = await getArticles();
      setArticles(response);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <Banner />
      <div className='container mt-2'>
        <div className='row'>
          <div className='col-md-9'>
            <NavTabs tabs={tabs} handleTabClick={handleTabClick} activeTab={activeTab} />
            {isLoading &&
              <div className='text-center mt-5'>
                <Loading width={120} />
              </div>}
            {(articles.length > 0 && !isLoading) &&
              <div className='mb-4'>
                <ArticleList articles={articles} />
              </div>}
          </div>
          <div className='col-md-3'>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
