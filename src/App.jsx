import comment_icon from "./assets/chatbubble_icon.png";
import heart_icon from "./assets/heart_icon.png";
import share_icon from "./assets/undo_icon.png";
import profile_picture from "./assets/profile3 (1).png";
import "./App.css";

function Profile() {
  return (
    <>
      <div className="main-box">
        <div className="upper">
          <img src={profile_picture} alt="profile" className="profile-img" />
        </div>
        <div className="lower">
          <h2 className="profilename">Goldae Love L. Rebucas</h2>
          <h3 className="tag">Front-end and Web Developer</h3>

          <div className="social-btns">
            {/* Facebook */}
            <svg role="img" style={{ "--accent-color": "#0866ff" }} viewBox="0 0 24 24">
              <title>Facebook</title>
              <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
            </svg>

            {/* X (Twitter) */}
            <svg role="img" style={{ "--accent-color": "#000000" }} viewBox="0 0 24 24">
              <title>X</title>
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>

            {/* Instagram */}
            <svg role="img" style={{ "--accent-color": "#ff0069" }} viewBox="0 0 24 24">
              <title>Instagram</title>
              <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839" />
            </svg>

            {/* YouTube */}
            <svg role="img" style={{ "--accent-color": "#ff0000" }} viewBox="0 0 24 24">
              <title>YouTube</title>
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>

          <div className="interact-btns">
            <button className="subscribe-btn">Subscribe</button>
            <button className="message-btn">Message</button>
          </div>

          <div className="social-rate">
            <div className="rate-item">
              <img src={heart_icon} alt="heart" /> <span>2M</span>
            </div>
            <p>|</p>
            <div className="rate-item">
              <img src={comment_icon} alt="comment" /> <span>1.3M</span>
            </div>
            <p>|</p>
            <div className="rate-item">
              <img src={share_icon} alt="share" /> <span>50k</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
