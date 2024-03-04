
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const WithAuth = ({ children }) => {
  const { isAuthenticated, isLoading, error, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated && !isLoading && !error) {
      loginWithRedirect();
    }
  }, [isAuthenticated, isLoading, error, loginWithRedirect]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return isAuthenticated ? children : null;
};

export default WithAuth;
