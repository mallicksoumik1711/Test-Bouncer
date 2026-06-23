// Call this after user login/signup

const generateToken = async (userId) => {
  const response = await fetch("https://bouncer-u9t6.onrender.com/apiauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.API_KEY,
    },
    body: JSON.stringify({
      projectId: "ecommerce-dkz3zqip",
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
