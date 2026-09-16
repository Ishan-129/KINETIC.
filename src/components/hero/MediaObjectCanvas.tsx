import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const MediaObjectCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Check reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let animationFrameId: number;
    const scene = new THREE.Scene();

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.z = 5.2;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return; // WebGL not supported
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    // ── Lighting ──
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.DirectionalLight(0xD5A329, 2.5);
    goldKeyLight.position.set(4, 5, 4);
    scene.add(goldKeyLight);

    const rimLight = new THREE.DirectionalLight(0xC7FF3D, 1.2);
    rimLight.position.set(-5, -3, -2);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0xffffff, 1.5, 10);
    fillLight.position.set(0, 2, 3);
    scene.add(fillLight);

    // ── Kinetic Studio Media Object (Abstract Faceted Gold Polyhedron + Orbitals) ──
    const group = new THREE.Group();
    scene.add(group);

    // Outer Faceted Polyhedron Geometry
    const coreGeometry = new THREE.IcosahedronGeometry(1.45, 1);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0xD5A329),
      metalness: 0.88,
      roughness: 0.22,
      clearcoat: 0.5,
      clearcoatRoughness: 0.2,
      reflectivity: 0.9,
      flatShading: true,
    });

    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(coreMesh);

    // Architectural Wireframe Cage
    const wireGeometry = new THREE.IcosahedronGeometry(1.65, 1);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x050817),
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireMesh = new THREE.Mesh(wireGeometry, wireMaterial);
    group.add(wireMesh);

    // Floating Kinetic Rings / Orbital MT Signal Discs
    const ringGeo1 = new THREE.TorusGeometry(2.05, 0.02, 16, 64);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0xD5A329),
      transparent: true,
      opacity: 0.45,
    });
    const ringMesh1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringMesh1.rotation.x = Math.PI / 3;
    group.add(ringMesh1);

    const ringGeo2 = new THREE.TorusGeometry(2.35, 0.015, 16, 64);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x050817),
      transparent: true,
      opacity: 0.2,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.y = Math.PI / 4;
    group.add(ringMesh2);

    // ── Mouse & Scroll Reactive Physics ──
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollOffset = 0;

    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = event.clientX - rect.left;
      const clientY = event.clientY - rect.top;
      mouse.targetX = (clientX / width - 0.5) * 2;
      mouse.targetY = -(clientY / height - 0.5) * 2;
    };

    const onScroll = () => {
      scrollOffset = window.scrollY * 0.0015;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // Handle Resize
    const onResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Base rotation + mouse tilt + scroll reaction
      coreMesh.rotation.x = elapsedTime * 0.2 + mouse.y * 0.4 + scrollOffset;
      coreMesh.rotation.y = elapsedTime * 0.3 + mouse.x * 0.4;

      wireMesh.rotation.x = -elapsedTime * 0.15 + mouse.y * 0.3;
      wireMesh.rotation.y = -elapsedTime * 0.25 + mouse.x * 0.3;

      ringMesh1.rotation.z = elapsedTime * 0.35 + scrollOffset;
      ringMesh2.rotation.x = elapsedTime * 0.25 - scrollOffset * 0.5;

      group.position.x = mouse.x * 0.35;
      group.position.y = mouse.y * 0.25;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);

      // Clean disposal
      coreGeometry.dispose();
      coreMaterial.dispose();
      wireGeometry.dispose();
      wireMaterial.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative pointer-events-none select-none flex items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
