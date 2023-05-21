import React, { useState, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import object1 from "../src/images/newBuilding.glb";
import object2 from "../src/images/table1.glb";
import object3 from "../src/images/table2.glb";
import tableState1 from "../src/images/available.glb";
import tableState2 from "../src/images/inuse.glb";
import sc1 from "../src/images/movingH.glb";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Main from "./Main";
import "./ShowInterior1.css";
const State1 = () => {
  const tableAvail = useLoader(GLTFLoader, tableState1);
  const tableInuse = useLoader(GLTFLoader, tableState2);
  const sc = useLoader(GLTFLoader, sc1);
  const [testStr, setTestStr] = useState("");

  useEffect(() => {
    axios({
      url: "/table1/1/status",
      method: "GET",
    }).then((res) => {
      setTestStr(res.data);
    });
  }, []);
  var state = testStr === 1 ? false : true;
  if (state) {
    return (
      <>
        <primitive
          object={tableAvail.scene}
          scale={2}
          position={[-8, 8.5, 3]}
          children-0-castShadow
        />
      </>
    );
  } else {
    return (
      <>
        <primitive
          object={tableInuse.scene}
          scale={2}
          position={[-8, 8.5, 3]}
          children-0-castShadow
        />

        <primitive
          object={sc.scene}
          scale={2}
          position={[-8, 6.5, 3]}
          children-0-castShadow
        />
      </>
    );
  }
};

const State2 = () => {
  const tableAvail = useLoader(GLTFLoader, tableState1);
  const tableInuse = useLoader(GLTFLoader, tableState2);
  const sc = useLoader(GLTFLoader, sc1);
  const [testStr, setTestStr] = useState("");

  useEffect(() => {
    axios({
      url: "/table2/1/status",
      method: "GET",
    }).then((res) => {
      setTestStr(res.data);
    });
  }, []);
  var state = testStr === 1 ? false : true;
  if (state) {
    return (
      <>
        <primitive
          object={tableAvail.scene}
          scale={2}
          position={[-8, 8.5, 3]}
          children-0-castShadow
        />
      </>
    );
  } else {
    return (
      <>
        <primitive
          object={tableInuse.scene}
          scale={2}
          position={[-8, 8.5, 3]}
          children-0-castShadow
        />

        <primitive
          object={sc.scene}
          scale={2}
          position={[-8, 6.5, 3]}
          children-0-castShadow
        />
      </>
    );
  }
};
const ShowInterior1 = () => {
  const store = useLoader(GLTFLoader, object1);
  const table1 = useLoader(GLTFLoader, object2);
  const table2 = useLoader(GLTFLoader, object3);
  const movePage = useNavigate();
  const reservationPage = () => {
    movePage("/Reservation");
  };

  return (
    <>
      <Main />
      <Canvas
        style={{
          width: "650px",
          height: "650px",
          position: "center",
          margin: "0 auto",
        }}
        camera={{ position: [40, 40, 40] }}
        shadows>
        <primitive
          object={store.scene}
          scale={2}
          position={[0, 0, 0]}
          children-0-castShadow
        />
        <primitive
          object={table1.scene}
          scale={4.4}
          position={[-8, 2, 3]}
          children-0-castShadow
          onClick={reservationPage}
        />
        {State1()}

        <primitive
          object={table2.scene}
          scale={4.4}
          position={[10, 2, 3]}
          children-0-castShadow
          onClick={reservationPage}
        />
        {State2()}
        <directionalLight intensity={1} />
        <ambientLight intensity={1.2} />
        <spotLight intensity={0.1} angle={0.1} penumbra={1} castShadow />
        <OrbitControls target={[0, 1, 0]} />
      </Canvas>
    </>
  );
};

export default ShowInterior1;