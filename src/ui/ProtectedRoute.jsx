import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1) Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 2) if there is no authenticated user, redirect it to login page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated, isLoading]);

  // 3) while loading, show Spinner
  if (isLoading) {
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  }

  // 4) if there is a user return a app,

  if (isAuthenticated) return children;
}
