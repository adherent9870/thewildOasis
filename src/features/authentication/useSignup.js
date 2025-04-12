import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../services/apiLogin";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      toast.success(
        "Account Successfully Created !! \n Please verify the user's email address"
      );
    },
  });
  return { isLoading, signUp };
}
