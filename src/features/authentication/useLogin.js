import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../../services/apiLogin";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginUser({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueriesData(["user"], user.user);
      toast.success("Login Successfully");
      navigate("/dashboard", { replace: true });
    },
    onError: () => toast.error("Email or password is incorrect"),
  });
  return { login, isLoading };
}
