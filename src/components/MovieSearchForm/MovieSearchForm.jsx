import { useSearchParams } from "react-router-dom";

export default function MovieSearchForm() {
  const [params, setParams] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    params.set("query", e.target.elements.query.value);
    setParams(params);

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
}
