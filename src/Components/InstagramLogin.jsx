import React, { useState } from "react";
import axios from "axios";

const InstagramLogin = () => {
  const APP_ID = "1044118127184848";
  const REDIRECT_URI = "https://www.americanyachtgroup.com/";

  const [accessToken, setAccessToken] = useState("");
  const [media, setMedia] = useState([]);

  const handleLogin = () => {
    const instagramAuthURL = `https://api.instagram.com/oauth/authorize?client_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&scope=user_profile,user_media&response_type=code`;
    window.location.href = instagramAuthURL;
  };

  const fetchMedia = async () => {
    try {
      const response = await axios.get("http://localhost:5001/get-media", {
        params: { access_token: accessToken },
      });
      setMedia(response.data.data);
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };

  const handleCodeExchange = async (code) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/exchange-token",
        { code }
      );
      const { access_token } = response.data;
      setAccessToken(access_token);
    } catch (error) {
      console.error("Error exchanging code for token:", error);
    }
  };

  // Capture the code from the redirect URL
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (code) {
      handleCodeExchange(code);
    }
  }, []);

  return (
    <div>
      {!accessToken ? (
        <button onClick={handleLogin}>Login with Instagram</button>
      ) : (
        <button onClick={fetchMedia}>Fetch Instagram Media</button>
      )}

      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
        {media.map((item) => (
          <div key={item.id} style={{ margin: "10px" }}>
            {item.media_type === "IMAGE" && (
              <img
                src={item.media_url}
                alt={item.caption}
                style={{ width: "200px" }}
              />
            )}
            {item.media_type === "VIDEO" && (
              <video controls style={{ width: "200px" }}>
                <source src={item.media_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            {item.media_type === "CAROUSEL_ALBUM" && (
              <img
                src={item.media_url}
                alt={item.caption}
                style={{ width: "200px" }}
              />
            )}
            <p>{item.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramLogin;
