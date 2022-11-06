import React, { Component } from "react";
import Model from "../assets/img/model.jpg";
import Vone from "../assets/img/v1.png";
import Vtwo from "../assets/img/v2.png";
import VThree from "../assets/img/v3.png";
import Vfour from "../assets/img/v4.png";
import Vfive from "../assets/img/v5.png";
import Vsix from "../assets/img/v6.png";
import Vseven from "../assets/img/v7.png";
import Veight from "../assets/img/v8.png";
import Vnine from "../assets/img/v9.png";

import styles from "../component/Glasses.module.css";
export default class Glasses extends Component {
  state = {
    selectGlasses: Vone,
  };
  handleChangeGlasse = (img) => {
    this.setState({
      selectGlasses: img,
    });
  };
  render() {
    return (
      <div>
        <div className={styles.title}>
          <h1>TRY GLASSES APP ONLINE</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.thum}>
            <img src={Model} alt="" />
          </div>
          <div className={styles.choise}>
            <img src={this.state.selectGlasses} alt="" />
          </div>
          <div className={styles.image}>
            <img
              onClick={() => {
                this.handleChangeGlasse(Vone);
              }}
              src={Vone}
              alt=""
            />
            <img
              onClick={() => {
                this.handleChangeGlasse(Vtwo);
              }}
              src={Vtwo}
              alt=""
            />
            <img
              onClick={() => {
                this.handleChangeGlasse(VThree);
              }}
              src={VThree}
              alt=""
            />
            <img
              onClick={() => {
                this.handleChangeGlasse(Vfour);
              }}
              src={Vfour}
              alt=""
            />
            <img
              onClick={() => {
                this.handleChangeGlasse(Vfive);
              }}
              src={Vfive}
              alt=""
            />
            <img
              onClick={() => {
                this.handleChangeGlasse(Vsix);
              }}
              src={Vsix}
              alt=""
            />
            <img
              onClick={() => {
                this.handleChangeGlasse(Vseven);
              }}
              src={Vseven}
              alt=""
            />
            <img
              onClick={() => {
                this.handleChangeGlasse(Veight);
              }}
              src={Veight}
              alt=""
            />
            <img
              onClick={() => {
                this.handleChangeGlasse(Vnine);
              }}
              src={Vnine}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
