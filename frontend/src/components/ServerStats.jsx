const channels = [
  { icon: "🎮", name: "gaming", desc: "Diskusi dan cari tim game favorit kamu", tag: "Populer", tagColor: "#5865f2" },
  { icon: "🎵", name: "musik", desc: "Share playlist, rekomen lagu, request bot musik", tag: "Aktif", tagColor: "#57f287" },
  { icon: "🎨", name: "karya", desc: "Pamerkan hasil karya seni, desain, atau koding", tag: "Kreatif", tagColor: "#eb459e" },
  { icon: "💬", name: "umum", desc: "Ngobrol bebas topik apapun bersama komunitas", tag: "Ramai", tagColor: "#fee75c" },
  { icon: "📢", name: "pengumuman", desc: "Info terbaru, update, dan event server", tag: "Penting", tagColor: "#ed4245" },
  { icon: "🤖", name: "bot-commands", desc: "Gunakan perintah bot di sini aja ya!", tag: "Utility", tagColor: "#9b59b6" },
];

export default function ServerStats() {
  return (
    <section className="channels-section" id="channels">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">Channel Server</span>
          <h2 className="section-title">Temukan Komunitasmu</h2>
        </div>

        <div className="channels-grid">
          {channels.map((ch) => (
            <div className="channel-card" key={ch.name}>
              <div className="channel-icon-wrap">{ch.icon}</div>
              <div className="channel-info">
                <div className="channel-name-row">
                  <span className="hash">#</span>
                  <span className="channel-name">{ch.name}</span>
                  <span className="channel-tag" style={{ background: ch.tagColor + "22", color: ch.tagColor, borderColor: ch.tagColor + "44" }}>
                    {ch.tag}
                  </span>
                </div>
                <p className="channel-desc">{ch.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}