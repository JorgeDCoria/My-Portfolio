import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
export default function ParticlesComponent() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      className="h-full"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
          zIndex: 0,
        },
        background: {
          color: {
            value: "#0d2c3f",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 180,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1.5,
          },
          collisions: {
            enable: true,
          },
          // move: {
          //   directions: "none",
          //   enable: true,
          //   outModes: {
          //     default: "bounce",
          //   },
          //   random: false,
          //   speed: 1,
          //   straight: true,
          // },
          number: {
            density: {
              enable: true,
              area: 700,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: true,
              speed: 10,
              size_min: 10,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 1,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            // attract: {
            //   enable: true,
            //   rotateX: 100,
            //   rotateY: 100,
            // },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
