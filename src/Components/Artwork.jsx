import {DoubleSide} from "three";
import {Text, useTexture} from "@react-three/drei";

export default function Artwork (){
    const texture = useTexture('https://www.artic.edu/iiif/2/a6d85bbc-82a7-d13c-36bb-a73ac98d6b8c/full/403,/0/default.jpg')

    return  <>
        <mesh position-z={-5} position-y={ 10 } scale={20} >
            <planeBufferGeometry/>
            <meshStandardMaterial
                map={texture}
                side={DoubleSide}
            />
        </mesh>

        <Text
            position={[1, 7 ,1]}
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

    </>
}