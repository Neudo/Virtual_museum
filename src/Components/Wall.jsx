import {Box, Plane, useKTX2, useTexture} from "@react-three/drei";
import {useControls} from "leva";

export default function Wall()
{

    //DEBUG LEVA

    const { wallSize,wallPosition, wallColor } = useControls('Wall sizes', {
        wallSize: { value: [ 22, 22, 1] },
        wallPosition: {value: [0, 10, -5.6] },
        wallColor: '#000000'
    })
    // const frameTextures = useTexture({
    //     map: './textures/frame/rust_coarse_01_diff_4k.jpg',
    //     // displacementMap: './textures/frame/',
    //     aoMap: './textures/frame/rust_coarse_01_arm_4k.jpg',
    //     // roughnessMap: './textures/frame/.jpg',
    //     normalMap: './textures/frame/rust_coarse_01_nor_gl_4k.jpg',
    //     // metalnessMap: './textures/frame/.jpg'
    //
    // })

    // const frameTextures = useTexture({
    //     map: './textures/frame/MetalGoldPaint002_COL_2K_METALNESS.png',
    //     displacementMap: './textures/frame/MetalGoldPaint002_DISP_2K_METALNESS.png',
    //     aoMap: './textures/frame/MetalGoldPaint002_DISP_2K_METALNESS.png',
    //     roughnessMap: './textures/frame/MetalGoldPaint002_ROUGHNESS_2K_METALNESS.png',
    //     normalMap: './textures/frame/MetalGoldPaint002_NRM_2K_METALNESS.png',
    //     metalnessMap: './textures/frame/MetalGoldPaint002_METALNESS_2K_METALNESS.png'
    // })

    return <>


    <mesh>
        <Box castShadow
            position={wallPosition}
            args={ [22,22,.1] }
        >
            <meshStandardMaterial color={'black'}  />
        </Box>

    </mesh>

    </>
}