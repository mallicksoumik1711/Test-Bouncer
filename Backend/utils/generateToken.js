// Call this after user login/signup

const generateToken = async (userId) => {
  const response = await fetch("http://localhost:3000/apiauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.API_KEY,
    },
    body: JSON.stringify({
      projectId: "lenalena-6kfqe2vb",
      userId: userId,
    }),
  });

  const data = await response.json();
  console.log("Token generation response:", data);
  if (!data.success) {
    throw new Error(data.message || "Token generation failed");
  }
  return data.token;
};

module.exports = generateToken;
