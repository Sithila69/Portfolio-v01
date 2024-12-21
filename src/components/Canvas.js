import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);

    const lines = [];
    const lineCount = 50;
    const material = new THREE.LineBasicMaterial({
      color: 0x3498db,
      transparent: true,
      opacity: 0.5,
    });

    for (let i = 0; i < lineCount; i++) {
      const geometry = new THREE.BufferGeometry();
      const points = [];
      const startPoint = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      const endPoint = new THREE.Vector3(
        startPoint.x + (Math.random() - 0.5) * 2,
        startPoint.y + (Math.random() - 0.5) * 2,
        startPoint.z + (Math.random() - 0.5) * 2
      );
      points.push(startPoint);
      points.push(endPoint);
      geometry.setFromPoints(points);
      const line = new THREE.Line(geometry, material);
      lines.push({
        line: line,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.002
        ),
      });
      scene.add(line);
    }

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      lines.forEach((lineObj) => {
        lineObj.line.position.add(lineObj.velocity);

        if (Math.abs(lineObj.line.position.x) > 5) lineObj.velocity.x *= -1;
        if (Math.abs(lineObj.line.position.y) > 5) lineObj.velocity.y *= -1;
        if (Math.abs(lineObj.line.position.z) > 5) lineObj.velocity.z *= -1;

        lineObj.line.rotation.x += 0.0005;
        lineObj.line.rotation.y += 0.0005;
      });

      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      window.removeEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    };
  }, []);

  return <div id="canvas-container" ref={canvasRef}></div>;
};

export default Canvas;
