import styles from "./Form.module.scss";
import FormControl from "./FormControl/FormControl";
import Header from "./Header/Header";

const Form = ({
  children,
  title,
  isEdit,
  actionBtnTitle,
  deleteBtnTitle,
  onDelete,
  onSubmit,
  onCloseForm,
}) => {
  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <Header title={title} onCloseForm={onCloseForm} />
      {children}
      <FormControl
        isEdit={isEdit}
        onDelete={onDelete}
        actionBtnTitle={actionBtnTitle}
        deleteBtnTitle={deleteBtnTitle}
      />
    </form>
  );
};

export default Form;
