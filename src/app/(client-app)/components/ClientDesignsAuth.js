"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import supabase from "../lib/supabaseHelpers.js";
import { useRouter } from "next/navigation";

const ClientDesignsAuth = ({ page, updateAuth, isAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const loginSubmit = async (event) => {
    event.preventDefault();
    // sends a signIn request to supabase, authenticating the user
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    updateAuth(true);

    data.account = await supabase
      .from("users")
      .select("prismicSlug")
      .eq("email", data.user.email);

    console.log(data.account.data[0].prismicSlug);
    const pageSlug = data.account.data[0].prismicSlug;
    router.push(`/client-designs/${pageSlug}/`);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-center max-w-[800px] mx-auto text-2xl mb-4">
        Please log in to view your design archive
      </h1>
      <section className="flex flex-col self-center p-6 border rounded-md border-input md:w-1/3 sm:w-full">
        <form onSubmit={loginSubmit}>
          <div>
            <label className="text-xs font-bold">Email:</label>
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <label className="text-xs font-bold">Password:</label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="flex justify-end mt-3">
            <Button type="submit">Log In</Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ClientDesignsAuth;
