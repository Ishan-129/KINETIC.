import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * MediaObjectCanvas — Kinetic-Dark Edition
 * ─ Near-dark wireframe sphere with emissive acid-green edges
 * ─ Outer torus ring glows acid
 * ─ Mouse-reactive rotation + scroll velocity reaction
 * ─ IntersectionObserver pauses render loop when off-screen
 * ─ Disabled on mobile (< 768px) — parent hides the div
 */
export const MediaObjectCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Disable on mobile
    if (window.innerWidth < 768) return;

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let animationFrameId: number;
    let isVisible = true;

    // ── Scene Setup ──
    const scene = new THREE.Scene();

    let width = container.clientWidth;
    let height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.z = 5.5;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    // ── Lighting ── (minimal — emissive does the heavy lifting)
    const ambientLight = new THREE.AmbientLight(0x0D1117, 2.0);
    scene.add(ambientLight);

    const acidLight = new THREE.PointLight(0xC7FF3D, 3.5, 12);
    acidLight.position.set(3, 2, 4);
    scene.add(acidLight);

    const rimLight = new THREE.PointLight(0x3B8EFF, 1.5, 8);
    rimLight.position.set(-4, -2, -3);
    scene.add(rimLight);

    // ── Core Icosahedron — dark with acid emissive ──
    const group = new THREE.Group();
    scene.add(group);

    const coreGeo = new THREE.IcosahedronGeometry(1.35, 1);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x0D1117),
      emissive: new THREE.Color(0xC7FF3D),
      emissiveIntensity: 0.08,
      metalness: 0.95,
      roughness: 0.08,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      reflectivity: 1.0,
      flatShading: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    group.add(coreMesh);

    // ── Wireframe cage — acid green ──
    const wireGeo = new THREE.IcosahedronGeometry(1.55, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0xC7FF3D),
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    group.add(wireMesh);

    // Outer wireframe — dimmer
    const wireGeo2 = new THREE.IcosahedronGeometry(1.78, 2);
    const wireMat2 = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x3B8EFF),
      wireframe: true,
      transparent: true,
      opacity: 0.04,
    });
    const wireMesh2 = new THREE.Mesh(wireGeo2, wireMat2);
    group.add(wireMesh2);

    // ── Acid torus ring ──
    const torusGeo = new THREE.TorusGeometry(2.0, 0.018, 16, 80);
    const torusMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0xC7FF3D),
      transparent: true,
      opacity: 0.35,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.rotation.x = Math.PI / 3.5;
    group.add(torusMesh);

    // Outer ring — blue tint
    const torusGeo2 = new THREE.TorusGeometry(2.4, 0.012, 16, 80);
    const torusMat2 = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x3B8EFF),
      transparent: true,
      opacity: 0.12,
    });
    const torusMesh2 = new THREE.Mesh(torusGeo2, torusMat2);
    torusMesh2.rotation.y = Math.PI / 4;
    group.add(torusMesh2);

    // ── Floating particles (acid-colored dots) ──
    const particleCount = 60;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const r = 2.8 + Math.random() * 1.2;
      particlePositions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xC7FF3D,
      size: 0.025,
      transparent: true,
      opacity: 0.5,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    // ── Mouse & scroll reactive ──
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollVelocity = 0;
    let lastScrollY = window.scrollY;

    const onMouseMove = (event: MouseEvent) => {
      mouse.targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      const dy = window.scrollY - lastScrollY;
      scrollVelocity = dy * 0.002;
      lastScrollY = window.scrollY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // ── Resize handler ──
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);

    // ── IntersectionObserver — pause render when off-screen ──
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0.01 }
    );
    observer.observe(container);

    // ── Animation loop ──
    const clock = new THREE.Clock();

    const animate = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const t = clock.getElapsedTime();

      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;
      scrollVelocity *= 0.92; // decay

      // Core rotation
      coreMesh.rotation.x = t * 0.18 + mouse.y * 0.35 + scrollVelocity * 0.8;
      coreMesh.rotation.y = t * 0.28 + mouse.x * 0.35;

      // Wireframes rotate opposite
      wireMesh.rotation.x = -t * 0.12 + mouse.y * 0.25;
      wireMesh.rotation.y = -t * 0.22 + mouse.x * 0.25;
      wireMesh2.rotation.x = t * 0.07;
      wireMesh2.rotation.y = -t * 0.10 + scrollVelocity * 0.3;

      // Rings
      torusMesh.rotation.z  = t * 0.30 + scrollVelocity * 0.5;
      torusMesh2.rotation.x = t * 0.20 - scrollVelocity * 0.3;

      // Particles slowly orbit
      particles.rotation.y = t * 0.06;
      particles.rotation.x = t * 0.03;

      // Subtle emissive pulse
      (coreMat as THREE.MeshPhysicalMaterial).emissiveIntensity =
        0.06 + Math.sin(t * 1.5) * 0.04;

      // Mouse position offset
      group.position.x = mouse.x * 0.30;
      group.position.y = mouse.y * 0.20;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);

      coreGeo.dispose(); coreMat.dispose();
      wireGeo.dispose(); wireMat.dispose();
      wireGeo2.dispose(); wireMat2.dispose();
      torusGeo.dispose(); torusMat.dispose();
      torusGeo2.dispose(); torusMat2.dispose();
      particleGeo.dispose(); particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative pointer-events-none select-none hidden md:flex items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
