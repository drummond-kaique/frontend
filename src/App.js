import React, { Component } from "react";

import Header from "./components/header";
import ComponentText from "./components/componentText";
import WorkOfArtTable from "./components/workOfArtTable";
import AutorTable from "./components/autorTable"
import AutorForm from "./components/autorForm";
import WorkOfArtForm from "./components/workOfArtForm"

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      componentText: "Obras",
      currentComponent: 1
    };
  }

  workOfArt() {
    this.setState({ componentText: "Obras", currentComponent: 1 });
  }

  autor() {
    this.setState({ componentText: "Autores", currentComponent: 2 });
  }

  workOfArtForm() {
    this.setState({ componentText: "Cadastro de Obras", currentComponent: 3 });
  }

  autorForm() {
    this.setState({
      componentText: "Cadastro de Autores",
      currentComponent: 4
    });
  }

  handleTabChange() {
    if (this.state.currentComponent === 1) {
      return <WorkOfArtTable />;
    } else if (this.state.currentComponent === 2) {
      return <AutorTable />;
    } else if (this.state.currentComponent === 3) {
      return <WorkOfArtForm />;
    } else if (this.state.currentComponent === 4) {
      return <AutorForm />;
    }
  }

  componentDidUpdate() {
    console.log(this.state.currentComponent);
  }

  render() {
    return (
      <div className="App">
        <Header
          workOfArt={this.workOfArt.bind(this)}
          autor={this.autor.bind(this)}
          workOfArtForm={this.workOfArtForm.bind(this)}
          autorForm={this.autorForm.bind(this)}
        />
        <ComponentText text={this.state.componentText} />
        {this.handleTabChange()}
      </div>
    );
  }
}
