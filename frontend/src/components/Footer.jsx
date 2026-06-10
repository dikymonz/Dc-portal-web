export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg width="18" height="18" viewBox="0 0 71 55" fill="none">
              <path d="M60.1 4.9A58.6 58.6 0 0 0 45.5.7a.2.2 0 0 0-.2.1 40.8 40.8 0 0 0-1.8 3.7 54.1 54.1 0 0 0-16.2 0A37.5 37.5 0 0 0 25.5.8a.2.2 0 0 0-.2-.1A58.4 58.4 0 0 0 10.7 4.9a.2.2 0 0 0-.1.1C1.5 18.3-.9 31.3.3 44.2a.2.2 0 0 0 .1.2 58.9 58.9 0 0 0 17.7 9 .2.2 0 0 0 .2-.1 42 42 0 0 0 3.6-5.9.2.2 0 0 0-.1-.3 38.8 38.8 0 0 1-5.5-2.6.2.2 0 0 1 0-.4c.4-.3.7-.6 1.1-.8a.2.2 0 0 1 .2 0c11.5 5.3 24 5.3 35.4 0a.2.2 0 0 1 .2 0c.4.3.7.6 1.1.9a.2.2 0 0 1 0 .3 36 36 0 0 1-5.5 2.6.2.2 0 0 0-.1.3 47.1 47.1 0 0 0 3.6 5.9.2.2 0 0 0 .2.1 58.7 58.7 0 0 0 17.8-9 .2.2 0 0 0 .1-.1c1.5-15-2.5-28-10.6-39.3a.2.2 0 0 0-.1-.1ZM23.7 36.4c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2c3.6 0 6.5 3.3 6.4 7.2 0 4-2.8 7.2-6.4 7.2Zm23.7 0c-3.5 0-6.4-3.2-6.4-7.2s2.8-7.2 6.4-7.2c3.6 0 6.5 3.3 6.4 7.2 0 4-2.8 7.2-6.4 7.2Z" fill="currentColor"/>
            </svg>
            <span>ᴀᴍᴇʟ'ꜱ ꜱᴇʀᴠᴇʀ ♡ˎˊ˗</span>
          </div>
          <p>Komunitas Discord untuk semua kalangan. Seru, aman, dan aktif setiap hari.</p>
        </div>
        <div className="footer-links">
          <span className="footer-link-header">Server</span>
          <a href="#channels"># Channel</a>
          <a href="#members"># Anggota</a>
          <a href="#rules"># Peraturan</a>
        </div>
        <div className="footer-links">
          <span className="footer-link-header">Komunitas</span>
          <a href="#">Event</a>
          <a href="#">Giveaway</a>
          <a href="#">Leaderboard</a>
        </div>
        <div className="footer-join">
          <p>Belum bergabung?</p>
          <a href="https://discord.gg/u76EVYJv9f" target="_blank" className="footer-btn">Masuk Server →</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 ᴀᴍᴇʟ'ꜱ ꜱᴇʀᴠᴇʀ ♡ˎˊ˗</span>
      </div>
    </footer>
  );
}