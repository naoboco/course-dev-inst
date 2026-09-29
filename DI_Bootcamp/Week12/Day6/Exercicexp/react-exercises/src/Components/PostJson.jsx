function PostJson() {
  const sendData = async () => {
    const webhookUrl = "https://webhook.site/374f69ba-c626-494a-b07a-ff03b5bd99fa";

    const data = {
      key1: "myusername",
      email: "mymail@gmail.com",
      name: "Isaac",
      lastname: "Doe",
      age: 27
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.text();

      console.log("Response:", response);
      console.log("Response body:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={sendData}
      >
        Send JSON Data
      </button>
    </div>
  );
}

export default PostJson;