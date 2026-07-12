import { useEffect } from "react";

export default function GoogleSuccess() {
  useEffect(() => {
    console.log("GoogleSuccess Loaded");

    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    console.log("Token:", token);

    if (token) {
      localStorage.setItem("token", token);

      console.log("Saved Token:", localStorage.getItem("token"));

      window.location.replace("/dashboard");
    } else {
      console.log("No token found");

      window.location.replace("/login");
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">
        Signing in with Google...
      </h1>
    </div>
  );
}