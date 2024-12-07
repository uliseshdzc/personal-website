import { Component, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-brain-sparks-model',
  templateUrl: './brain-sparks.component.html',
  styleUrls: ['./brain-sparks.component.scss']
})
export class BrainSparksComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    this.initThreeJS();
  }

  initThreeJS(): void {
    const container = document.getElementById('brainSparksContainer');
    if (!container) {
        console.error('Container element not found');
        return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Set aspect ratio to 1
    const renderer = new THREE.WebGLRenderer({ alpha: false });
    const size = 300; // Set a fixed size for the renderer
    renderer.setSize(size, size);
    renderer.setClearColor(0xffffff, 0); // Set clear color to white
    container.appendChild(renderer.domElement);

    const brainGeometry = new THREE.SphereGeometry(1, 32, 32);
    const brainMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff }); 
    const brain = new THREE.Mesh(brainGeometry, brainMaterial);
    scene.add(brain);

    const sparks: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial, THREE.Object3DEventMap>[] = [];
    const sparkGeometry = new THREE.SphereGeometry(0.05, 16, 16);
    const sparkMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < 100; i++) {
        const spark = new THREE.Mesh(sparkGeometry, sparkMaterial);
        spark.position.set(Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1).normalize().multiplyScalar(1.5);
        sparks.push(spark);
        scene.add(spark);
    }

    function animate() {
        requestAnimationFrame(animate);
        brain.rotation.y += 0.01;
        sparks.forEach(spark => {
            spark.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.02);
        });
        renderer.render(scene, camera);
    }

    camera.position.z = 3; // Adjust camera position to fit the scene
    animate();
  }
}