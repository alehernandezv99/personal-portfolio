import React from "react"
import profilePic from "../res/images/Ale.png";


export default class MainSection extends React.Component<any, any>{
    render(){
        return (
            <div className={`main-section fade-in ${this.props.fadeOut?"fade-out":""}`}>
        

        <div className="wrapper">
        <div className="backdrop"></div>
        <div className="image-block"><img src={profilePic} width={180}></img></div>
        <h1 className="main-text">I'm <span>Alejandro Hernández</span>, Front-end & Back-end Web Developer</h1>
        <div className="next-section" onClick={() => {this.props.setScreen(1)}}>
          <p className="beat-animation">What I Do</p>
          <p ><span><i className="material-icons">expand_more</i></span></p>
        </div>
        </div>
      </div>  
        )
    }
}