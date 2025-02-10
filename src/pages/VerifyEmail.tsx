import { Link, useSearchParams } from "react-router";

export function VerifyEmail() {

  const [searchParams] = useSearchParams();
  const __clerk_status = searchParams.get("__clerk_status");

  if (__clerk_status === "verified") {
    return <h2>Your email has been verified, go to <Link to="/in/home">home page</Link></h2>;
  }
  if (__clerk_status === "expired") {
    return <h2>The verification link has expired</h2>;
  }
  if (__clerk_status === "failed") {
    return <h2>There was an error verifying your email</h2>;
  }
  if (__clerk_status) {
    return <h2>There was an error verifying your email</h2>;
  }

  return <h2>Verifying email...</h2>;
}