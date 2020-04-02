import React from "react";

export default class AnalitycsDev extends React.Component<any,any>
{
    render(){
        return (
            <div className={`front-end-container show-up ${this.props.fadeOut?"fade-out":""}`}>
                <div className="flex-row-fe">

                <div className="flex-column-fe">
                <h1 className="main-title-fe">Analitycs</h1>
                <h4 className="main-text-fe">The interface and functionality of applications is really important, but the analitycs of the interaction 
                of the users whithin your app is key for the business decision-making, and therefore, a key factor for succeed.
                </h4>
                </div>

                <div className="flex-column-fe background-analitycs-design">

                </div>
                </div>
        

              
            </div>
        )
    }
}