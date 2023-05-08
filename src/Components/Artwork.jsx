import { DoubleSide } from 'three';
import { useTexture } from '@react-three/drei';


export default function Artwork() {
    // const texture = useTexture('');


    return (
        <>
                <mesh>
                    <planeGeometry args={[1, 1]}/>
                    <meshStandardMaterial color="white" side={DoubleSide}/>
                </mesh>
        </>
    );
}

