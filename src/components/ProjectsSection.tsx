import React from "react";

export default class ProjectsSection extends React.Component<any,any>
{
    render()
    {
        return(
            <div className={`projects-section fade-in ${this.props.fadeOut?"fade-out":""}`}>
        <div className="wrapper">
        <div className="section-presentation">
            <div className="circle"><i className="material-icons">fiber_manual_record</i></div>
            <div className="title"><h2>PROJECTS</h2></div>
          </div>

          <div className="projects">
            <div className="project-item consinmed">
              <div className="project-backdrop">
                <h4>A customizable landing page for a hardware company. Administration panel included</h4>
                <a className="btn-project" href="http://consinmed.com/" target="_blank">Go to Site</a>
              </div>
            </div>

            <div className="project-item soflop">
              <div className="project-backdrop">
                <h4>Presentation of a Software Company. </h4>
                <a className="btn-project" href="http://soflop.com/" target="_blank">Go to Site</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
        )
    }
}