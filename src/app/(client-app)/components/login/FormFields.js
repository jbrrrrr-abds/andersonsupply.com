import { useState } from "react";
import { Input } from "clientapp/components/ui/input";
import { Button } from "clientapp/components/ui/button";
import { useRouter } from "next/navigation";

const FormFields = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const login = async function(event) {
    event.preventDefault();
    const endpoint = './login/send';
    const formData = {
      email: email,
      password: password
    }
    const JSONdata = JSON.stringify(formData);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (!response.ok) {
      console.error('error submitting form');
    } else {
      const data = await response.json();
      console.log(data);
      router.push('./designs/');
    }
  }

  return (
    <>
    <section className="flex flex-col self-center p-6 bg-white border rounded-md border-brandBlack md:w-1/3 sm:w-full">
        <form onSubmit={login}>
          <div>
            <label className="text-xs font-bold">Email:</label>
            <Input
              type="email"
              name="email"
              className="border-brandBlack-300"
              value={email}
              onChange={handleEmailChange}
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
              value={password}
              onChange={handlePasswordChange}
              autoComplete="current-password"
              required
            />
          </div>
          <div className="flex justify-end mt-3">
            <Button className="transition-colors duration-200 ease-in-out bg-brandBlack hover:bg-gold" type="submit">Log In</Button>
          </div>
        </form>
      </section>
    </>
  )
}

export default FormFields;
