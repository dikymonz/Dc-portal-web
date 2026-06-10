import amelGif from "../assets/img/amel.gif";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-inner">

        {/* BRAND */}
        <div className="nav-brand">
          <div className="brand-icon">
            <img src={amelGif} alt="Amel" />
          </div>

          <span className="brand-name">
            ᴀᴍᴇʟ'ꜱ ꜱᴇʀᴠᴇʀ ♡ˎˊ˗
          </span>
        </div>

        {/* STATUS CAPSULE */}
        <div className="nav-actions">
          <div className="status-pill">
            <div className="dot"></div>

            <span className="status-text">
              VERSION 1.0 IS LIVE
            </span>
          </div>
        </div>

      </div>
    </nav>
  );
}