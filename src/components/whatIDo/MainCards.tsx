import React from "react";

export default class MainCards extends React.Component<any, any>
{
    render()
    {
        return(
            <div className={`flex-row show-up ${this.props.fadeOut?"fade-out":""}`}>
            <div className="flex-column" onClick={() => {this.props.setScreen(1)}}>
              <div className="skill-container">
                <span><i className="material-icons">web</i></span>
              </div>
              <h3 className="skill-title">Front-end Development</h3>
              <p className="skill-text">Development of applications on the client-side focusing in a UI & UX that stand out</p>
          
              <h3 className="skill-title">Languages</h3>
              <p className="skill-text">HML, CSS, SASS, JavaScript, React, Angular</p>
            </div>

            <div className="flex-column" onClick={() => {this.props.setScreen(2)}}>
            <div className="skill-container">
                <span><i className="material-icons">storage</i></span>
              </div>
              <h3 className="skill-title">Back-end Development</h3>
              <p className="skill-text">Aiming for the best performance server applications and infrastructure that fuel businesses</p>
             
              <h3 className="skill-title">Technologies</h3>
              <p className="skill-text">NodeJs, PHP,  GCP, AWS, Firebase</p>
            </div>

            <div className="flex-column" onClick={() => {this.props.setScreen(3)}}>
            <div className="skill-container">
                <span><i className="material-icons">bar_chart</i></span>
              </div>
              <h3 className="skill-title">Analitycs</h3>
              <p className="skill-text">The management and insights of user behavior interacting with applications, that serve crucial information for business strategy</p>
            
              <h3 className="skill-title">Tools</h3>
              <p className="skill-text">Google Analitycs</p>
            </div>
          </div>
        )
    }
}