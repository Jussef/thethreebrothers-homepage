import React, { Component } from "react";
import Box from "@mui/material/Box";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import "./Timeline.css";
import img1 from "../img/kinder.png";
import img2 from "../img/primaria.png";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

export class Timeline extends Component {
  render() {
    return (
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <div style={{ fontSize: "2em", width: "1200px" }}>
              <p>♣️ La sorprendente historia de The Brothers ♠️</p>
              <br></br>
              <h3>⬇️</h3>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "3em" }}>El primer encuentro fue en el jardin de niños "Republica de Haiti" ✨</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <img id="foto1" src={img1} alt="1" />
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <span style={{ fontSize: "40px" }}>
              - Aqui es donde se encuentran por primera vez ... -
              <Animator animation={MoveIn(-1000, 0)}>Omar Ali</Animator>
              <Animator animation={MoveIn(1000, 0)}>Daniel Jussef</Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "40px" }}>Aquí mismo</span>
            <br />
            <span style={{ fontSize: "30px" }}>También encuentran a un wey llamado Felix, pero no es parte del grupo “The Brothers”.</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={5}>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "40px" }}>Mas tarde . . .</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={6}>
          <Animator animation={FadeUp}>
            <img id="foto2" src={img2} alt="2" />
          </Animator>
        </ScrollPage>
        <ScrollPage page={7}>
          <Animator animation={ZoomInScrollOut}>
            <span style={{ fontSize: "2em" }}>Emprenden un viaje a las tierras lejanas de la escuela "Comodoro Manuel Azueta Perillos", </span>
            <span style={{ fontSize: "2em" }}>aqui es donde deciden expandir el grupo The Brothers, buscando una persona de piel obscura.</span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    );
  }
}

export default Timeline;
