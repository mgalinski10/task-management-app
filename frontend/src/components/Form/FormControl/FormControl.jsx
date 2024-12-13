import styles from "./FormControl.module.scss";
import Button from "../../Button/Button";

const FormControl = ({ isEdit, onDelete, actionBtnTitle, deleteBtnTitle }) => {
  return (
    <div className={styles.wrapper}>
      {isEdit && (
        <Button
          backgroundColor="rgb(255, 103, 86)"
          color="white"
          onClick={onDelete}
        >
          {deleteBtnTitle}
        </Button>
      )}
      <Button backgroundColor="rgb(254, 215, 19)" type="submit">
        {actionBtnTitle}
      </Button>
    </div>
  );
};

export default FormControl;
