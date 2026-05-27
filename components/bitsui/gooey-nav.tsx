import { useRef, useEffect, useState, useCallback } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface GooeyNavProps {
  items: NavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
}

const GooeyNav = ({ items, animationTime = 600, particleCount = 12, particleDistances = [80, 10], particleR = 80, timeVariance = 300, colors = [1, 2, 3], initialActiveIndex = 0 }: GooeyNavProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const noise = useCallback((n: number = 1): number => n / 2 - Math.random() * n, []);

  const getXY = useCallback(
    (distance: number, pointIndex: number, totalPoints: number): [number, number] => {
      const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
      return [distance * Math.cos(angle), distance * Math.sin(angle)];
    },
    [noise],
  );

  const createParticle = useCallback(
    (i: number, t: number, d: [number, number], r: number) => {
      const rotate = noise(r / 10);
      return {
        start: getXY(d[0], particleCount - i, particleCount),
        end: getXY(d[1] + noise(7), particleCount - i, particleCount),
        time: t,
        scale: 1 + noise(0.2),
        rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
      };
    },
    [noise, getXY, particleCount],
  );

  const makeParticles = useCallback(
    (element: HTMLSpanElement) => {
      const d = particleDistances;
      const r = particleR;
      for (let i = 0; i < particleCount; i++) {
        const t = animationTime * 2 + noise(timeVariance * 2);
        const p = createParticle(i, t, d, r);

        setTimeout(() => {
          const particle = document.createElement("span");
          const point = document.createElement("span");
          particle.classList.add("particle");
          particle.style.setProperty("--start-x", `${p.start[0]}px`);
          particle.style.setProperty("--start-y", `${p.start[1]}px`);
          particle.style.setProperty("--end-x", `${p.end[0]}px`);
          particle.style.setProperty("--end-y", `${p.end[1]}px`);
          particle.style.setProperty("--time", `${p.time}ms`);
          particle.style.setProperty("--scale", `${p.scale}`);

          point.classList.add("point");
          particle.appendChild(point);
          element.appendChild(particle);

          setTimeout(() => {
            try {
              element.removeChild(particle);
            } catch {
              /* ignored */
            }
          }, t);
        }, 30);
      }
    },
    [noise, createParticle, particleDistances, particleR, animationTime, timeVariance, particleCount],
  );

  const updateEffectPosition = useCallback((element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current || !textRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();

    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };

    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    textRef.current.innerText = (element.querySelector("a") as HTMLElement)?.innerText || "";
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLLIElement>, index: number) => {
      const liEl = e.currentTarget;
      if (activeIndex === index) return;

      setActiveIndex(index);
      updateEffectPosition(liEl);

      if (textRef.current) {
        textRef.current.classList.remove("active");
        void textRef.current.offsetWidth;
        textRef.current.classList.add("active");
      }

      if (filterRef.current) {
        filterRef.current.classList.remove("active");
        void filterRef.current.offsetWidth;
        filterRef.current.classList.add("active");
        makeParticles(filterRef.current);
      }
    },
    [activeIndex, updateEffectPosition, makeParticles],
  );

  useEffect(() => {
    if (!navRef.current) return;
    const activeLi = navRef.current.querySelectorAll("li")[activeIndex];
    if (activeLi) {
      updateEffectPosition(activeLi as HTMLElement);
      textRef.current?.classList.add("active");
      filterRef.current?.classList.add("active");
    }
  }, [activeIndex, updateEffectPosition]);

  return (
    <>
      <style>
        {`
          .effect {
            position: absolute;
            opacity: 1;
            pointer-events: none;
            display: grid;
            place-items: center;
            z-index: 1;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .effect.text {
            /* Teks default mengikuti tema sistem */
            color: var(--foreground);
            font-weight: 500;
          }
          .effect.text.active {
            /* Teks saat aktif menjadi putih */
            color: white;
            z-index: 2;
          }
          .effect.filter {
            filter: blur(4px) contrast(15);
          }
          .effect.filter::after {
            content: "";
            position: absolute;
            inset: 0;
            /* Warna hijau #506232 dengan opasitas 20% (hex: 33) */
            background: #50623233; 
            backdrop-filter: blur(8px);
            border-radius: 9999px;
            transform: scale(0);
            opacity: 0;
            z-index: -1;
          }
          .effect.active::after {
            animation: pill-pop 0.4s forwards;
          }
          @keyframes pill-pop {
            to { transform: scale(1); opacity: 1; }
          }
          .particle {
            position: absolute;
            top: 50%; left: 50%;
            animation: p-move var(--time) ease-out forwards;
          }
          .point {
            display: block;
            width: 14px; height: 14px;
            background: #506232; /* Warna partikel padat agar efek gooey terlihat */
            border-radius: 50%;
            animation: p-scale var(--time) ease-out forwards;
          }
          @keyframes p-move {
            0% { transform: translate(var(--start-x), var(--start-y)); }
            100% { transform: translate(var(--end-x), var(--end-y)); }
          }
          @keyframes p-scale {
            0% { transform: scale(0); opacity: 0; }
            50% { transform: scale(var(--scale)); opacity: 1; }
            100% { transform: scale(0); opacity: 0; }
          }
        `}
      </style>

      <div className="relative" ref={containerRef}>
        <nav className="flex relative">
          <ul ref={navRef} className="flex gap-4 list-none p-0 m-0 relative z-10">
            {items.map((item, index) => (
              <li
                key={index}
                onClick={(e) => handleClick(e, index)}
                className={`relative px-6 py-2 cursor-pointer transition-colors duration-300 rounded-full
                  ${activeIndex === index ? "text-transparent" : "text-foreground/70"}`}
              >
                <a href={item.href} onClick={(e) => e.preventDefault()} className="outline-none">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Layer Efek Gooey */}
        <span className="effect filter" ref={filterRef} />
        {/* Layer Teks Putih di Atas Pill */}
        <span className="effect text" ref={textRef} />
      </div>
    </>
  );
};

export default GooeyNav;
