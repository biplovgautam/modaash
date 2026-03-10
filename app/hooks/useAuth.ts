"use client";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { config } from "../config";

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setIsLoggedIn(!!token);
  }, []);

  return {
    isLoggedIn,
    dashboardUrl: config.dashboardUrl,
    loginUrl: config.loginUrl,
    registerUrl: config.registerUrl,
  };
}
