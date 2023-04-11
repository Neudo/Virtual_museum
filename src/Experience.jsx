import {
    Box, CameraControls, CubeCamera, Float, MeshReflectorMaterial, OrbitControls, Text, useTexture,
} from "@react-three/drei";
import {useLoader, useThree} from "@react-three/fiber";
import {DoubleSide, MeshBasicMaterial, TextureLoader} from "three";
import {button, folder, useControls} from "leva";
import Artwork from "./Components/Artwork.jsx";
import Wall from "./Components/Wall.jsx";
import {useRef} from "react";




export default function Experience()
{
    // TODO: delete
    // const texture2 = useTexture('https://www.artic.edu/iiif/2/ac4157ec-3df6-4473-8820-c42b6197404a/full/403,/0/default.jpg')

    //DEBUG LEVA

    const { textPosition } = useControls('Site name position', {
        textPosition: { value: [ 1, 2, 3] }
    })
    return <>
        <OrbitControls/>

        {/*Lights*/}
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ .5 } />

        {/*Site title*/}
            <Text
                position={ textPosition }
                color="yellow"
                wrapperClass="font"
            >
                Virtaum
                <meshNormalMaterial
                />
            </Text>

        <Artwork />

        <Wall/>


        {/*Floor*/}
        <mesh position-y={ - 5 } rotation-x={ - Math.PI * 0.5 } scale={ 50 }>
            <planeGeometry />
            <MeshReflectorMaterial
                resolution={ 1080 }
                blur={ [1000,1000]}
                mixBlur={ .5 }
                mirror={.75}
                color='white'
            />
        </mesh>



    </>
}
