import React, { lazy } from 'react';
import {Suspense} from "react";
import './styles/css/App.css';
import { Button, Position, Toast, Toaster, Classes, Slider, Drawer, Divider ,Alert, Intent} from "@blueprintjs/core";

//Components
import SideNav from "./components/SideNav";

//Lazy components
const MainSection = lazy(() => import("./components/MainSection"))
const WhatIDoSection = lazy(() => import("./components/whatIDo/WhatIDoSection"));
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const Contact = lazy(() => import("./components/Contact"));

//interfaces
interface AppState {
  screen:number;
  fadeOut:boolean;
  toasts:Array<any>;
}

class App extends React.Component<any, AppState> {

  toaster:any;
  refHandlers:any;

  constructor(props:any)
  {
    super(props);
    this.state = {
      screen:0,
      fadeOut:false,
      toasts:[]
    }

    this.toaster = {};
        this.refHandlers = {
            toaster:(ref:any) => {this.toaster = ref},
        }
  }

  changeScreen = (n:number) => {
    this.setState({
      fadeOut:true
    })

    setTimeout(() => {
      this.setState({
        screen:n,
        fadeOut:false
      })
    }, 500)
    
  }

  addToast = (message:string) => {
    this.toaster.show({ message: message});
}


  render()
  {
    return <div>
          <Toaster className={Classes.OVERLAY} position={Position.TOP} ref={this.refHandlers.toaster}>
                    {/* "Toasted!" will appear here after clicking button. */}
                    {this.state.toasts.map(toast => <Toast action={{onClick:() => {}, text:"Resend"}} {...toast} />)}
                </Toaster>
      <SideNav 
      topElements={[{
        content:"A",
        content2:"Ale",
        onClick:() => {alert("You clicked!")}
      }]}  

      middleElements={
        [
          {
            icon:"home",
            onClick:() => {this.changeScreen(0)},
            className:this.state.screen === 0?"active":"normal"
          },
          {
            icon:"code",
            onClick:() => {this.changeScreen(1)},
            className:this.state.screen === 1?"active":"normal"
          },
          {
            icon:"visibility",
            onClick:() => {this.changeScreen(2)},
            className:this.state.screen === 2?"active":"normal"
          },
          {
            icon:"mail_outline",
            onClick:() => {this.changeScreen(3)},
            className:this.state.screen === 3?"active":"normal"
          }
        ]
      }

      bottomElements={[
        {
          icon:"",
          onClick:() => {alert("You clicked!")},
          className:"fa fa-twitter"
        },
        {
          icon:"",
          onClick:() => {alert("You clicked!")},
          className:"fa fa-instagram"
        }
      ]}
      />
    <Suspense fallback={<div>Loading...</div>}>
      {this.state.screen === 0?<MainSection addToast={this.addToast} setScreen={this.changeScreen} fadeOut={this.state.fadeOut}/>:null}
      {this.state.screen === 1?<WhatIDoSection addToast={this.addToast} fadeOut={this.state.fadeOut}/>:null}
      {this.state.screen === 2?<ProjectsSection addToast={this.addToast} fadeOut={this.state.fadeOut}/>:null}
      {this.state.screen === 3?<Contact addToast={this.addToast} fadeOut={this.state.fadeOut}/>:null}
    </Suspense>


    </div>
  }
}
export default App;
