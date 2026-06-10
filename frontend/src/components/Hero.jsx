import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import TrueFocus from "../components/TrueFocus";
import VariableProximity from "../components/VariableProximity"
import TargetCursor from "../components/TargetCursor";
import SplitText from "../components/SplitText";

export default function Hero() {
  const [stats, setStats] = useState({
    members: 0,
    online: 0,
  });

  const heroRef = useRef(null);
  const blobRef = useRef(null);
  const descRef = useRef(null);
  const hasAnimated = useRef(false);

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};


  // DISCORD STATS
  useEffect(() => {
    fetch("https://discord.com/api/guilds/1230140874831298703/widget.json")
      .then((res) => res.json())
      .then((data) => {
        setStats({
          members: 49,
          online: data?.presence_count || 0,
        });
      })
      .catch(() => {
        setStats({
          members: 12400,
          online: 1284,
        });
      });
  }, []);

  // GSAP ANIMATION
  useEffect(() => {
    if (!heroRef.current || hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", {
        opacity: 0,
        y: -20,
        duration: 0.5,
      })
        .from(".hero-title", {
          opacity: 0,
          y: 50,
          duration: 0.8,
        })
        .from(".hero-desc", {
          opacity: 0,
          y: 20,
          duration: 0.5,
        }, "-=0.4")
        .from(".hero-actions a", {
          opacity: 0,
          y: 20,
          stagger: 0.15,
          duration: 0.5,
        }, "-=0.3")
        .from(".hero-stats .stat", {
          opacity: 0,
          scale: 0.8,
          stagger: 0.2,
          duration: 0.6,
        }, "-=0.2")
        .from(".hero-visual", {
          opacity: 0,
          x: 60,
          duration: 0.8,
        }, "-=0.6");

      if (blobRef.current) {
        gsap.to(blobRef.current, {
          y: 20,
          x: 15,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>

      {/* 🔥 GLOBAL CURSOR EFFECT */}
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />

      {/* BACKGROUND */}
      <div className="hero-bg-blobs">
        <div className="blob blob-2" ref={blobRef} />
      </div>

      {/* CONTENT */}
      <div className="hero-content">

        <div className="hero-badge">
          <span className="pulse-dot" />
          <span>{stats.online} online sekarang</span>
        </div>

        {/* TITLE STACK */}
        <div className="hero-title">

          <SplitText
  text="Selamat datang di..."
  className="hero-title text-2xl font-semibold text-center"
  delay={50}
  duration={1.25}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
  showCallback
/>

          <TrueFocus
            sentence="AMEL'S SERVER ♡ˎˊ˗"
            separator=" "
            blurAmount={6}
            borderColor="#5865f2"
            glowColor="rgba(88, 101, 242, 0.6)"
            animationDuration={0.6}
            pauseBetweenAnimations={1}
          />
        </div>

        {/* DESCRIPTION (VARIABLE PROXIMITY) */}
        <div ref={descRef} className="hero-desc">

          <VariableProximity
            label="Komunitas Discord terbaik untuk gaming, ngobrol santai, dan berbagi hal-hal keren."
            containerRef={descRef}
            radius={85}
            falloff="linear"
            fromFontVariationSettings="'wght' 300"
            toFontVariationSettings="'wght' 800"
          />

        </div>

        {/* BUTTONS */}
        <div className="hero-actions">
          <a
            href="https://discord.gg/u76EVYJv9f"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Bergabung Sekarang
          </a>
        </div>

        {/* STATS */}
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">
              {stats.members.toLocaleString()}
            </span>
            <span className="stat-label">Total Anggota</span>
          </div>

          <div className="stat-divider" />

          <div className="stat">
            <span className="stat-num online">
              {stats.online.toLocaleString()}
            </span>
            <span className="stat-label">Sedang Online</span>
          </div>
        </div>

      </div>

      {/* VISUAL */}
      <div className="hero-visual">
        <div className="discord-mock">

          <div className="mock-header">
            <span className="mock-dot red" />
            <span className="mock-dot yellow" />
            <span className="mock-dot green" />
            <span className="mock-title"># tempat-chat</span>
          </div>

          <div className="mock-body">

            <div className="mock-msg">
              <div className="mock-avatar" style={{ background: "#5865f2" }} />
              <div className="mock-bubble">
                <span className="mock-user">! a-mel</span>
                <p>Halo semua! Ada yang mau main bareng malam ini?</p>
              </div>
            </div>

            <div className="mock-msg">
              <div className="mock-avatar" style={{ background: "#eb459e" }} />
              <div className="mock-bubble">
                <span className="mock-user">Man</span>
                <p>Siap! Jam 8 yuk 🎮</p>
              </div>
            </div>

            <div className="mock-msg">
              <div className="mock-avatar" style={{ background: "#57f287" }} />
              <div className="mock-bubble">
                <span className="mock-user">Lilith</span>
                <p>Count me in! 🔥</p>
              </div>
            </div>

            <div className="mock-typing">
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span>3 orang mengetik...</span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}