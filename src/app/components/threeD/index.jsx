import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import * as THREE from 'three'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { TWEEN } from "three/examples/jsm/libs/tween.module.min.js";
require('../../utils/GLTFLoader')
import Stats from 'three/examples/jsm/libs/stats.module'
import style from './index.scss'
// import landModel from "src/app/assets/models/land.glb"
// import treeModel from 'src/app/assets/models/tree.gltf'
// import bingdwendwenModel from 'src/app/assets/models/bingdwendwen.glb'
// import xuerongrongModel from 'src/app/assets/models/xuerongrong.glb'
// import flagModel from 'src/app/assets/models/flag.glb'
import skyTexture from 'src/app/assets/images/sky.jpg'
import snowTexture from 'src/app/assets/images/snow.png'
import treeTexture from 'src/app/assets/images/tree.png'
import flagTexture from 'src/app/assets/images/flag.png'

const ThreeD = () => {
    useEffect(() => {
        console.log('???');
        init()
    }, [])
    const init = () => {
        console.log('???????');
        // 新建渲染器(抗锯齿)
        const renderer = new THREE.WebGLRenderer({antialias: true})
         // 设置像素比
        renderer.setPixelRatio(window.devicePixelRatio)
        // 设置渲染器大小
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.shadowMap.enabled = true
        // 获取页面元素，插入渲染器
        let content = document.getElementById('content')
        content.appendChild(renderer.domElement)

        // 新建场景
        const scene = new THREE.Scene() 
        scene.background = new THREE.TextureLoader().load(skyTexture) // 设置场景背景（纹理+图片）
        scene.fog = new THREE.Fog(0xffffff, 10, 100) // 设置线性雾（颜色，距离相机最小距离，距离相机最大距离）
        
        // 新建相机（远景相机）参数（从下到上的角度，缩放，最近距离，最远距离）
        const camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.1, 1000 )
        camera.position.set(0, 30, 100) // 相机位置(x, y, z)
        camera.lookAt(new THREE.Vector3(0, 0, 0)) // 相机观察点
        // 新建盒模型
        const geometry = new THREE.BoxGeometry(0.001, 0.001, 0.001)
        // 设置材质（兰伯特，非发光材料）
        const material = new THREE.MeshLambertMaterial( { color: 0xdc161a } )
        // 新建网格并插入立方体及选好的材质
        const cube = new THREE.Mesh( geometry, material )
        cube.position.set(0, 0, 0)
        // 插入建好的场景中，默认（0，0，0）坐标
        scene.add( cube )
        console.log(scene);

        // // 移动相机避免和立方体重叠
        // camera.position.z = 5

        function animate () {
            // 创建动画
            requestAnimationFrame( animate )
            // 移动立方体位置
            cube.rotation.x += 0.01
            cube.rotation.y += 0.01
            // 重新渲染
            renderer.render( scene, camera )
        }
        animate()

        // 设置光源（平行光）
        let light = new THREE.DirectionalLight(0xffffff, 1) // 光源颜色
        light.intensity = 1 // 光源强度
        light.position.set(16, 16, 8) // 光源位置
        light.castShadow = true // 动态阴影
        light.target = cube // 光源定位目标
         // 阴影大小
        light.shadow.mapSize.width = 512 * 12
        light.shadow.mapSize.height = 512 * 12
        // 阴影空间观察视角
        light.shadow.camera.top = 40 
        light.shadow.camera.bottom = -40
        light.shadow.camera.left = -40
        light.shadow.camera.right = 40
  
        // 设置环境光
        let ambientLight = new THREE.AmbientLight(0xcfffff)
        ambientLight.intensity = 1
        // 场景中插入光源
        scene.add(light)
        scene.add(ambientLight) 


      const manager = new THREE.LoadingManager()

      manager.onStart = (url, loaded, total) => { }

      manager.onLoad = () => { console.log('Loading complete!') }

    //   manager.onProgress = async (url, loaded, total) => {
    //     if (Math.floor(loaded / total * 100) === 100) {
    //       _this.loadingProcessTimeout && clearTimeout(_this.loadingProcessTimeout)

    //       _this.loadingProcessTimeout = setTimeout(() => {
    //         _this.setState({ loadingProcess: Math.floor(loaded / total * 100) })
    //         Animations.animateCamera(camera, controls, { x: 0, y: -1, z: 20 }, { x: 0, y: 0, z: 5 }, 3600, () => { })
    //       }, 800)
    //     } else {
    //       _this.setState({ loadingProcess: Math.floor(loaded / total * 100) })
    //     }
    //   }

    //    // 添加地面
        let loader = new THREE.GLTFLoader(manager)
       loader.load('/src/app/assets/models/land.glb', (mesh) =>  {
        mesh.scene.traverse(function (child) {
            if (child.isMesh) {
                meshes.push(child)
                child.material.metalness = .1;
                child.material.roughness = .8;
                // 地面
                if (child.name === 'Mesh_2') {
                child.material.metalness = .5;
                child.receiveShadow = true;
                }
                // 围巾
                if (child.name === 'Mesh_17') {
                child.material.metalness = .2;
                child.material.roughness = .8;
                }
                // 帽子
                if (child.name === 'Mesh_17') { }
            }
         })
 
         mesh.scene.rotation.y = Math.PI / 4;
         mesh.scene.position.set(15, -20, 0);
         mesh.scene.scale.set(.9, .9, .9);
 
         land = mesh.scene;
 
         scene.add(land);
        
       })

          // 旗帜
      loader.load('src/app/assets/models/flag.glb', mesh => {
        mesh.scene.traverse(child => {
          if (child.isMesh) {
            meshes.push(child)
            child.castShadow = true;

            // 旗帜
            if (child.name === 'mesh_0001') {
              child.material.metalness = .1;
              child.material.roughness = .1;
              child.material.map = new THREE.TextureLoader().load(flagTexture);
            }

            // 旗杆
            if (child.name === '柱体') {
              child.material.metalness = .6;
              child.material.roughness = 0;
              child.material.refractionRatio = 1;
              child.material.color = new THREE.Color(0xeeeeee);
            }
          }
        })
        

        mesh.scene.rotation.y = Math.PI / 24;
        mesh.scene.position.set(2, -7, -1);
        mesh.scene.scale.set(4, 4, 4);

        // 动画
        let meshAnimation = mesh.animations[0];
        mixer = new THREE.AnimationMixer(mesh.scene);

        let animationClip = meshAnimation;
        let clipAction = mixer.clipAction(animationClip).play();

        animationClip = clipAction.getClip();
        scene.add(mesh.scene);
      });

            // 添加树
            let treeMaterial = new THREE.MeshPhysicalMaterial({
                map: new THREE.TextureLoader().load(treeTexture),
                transparent: true,
                side: THREE.DoubleSide,
                metalness: .2,
                roughness: .8,
                depthTest: true,
                depthWrite: false,
                skinning: false,
                fog: false,
                reflectivity: 0.1,
                refractionRatio: 0,
              });
        
              let treeCustomDepthMaterial = new THREE.MeshDepthMaterial({
                depthPacking: THREE.RGBADepthPacking,
                map: new THREE.TextureLoader().load(treeTexture),
                alphaTest: 0.5
              });
        
              loader.load('src/app/assets/models/tree.gltf', function (mesh) {
                mesh.scene.traverse(function (child) {
                  if (child.isMesh) {
                    meshes.push(child)
                    child.material = treeMaterial;
                    child.custromMaterial = treeCustomDepthMaterial;
                  }
                });
        
                mesh.scene.position.set(14, -9, 0);
                mesh.scene.scale.set(16, 16, 16);
                scene.add(mesh.scene);
        
                let tree2 = mesh.scene.clone();
                tree2.position.set(10, -8, -15);
                tree2.scale.set(18, 18, 18);
                scene.add(tree2)
        
                let tree3 = mesh.scene.clone();
                tree3.position.set(-18, -8, -16);
                tree3.scale.set(22, 22, 22);
                scene.add(tree3)
              });
    }
    return (
        <div id='content' >
        </div>
    )
}

export default withRouter(ThreeD)