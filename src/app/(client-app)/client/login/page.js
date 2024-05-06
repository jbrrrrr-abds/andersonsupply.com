//import { useState } from "react";
import { Input } from "clientapp/components/ui/input";
import { Button } from "clientapp/components/ui/button";
import { login } from './actions';

const ClientAuth = ({ page }) => {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    //setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    //setPassword(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-center max-w-[800px] mx-auto text-2xl mb-4">
        Please log in to view your design archive
      </h1>
      <section className="flex flex-col self-center p-6 bg-white border rounded-md border-brandBlack md:w-1/3 sm:w-full">
        <form>
          <div>
            <label className="text-xs font-bold">Email:</label>
            <Input
              type="email"
              name="email"
              className="border-brandBlack-300"
              //value={email}
              //onChange={handleEmailChange}
              required
              autoComplete="username"
            />
          </div>
          <div>
            <label className="text-xs font-bold">Password:</label>
            <Input
              type="password"
              name="password"
              className="border-brandBlack-300"
              //value={password}
              //onChange={handlePasswordChange}
              autoComplete="current-password"
              required
            />
          </div>
          <div className="flex justify-end mt-3">
            <Button className="transition-colors duration-200 ease-in-out bg-brandBlack hover:bg-gold" type="submit" /*formAction={login}*/>Log In</Button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ClientAuth;
