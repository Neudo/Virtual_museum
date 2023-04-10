import {
    Box, Float, MeshReflectorMaterial, OrbitControls, Text, useTexture,
} from "@react-three/drei";
import {useLoader} from "@react-three/fiber";
import {DoubleSide, MeshBasicMaterial, TextureLoader} from "three";
import {useControls} from "leva";
import Artwork from "./Components/Artwork.jsx";




export default function Experience()
{
    const texture2 = useTexture('https://www.artic.edu/iiif/2/ac4157ec-3df6-4473-8820-c42b6197404a/full/403,/0/default.jpg')



    //DEBUG LEVA

    const { textPosition } = useControls('Site name position', {
        textPosition: { value: [ 1, 2, 3] }
    })

    return <>

        <OrbitControls/>
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ .5 } />
            <Text
                position={ textPosition }
                color="yellow"
                wrapperClass="font"
            >
                Virtual Museum
                <meshNormalMaterial
                />
            </Text>

        <Text
            position={[1, 4,1]}
            color="yellow"
            wrapperClass="font"
        >
           Artwork Name here
            <meshNormalMaterial
            />
        </Text>

        <Text
            // font="./bangers-v20-latin-regular.woff"
            position={[1, 4,1]}
            color="yellow"
            wrapperClass="font"
        >
            Artwork informations here - 1967 - Blabla
            <meshNormalMaterial
            />
        </Text>




        <Artwork/>


        <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 50 }>
            <planeGeometry />
            <MeshReflectorMaterial
                resolution={ 1080 }
                // blur={ [1000,1000]}
                // mixBlur={ 1 }
                mirror={.75}
                color='white'
            />
        </mesh>



    </>
}
