import { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import { v4 as uuidV4 } from "uuid";
import styles from "./Checkbox.module.css";

type Props = {
  onChange: (checked: boolean) => void;
  className?: string;
  label?: ReactNode;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

function Checkbox({ id, label, className, onChange, ...props }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  const _id = id ?? uuidV4();

  return (
    <div className={classNames(styles["checkbox-wrapper"], className)}>
      <input
        id={_id}
        type="checkbox"
        {...props}
        onChange={handleChange}
        className={styles.check}
      />
      <label htmlFor={_id} className={styles.label}>
        <svg className="shrink-0" width="45" height="45" viewBox="0 0 95 95">
          <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"></rect>
          <g transform="translate(0,-952.36222)">
            <path
              d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4"
              stroke="black"
              strokeWidth="3"
              fill="none"
              className={styles.path1}
            ></path>
          </g>
        </svg>
        <span>{label}</span>
      </label>
    </div>
  );
}

export default Checkbox;
