import React from "react";
import {lazy, Suspense} from "react";

const FrontEndDev = lazy(() => import("./FronEndDev"));
const MainCards = lazy(() => import("./MainCards"));
const BackEndDev = lazy(() => import("./BackEndDev"));
const AnalitycsDev = lazy(() => import("./AnalitycsDev"));

interface WhatIDoState {
  screen:number;
  fadeOut:boolean;
  back:boolean;
}

export default class WhatIDoSection extends React.Component<any, WhatIDoState>
{

    constructor(props:any)
    {
        super(props);

        this.state = {
          screen:0,
          fadeOut:false,
          back:false
        }
    }

    changeScreen = (n:number) => {
      this.setState({
        fadeOut:true
      })
  
      setTimeout(() => {
        this.setState({
          screen:n,
          fadeOut:false,
          back:n !== 0?true:false
        })
      }, 500)
      
    }
    
    

    render()
    {
        return(
            <div className={`what-i-do-section fade-in ${this.props.fadeOut?"fade-out":""}`}>
        <div className="wrapper">
          <div className="section-presentation">
            <div className="circle"><i className="material-icons">fiber_manual_record</i></div>
            <div className="title"><h2>WHAT I DO</h2></div>
          </div>
          
          <Suspense fallback={<div>Loading...</div>}>
            {this.state.screen === 0?<MainCards setScreen={this.changeScreen} fadeOut={this.state.fadeOut} />:null}
            {this.state.screen === 1?<FrontEndDev setScreen={this.changeScreen} fadeOut={this.state.fadeOut}/>:null}
            {this.state.screen === 2?<BackEndDev setScreen={this.changeScreen} fadeOut={this.state.fadeOut}/>:null}
            {this.state.screen === 3?<AnalitycsDev setScreen={this.changeScreen} fadeOut={this.state.fadeOut} />:null}
          </Suspense>
        </div>

          {this.state.back === true?
        <div className="back-to-cards" onClick={() => this.changeScreen(0)}>
                    <p><i className="material-icons">chevron_left</i> </p><p><span>Volver</span></p>
                </div>
    :null}
      </div>
        )
    }
}
