import mainImage from "../src/images/Building/room.glb";
import {OrbitControls} from "@react-three/drei";
import {Canvas, useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import "./MainImage.css";
import App from "./App";

const MainImage = () => {
    const mainStore = useLoader(GLTFLoader, mainImage);
    return (
        <>
            <App/>
            <div className="AboutUs">
                <div className="VImage">
                        <Canvas
                            style={{
                                width: "450px",
                                height: "450px",
                                position: "center",
                                margin: "0 auto",
                            }}
                            camera={{ position: [80, 80, 80] }}
                            shadows>
                            <primitive
                                object={mainStore.scene}
                                scale={2}
                                position={[0, 0, 0]}
                                children-0-castShadow
                            />
                            <directionalLight intensity={1} />
                            <ambientLight intensity={1.2} />
                            <spotLight intensity={0.1} angle={0.1} penumbra={1} castShadow />
                            <OrbitControls target={[0, 1, 0]} />
                        </Canvas>
                </div>
                <div className="explainText">
                    <p className="Inner-explain">
                        저희 시스템은 디지털 트윈 개념을 도입하여 실제 매장을 가상의 3D
                        모델링을 통해 변환하고 가보지 않아도 매장 내부를 알 수 있고
                        예약시스템을 통해 사용자들에게 더 나은 시스템을 제공합니다.
                    </p>
                </div>
            </div>
        </>
    );
};

export default MainImage;

//memo2