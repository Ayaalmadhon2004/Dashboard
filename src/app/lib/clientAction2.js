'use client';

import { signIn } from "next-auth/react";

export const authenticate = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    const res = await signIn("credentials", {
      username,
      password,
      redirect: true, // ✅ مهم لإعادة التوجيه
      callbackUrl: "/dashboard", // ✅ إعادة التوجيه بعد النجاح
    });

    if (res?.error) {
      throw new Error(res.error);
    }

  } catch (err) {
    console.error("Authentication error:", err);
    throw err;
  }
};
