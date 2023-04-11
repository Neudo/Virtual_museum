import {Box} from "@react-three/drei";
import {useControls} from "leva";

export default function Wall()
{

    //DEBUG LEVA

    const { wallSize,wallPosition, wallColor } = useControls('Wall sizes', {
        wallSize: { value: [ 22, 22, 1] },
        wallPosition: {value: [0, 10, -5.6] },
        wallColor: '#000000'
    })
    return <>
    <mesh>
        <Box
            position={wallPosition}
            args={ wallSize }
            material-color={ wallColor }
        />

    </mesh>

    </>
}