import Tag from '../Tag/Tag';

const TagList = ({ tags }) => {
  return (
    <ul className='d-flex align-items-center justify-content-end my-0'>
      {tags.map(tag => <Tag tag={tag} key={tag} />)}
    </ul>
  );
}

export default TagList;
