import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Parallax = React.memo(({ theme }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => {
    const color = theme === "light" ? "#000000" : "#ffffff";
    return {
      fpsLimit: 60,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
            parallax: {
              enable: true,
              force: 60,
              smooth: 10,
            },
          },
          resize: {
            enable: true,
          },
        },
        modes: {
          grab: {
            distance: 400,
            links: {
              opacity: 1,
            },
          },
          push: {
            quantity: 2,
          },
        },
      },
      particles: {
        color: {
          value: color,
        },
        links: {
          enable: true,
          distance: 150,
          color: {
            value: color,
          },
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          outModes: {
            default: "out",
          },
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: {
            min: 0.1,
            max: 0.5,
          },
          animation: {
            enable: true,
            speed: 3,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: {
            min: 1,
            max: 5,
          },
          animation: {
            enable: true,
            speed: 20,
          },
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    };
  }, [theme]);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
});

export default Parallax;
