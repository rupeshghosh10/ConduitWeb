import ArticleListItem from '../ArticleListItem/ArticleListItem';

const ArticleList = ({ articles }) => {
  return (
    <>
      {articles.map(article => <ArticleListItem article={article} key={article.slug} />)}
    </>
  );
}

export default ArticleList;
