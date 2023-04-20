import {DoubleSide} from "three";
import {Text, useTexture} from "@react-three/drei";

export default function Artwork (){
    const texture = useTexture('https://www.artic.edu/iiif/2/19ea686f-2f4a-0ea7-ed87-af9eaf046616/full/403,/0/default.jpg')

    return  <>
        <mesh castShadow position-z={-5} position-y={ 10 } scale={20} >
            <planeBufferGeometry/>
            <meshStandardMaterial
                map={texture}
                side={DoubleSide}
            />
        </mesh>
    </>
}