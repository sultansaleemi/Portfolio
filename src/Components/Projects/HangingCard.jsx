import { useEffect, useRef } from "react";
import gsap from "gsap";
import Rope from "./Rope";

const HangingCard = ({ project, index, onOpen }) => {
  const hangerRef = useRef(null);
  const ropeRef = useRef(null);
  const cardRef = useRef(null);

  /* ================= ANIMATION ================= */
  const rotationSetter = useRef(null);
  const ropeScaleSetter = useRef(null);
  const swingTl = useRef(null);
  const cachedRect = useRef(null);

  useEffect(() => {
    if (!hangerRef.current || !ropeRef.current || !cardRef.current) return;

    gsap.set([hangerRef.current, ropeRef.current, cardRef.current], {
      transformOrigin: "top center",
      force3D: true,
    });

    gsap.set(hangerRef.current, { y: -320, rotation: 0 });
    gsap.set(ropeRef.current, { scaleY: 0.5 });
    gsap.set(cardRef.current, { y: -80 });

    rotationSetter.current = gsap.quickSetter(hangerRef.current, "rotation", "deg");
    ropeScaleSetter.current = gsap.quickSetter(ropeRef.current, "scaleY");

    // Drop animation
    gsap.timeline({ delay: index * 0.25 })
      .to(hangerRef.current, { y: 0, duration: 0.9, ease: "power2.in" })
      .to(ropeRef.current, { scaleY: 1.45, duration: 0.28, ease: "power3.out" }, "-=0.35")
      .to(cardRef.current, { y: 0, duration: 0.35, ease: "power3.out" }, "-=0.25")
      .to(ropeRef.current, { scaleY: 0.96, duration: 0.45, ease: "power2.out" });

    // Infinite swing (single instance)
    swingTl.current = gsap.to(hangerRef.current, {
      rotation: index % 2 === 0 ? 7 : -7,
      duration: 4.2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Rope wave
    const ropeSegments = ropeRef.current.querySelectorAll(".rope-segment");
    gsap.to(ropeSegments, {
      x: "+=5",
      rotation: "+=4",
      duration: 5 + Math.random() * 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.08,
    });

    return () => {
      swingTl.current?.kill();
    };
  }, [index]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!cachedRect.current) {
        cachedRect.current = hangerRef.current.getBoundingClientRect();
      }

      const centerX = cachedRect.current.left + cachedRect.current.width / 2;
      const force = (e.clientX - centerX) / window.innerWidth;

      rotationSetter.current(force * 18);
      ropeScaleSetter.current(1 + Math.abs(force) * 0.25);
    };

    let dragging = false;

    const startDrag = () => (dragging = true);

    const endDrag = () => {
      if (!dragging) return;
      dragging = false;

      gsap.to(hangerRef.current, {
        rotation: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.4)",
      });

      gsap.to(ropeRef.current, {
        scaleY: 1.25,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
      });
    };

    const handleDragMove = (e) => {
      if (!dragging) return;
      const force = e.movementX * 0.12;
      rotationSetter.current(`+=${force}`);
      ropeScaleSetter.current(1 + Math.abs(force) * 0.1);
    };

    const cardEl = cardRef.current;

    cardEl.addEventListener("mousedown", startDrag);
    window.addEventListener("mouseup", endDrag);
    window.addEventListener("mousemove", handleDragMove);
    window.addEventListener("mousemove", handleMouseMove);

    cardEl.addEventListener("mouseenter", () => {
      swingTl.current?.pause();
      gsap.to(hangerRef.current, { rotation: 0, duration: 0.6 });
    });

    cardEl.addEventListener("mouseleave", () => {
      swingTl.current?.resume();
    });

    return () => {
      cardEl.removeEventListener("mousedown", startDrag);
      window.removeEventListener("mouseup", endDrag);
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="hanger" ref={hangerRef}>
      <Rope ref={ropeRef} />
      <div className="project-card" ref={cardRef} onClick={onOpen}>
        <div className="card-image-wrapper">
          <img src={project.image} alt={project.title} />
          <div className="card-overlay">
            <h3>{project.title}</h3>
            <button className="view-btn">View Project →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HangingCard;
