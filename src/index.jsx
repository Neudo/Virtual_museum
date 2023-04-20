import './reset.css'
import './style.css'
import ReactDOM from 'react-dom/client'
import {Canvas, useThree} from '@react-three/fiber'
import Experience from './Experience.jsx'
import {StrictMode} from "react";
import {useControls} from "leva";

const root = ReactDOM.createRoot(document.querySelector('#root'))

function Camera() {
    const { cameraFov, cameraNear, cameraFar, cameraPos} = useControls('Camera', {
        cameraPos: { value: [ -5, 4, 23] },
        cameraFov: {value: 90 },
        cameraNear: {value: 1 },
        cameraFar: {value: 100 },
    });

    const camera = useThree(state => state.camera)
    camera.position.set(cameraPos[0], cameraPos[1], cameraPos[2]);
    camera.fov = cameraFov;
    camera.near = cameraNear;
    camera.far = cameraFar;
    camera.updateProjectionMatrix();
}


root.render(

    <StrictMode>
        <Canvas
        shadows>
            <Camera/>
            <Experience />
        </Canvas>
    </StrictMode>
)