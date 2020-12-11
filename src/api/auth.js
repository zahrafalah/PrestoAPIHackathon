import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkYzk3N2Q4NS1lNWE2LTRlZTAtYjVhOS00NjI4ZmZjYTM0MWMiLCJhdXRoX3RpbWUiOiIxNjA3Mjk3NzE0IiwiRnVsbE5hbWUiOiJzZXBpZGVoIGZhbGFoIiwiUm9sZSI6IkFkbWluIiwiQ2xpZW50SUQiOiIxREVFRTI0MS00OThELTQxNjgtODJGQy1GMTgyRTMwNERFQTAiLCJQbGFuIjoiRnJlZSIsImlkcCI6ImxvY2FsIiwiYW1yIjoicHdkIiwiZXhwIjoxNjA3MzA0OTIwLCJpc3MiOiJQcmVzdG9BUEkiLCJhdWQiOiJQcmVzdG9BUElDb250ZXN0QnlTZXBpZGVoIn0.ehO1ChtEpavd3BjXW2TcBZp8hlxwHQvh6sLu80k_LP4";
//register user
export const register = async ({ email, password }) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      //   Authorization: `Bearer ${token}`,
    },
  };

  const body = JSON.stringify({ email, password });
  console.log("body: ", body);

  try {
    const res = await axios.post(
      "https://sepideh.prestoapi.com/api/register",
      body,
      config
    );
    console.log("res: ", res.data);
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;
  }
};
