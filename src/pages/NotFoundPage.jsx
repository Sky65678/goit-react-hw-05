import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Not found movie...</h1>
      <p>
        Please use this link to go <Link to="/">back home</Link>
      </p>
    </div>
  );
}
