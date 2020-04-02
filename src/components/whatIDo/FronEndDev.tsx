import React from "react";

export default class FrontEndDev extends React.Component<any, any>
{
    render()
    {
        return (
            <div className={`front-end-container show-up ${this.props.fadeOut?"fade-out":""}`}>
                <div className="flex-row-fe">

                <div className="flex-column-fe">
                <h1 className="main-title-fe">Front End Development</h1>
                <h4 className="main-text-fe">Building amazing user interfaces and user experiences for applications is one of the key reasons why a business 
                    succeed, So I carefully focus on that, bringing to life beautiful and modern design that really stand out
                </h4>
                </div>

                <div className="flex-column-fe background-front-end-design">

                </div>
                </div>
                <div className="flex-center-space-b">
                    <div className="react-logo"></div>
                    <div className="front-end-technologies">
                    </div>
                    <div className="angular-logo"></div>
                </div>

              
            </div>
        )
    }
}