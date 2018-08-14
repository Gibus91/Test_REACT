import React, { Component } from "react";
import {Header, Footer } from "./Layouts"
import Exercices from "./Exercices/"
export default class extends Component
{
  render(){
    return <div>
      <Header />
      <Exercices />
      <Footer />
    </div>
  }
}