import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <div className={css.circle}></div>
      <div className={css.circle}></div>
      <div className={css.circle}></div>
      <div className={css.circle}></div>
    </div>
  );
}
