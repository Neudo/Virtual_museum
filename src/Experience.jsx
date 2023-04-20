import {
    Box, CameraControls, CubeCamera, Float, MeshReflectorMaterial, OrbitControls, Plane, Text, useTexture,
} from "@react-three/drei";
import {useLoader, useThree} from "@react-three/fiber";
import {DoubleSide, MeshBasicMaterial, TextureLoader} from "three";
import {button, folder, useControls} from "leva";
import Artwork from "./Components/Artwork.jsx";
import Wall from "./Components/Wall.jsx";
import {useRef} from "react";




export default function Experience()
{

    //textures
    const groundTextures = useTexture({
        map: './textures/ground/Marble_Gray_002_basecolor.jpg',
        displacementMap: './textures/ground/Marble_Gray_002_height.png',
        aoMap: './textures/ground/Marble_Gray_002_ambientOcclusion.jpg',
        roughnessMap: './textures/ground/Marble_Gray_002_roughness.jpg',
        normalMap: './textures/ground/Marble_Gray_002_normal.jpg',

    })

    //DEBUG LEVA
    const { textPosition } = useControls('Site name position', {
        textPosition: { value: [ 7.5,1,-4.9] }
    })

    const {directionalLight} = useControls('DirectionalLight', {
        directionLight: {
            position: [1,2,3],
            intensity:[1.5]
        }
    })


    return <>
        <OrbitControls/>

        {/*Lights*/}
        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0 } />

        {/*Site title*/}
        <Text
            position={ textPosition }
            color="black"
            wrapperClass="font"
        >
            Virtaum
            <meshStandardMaterial
            />
        </Text>

        <Artwork />

        <Wall/>

        <Plane  receiveShadow position-y={ - 5 } rotation-x={ - Math.PI * 0.5 } scale={ 7 } args={[10, 10, 128,128]}  >
            {/*<meshStandardMaterial {...groundTextures}*/}
            <meshStandardMaterial color={'black'}
            />
        </Plane>

    </>
}
