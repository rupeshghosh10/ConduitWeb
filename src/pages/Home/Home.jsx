import { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import NavTabs from '../../components/NavTabs/NavTabs';
import { getArticles } from '../../services/articleApi';

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

  const handleTabClick = id => {
    setActiveTab(id);
  }

  useEffect(() => {
    (async () => {
      //const articles = await getArticles();
      //console.log(articles);
    })();
  }, []);

  return (
    <>
      <Banner />
      <div className='container mt-2'>
        <div className='row'>
          <div className='col-md-9'>
            <div>
              <NavTabs tabs={tabs} handleTabClick={handleTabClick} activeTab={activeTab} />
            </div>
          </div>
          <div className='col-md-3'>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
