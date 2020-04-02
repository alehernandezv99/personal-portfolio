import React from "react";


export default class BackEndDev extends React.Component<any, any>
{
    render(){
        return (
            <div className={`back-end-container show-up ${this.props.fadeOut?"fade-out":""}`}>
                <div className="flex-row-fe">

                <div className="flex-column-fe background-back-end-design">
             
                </div>

                <div className="flex-column-fe" style={{textAlign:"right"}}>
                <h1 className="main-title-fe">Back End Development</h1>
                <h4 className="main-text-fe">
                Develop a high performance infrastructure is always my ultimate goal, Thus each line of code is carefully written so quality can be ensured. I take care of your business logic and architecture.
                </h4>
                </div>
                </div>
                <div className="flex-center-space-b">
                 
                </div>
            </div>
        )
    }
}