import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Protected = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.authStatus);

  useEffect(() => {
    if (authStatus === "success" && !authentication) {
      navigate("/dashboard");
    } else if (authStatus === "failed" && authentication) {
      navigate("/login");
    } else {
      setLoader(false);
    }
  }, [authStatus, authentication, navigate]);

  return loader ? <div>Loading...</div> : <>{children}</>;
};

export default Protected;
