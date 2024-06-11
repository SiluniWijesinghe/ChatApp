import { useState } from "react";

function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center bg-blue-50 h-screen">
      <form className="w-64 mx-auto ">
        <input
          type="username"
          value={userName}
          placeholder="username"
          className="w-full block p-2 mb-5 "
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          className="w-full block  p-2 mb-5"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
