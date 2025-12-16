import { Link, useLocation } from "react-router-dom";

export default function OutcomesNotFound() {
  const location = useLocation();

  return (
    <div>
      <h1>Outcome not found</h1>
      <p>
        The outcome you tried to access doesn’t exist or hasn’t been created
        yet.
      </p>

      <p className="text-sm opacity-70">URL: {location.pathname}</p>

      <Link to="/" className="underline">
        Back to home
      </Link>
    </div>
  );
}
