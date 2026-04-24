import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ShowData() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:8080/api/users/${id}`, {
        method: "DELETE",
      });

      setUsers((prev) => prev.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-800 text-white p-6">
      <h1 className="text-4xl text-center font-bold mb-8">All Data</h1>

      <div className="overflow-x-auto">
        {users.length > 0 ? (
          <table className="w-full max-w-4xl mx-auto border border-zinc-600 rounded-lg overflow-hidden">
            {/* Header */}
            <thead className="bg-zinc-700">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Password
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="divide-y divide-zinc-700">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-zinc-700">
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.password}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.description}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleUpdate(user.id)}
                        className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-400">No users found.</p>
        )}
      </div>
    </div>
  );
}

export default ShowData;
