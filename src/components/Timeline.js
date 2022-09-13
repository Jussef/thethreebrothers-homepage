import React, { Component } from "react";
import Box from "@mui/material/Box";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import "./Timeline.css";
import P1img1 from "../img/1.png";
import P1img2 from "../img/2.png";
import P1img3 from "../img/3.png";
import P1img4 from "../img/4.png";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

export class Timeline extends Component {
  render() {
    return (
      <>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <div style={{ fontSize: "2em", width: "1200px" }}>
              <p>Hola, por favor inicia haciendo scroll</p>
              <br></br>
              <h3>⬇️</h3>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "3em" }}>Este es un texto de introducción" ✨</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <img id="foto1" src={P1img1} alt="1"/>
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <span style={{ fontSize: "40px" }}>
              - Aqui vemos otras animaciones ... -
              <Animator animation={MoveIn(-1000, 0)}>Izquierda</Animator>
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
          <Animator animation={FadeUp}>
            <img id="foto2" src={P1img2} alt="2" />
          </Animator>
        </ScrollPage>
        <ScrollPage page={7}>
          <Animator animation={batch(Sticky())}>
            <span style={{ fontSize: "4em" }}>Sticky</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={8}>
          <Animator animation={batch(Fade(),Sticky())}>
            <img id="foto4" src={P1img4} alt="2" />
          </Animator>
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
