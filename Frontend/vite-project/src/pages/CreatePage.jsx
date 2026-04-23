import { useState } from "react";

function CreatePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    description: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch("http://localhost:8080/api/users/create", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
    console.log(formData);
  }

  return (
    <div>
      {/* header for create page */}
      <div>
        <h1 className="text-4xl font-bold text-center text-white pt-6">
          Create Lists
        </h1>

        <div className="flex justify-center border border-zinc-500 mt-10 p-8 w-1/2 mx-auto rounded-md">
          <form action="" className="w-full" onSubmit={handleSubmit}>
            <div className="p-5 text-white">
              <label htmlFor="">Name</label>
              <input
                value={formData.name}
                onChange={handleChange}
                type="text"
                name="name"
                className="border border-zinc-600 block w-full rounded-md mt-2 p-2"
              />
            </div>
            <div className="p-5 text-white">
              <label htmlFor="">Email</label>
              <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                name="email"
                className="border border-zinc-600 block w-full rounded-md mt-2 p-2"
              />
            </div>
            <div className="p-5 text-white">
              <label htmlFor="">Password</label>
              <input
                value={formData.password}
                onChange={handleChange}
                type="password"
                name="password"
                className="border border-zinc-600 block w-full rounded-md mt-2 p-2"
              />
            </div>
            <div className="p-5 text-white">
              <label htmlFor="">Description</label>
              <input
                value={formData.description}
                onChange={handleChange}
                type="text"
                name="description"
                className="border border-zinc-600 block w-full rounded-md mt-2 p-2"
              />
            </div>
            <div className="p-5">
              <button
                type="submit"
                className="font-bold bg-sky-400 px-8 py-2 rounded-md w-full text-white"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;
