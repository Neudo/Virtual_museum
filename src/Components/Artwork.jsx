import {DoubleSide} from "three";
import {Text, useTexture} from "@react-three/drei";

export default function Artwork (){
    const texture = useTexture('https://www.artic.edu/iiif/2/a6d85bbc-82a7-d13c-36bb-a73ac98d6b8c/full/403,/0/default.jpg')

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