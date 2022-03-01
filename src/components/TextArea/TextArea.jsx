import styles from './TextArea.module.css';

const TextArea = ({ type, name, placeholder, register, error, defaultValue = null }) => {
  return (
    <div className='form-floating has-validation mb-2'>
      <textarea
        type={type}
        className={`form-control form-control-lg ${styles.textareaHeight}`}
        placeholder={placeholder}
        {...register(name)}
        defaultValue={defaultValue}></textarea>
      <label htmlFor='bio'>{placeholder}</label>
      <p className='invalid-feedback m-0 ps-1'>{error}</p>
    </div>
  );
}

export default TextArea;
