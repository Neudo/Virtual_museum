import {DoubleSide} from "three";
import {useTexture} from "@react-three/drei";

export default function Artwork (){
    const texture = useTexture('https://www.artic.edu/iiif/2/a6d85bbc-82a7-d13c-36bb-a73ac98d6b8c/full/403,/0/default.jpg')

    return  <>
        <mesh position-z={-5} position-y={ 10 } scale={10} >
            <planeBufferGeometry/>
            <meshStandardMaterial
                map={texture}
                side={DoubleSide}
            />
        </mesh>
        <mesh position-z={-5} position-y={ 10 } position-x={10} rotation-y={0} scale={10} >
            <planeBufferGeometry/>
            <meshStandardMaterial
                side={DoubleSide}
                color="blue"
            />
        </mesh>
    </>
}