import {
    Box, Extrude, Float, MeshReflectorMaterial, OrbitControls, Text,
} from "@react-three/drei";


export default function Experience()
{
    return <>

    <OrbitControls/>
    <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
    <ambientLight intensity={ .5 } />
    <Float>
    <Text
        font="./bangers-v20-latin-regular.woff"
        position={[1, 4,1]}
        color="yellow"
        wrapperClass="font"
    >
        Virtual Museum
        <meshNormalMaterial/>
    </Text>
    </Float>

    <mesh position-x={ 2 } position-y={ 3} scale={ 1.5 }>
        <Box
            args={[3, 5]}
            material-color="black"/>
    </mesh>

    <mesh position-y={ - 1 } rotation-x={ - Math.PI * 0.5 } scale={ 10 }>
        <planeGeometry />
        <MeshReflectorMaterial
            resolution={ 1080 }
            blur={ [1000,1000]}
            mixBlur={ 1 }
            mirror={.75}
            color='yellow'
        />
    </mesh>
</>
}