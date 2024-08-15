import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/app/components/authProvider";

const useAuthRouter = ( redirectTo: string, fallbackTo?: string) => {
    // const token = {}
//   const router = useRouter();
//   useEffect(() => {
//     if (token) {
//       if (fallbackTo) {
//         router.push(fallbackTo);
//       }
//     } else {
//       router.push(redirectTo);
//     }
//   }, [token, router, redirectTo, fallbackTo]);
};

export default useAuthRouter;
