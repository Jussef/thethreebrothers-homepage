import React, { Component } from "react";
import Box from "@mui/material/Box";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import "./Timeline.css";
import img1 from "../img/img01.jpg";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

export class Timeline extends Component {
  render() {
    return (
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
            <span style={{ fontSize: "30px" }}>Prueba haciendo scroll 😀 🔻</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={batch(Fade(), ZoomInScrollOut)}>
            <span style={{ fontSize: "40px" }}>La Historia empieza en 1997</span>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={FadeUp}>
            <img id="imagen1" src={img1} alt="1" />
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <span style={{ fontSize: "40px" }}>
              <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
              <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>- I'm Dante Chun -<Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
              <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
            </span>
          </div>
        </ScrollPage>
        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky())}>
            <span style={{ fontSize: "40px" }}>Done</span>
            <br />
            <span style={{ fontSize: "30px" }}>There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation</span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    );
  }
}

export default Timeline;
