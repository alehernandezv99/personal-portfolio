import React from "react";

interface SideNavProps {
    topElements:Array<any>;
    middleElements:Array<any>;
    bottomElements:Array<any>;
}

class SideNav extends React.Component<SideNavProps, any>{
    

    render(){
        return <div className="side-nav">
            <div className="side-nav-content">
                <ul className="special-ul">
                {this.props.topElements.map((e:any, i:number) => {
                    return <li key={i}>
                        <a onClick={(event) => {event.preventDefault(); e.onClick()}}>
                        <span className="special-letter">{e.content}</span>
                <span className="special-name">{e.content2}</span>
                        </a>
                    </li>
                })}
                </ul>
            </div>

            <div className="side-nav-content">
                <ul>
                    {this.props.middleElements.map((e:any,i:number) => {
                        return <li key={i}>
                            <a onClick={(event) => {event.preventDefault(); e.onClick()}}>
                            <span className={`${e.className}`}><i className="material-icons">{e.icon}</i></span>
                            </a>
                        </li>
                    })}
                </ul>
            </div>

            <div className="side-nav-content">
                <ul>
                {this.props.bottomElements.map((e:any, i:number) => {
                    return <li key={i}>
                        <a onClick={(event) => {event.preventDefault(); e.onClick()}} className={e.className}>
                        </a>
                    </li>
                })}
                </ul>
            </div>
        </div>
    }
}

export default SideNav;