import React, { useState } from "react";

import css from "./SubscribeForm.module.scss";

type Props = { onSubscribe: (email: string) => void };
const SubscribeForm: React.FC<Props> = ({ onSubscribe }) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "") {
      setError(true);
      return;
    }
    onSubscribe(email);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (error && value !== "") {
      setError(false);
    }
  };
  return (
    <form className={css.form} onSubmit={onSubmit}>
      <div className={css.fieldset}>
        <input
          className={`${css.input} ${error ? css["input-error"] : ""}`}
          onChange={onChange}
          type="text"
          name="email"
          placeholder="E-mail"
        />
        {error && (
          <span className={css.error}>
            Будь ласка введіть вашу адресу електронної пошти
          </span>
        )}
      </div>
      <button className={css.button}>Підписатися</button>
    </form>
  );
};

export default SubscribeForm;
