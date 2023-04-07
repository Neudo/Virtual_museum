import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        camera={ {
            fov: 90,
            near: .01,
            far: 100,
            position: [ - 12, 3, 6 ]
        } }
    >
        <Experience />
    </Canvas>
)