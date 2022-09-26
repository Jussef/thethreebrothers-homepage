import React, { Component } from "react";
import Box from "@mui/material/Box";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import "./Timeline.css";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const imagesP1 = importAll(require.context("../img/P1", false, /\.(png|jpe?g|svg)$/));
const imagesP2 = importAll(require.context("../img/P2", false, /\.(png|jpe?g|svg)$/));
const imagesP3 = importAll(require.context("../img/P3", false, /\.(png|jpe?g|svg)$/));

export class Timeline extends Component {
  render() {
    return (
      <>
        <ScrollContainer className="contenedor">
          <ScrollPage page={0}>
            <img id="imgP1_1" src={imagesP1["1.png"]} style={{ width: "100vw" }} />
            <div className="div1">
              <span>Conéctate al lanzamiento este próximo 26 de julio a las 14:00 (Mex)</span>
              <br />
              <span>La transmisión aparecerá minutos antes.</span>
            </div>
          </ScrollPage>
          <ScrollPage page={1}>
            {/* <Animator animation={ZoomInScrollOut}> */}
            <Animator animation={FadeUp}>
              <img id="imgP2_1" src={imagesP2["1.png"]} style={{ width: "50vw" }} />
            </Animator>
          </ScrollPage>
          <ScrollPage page={2}>
            <Animator animation={FadeUp}>
              <img id="imgP2_1" src={imagesP3["1.png"]} />
            </Animator>
          </ScrollPage>
          <ScrollPage page={3}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
              <span style={{ fontSize: "40px" }}>
                - Aqui vemos otras animaciones ... -<Animator animation={MoveIn(-1000, 0)}>Izquierda</Animator>
                <Animator animation={MoveIn(1000, 0)}>Derecha</Animator>
              </span>
            </div>
          </ScrollPage>
          <ScrollPage page={4}>
            <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
              <span style={{ fontSize: "40px" }}>Aquí mismo</span>
              <br />
              <span style={{ fontSize: "30px" }}>Seguimos con mas textos o imagenes 🤪</span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={5}>
            <Animator animation={batch(Fade(), Sticky())}>
              <span style={{ fontSize: "40px" }}>Mas tarde . . . 🥷</span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={6}>
            <Animator animation={FadeUp}>{/* <img key={images.id} id="foto2" src={images["2.png"]} /> */}</Animator>
          </ScrollPage>
          <ScrollPage page={7}>
            <Animator animation={batch(Sticky())}>
              <span style={{ fontSize: "4em" }}>Sticky</span>
            </Animator>
          </ScrollPage>
          <ScrollPage page={8}>
            <Animator animation={batch(Fade(), Sticky())}>{/* <img key={images.id} id="foto4" src={images["4.png"]} /> */}</Animator>
          </ScrollPage>
          <ScrollPage page={9}>
            <Animator animation={ZoomInScrollOut}>
              <span style={{ fontSize: "2em" }}>Y vivieron felices por siempre.</span>
              <span style={{ fontSize: "4em" }}>🧚</span>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </>
    );
  }
}

export default Timeline;
