import React from "react";
import $ from "jquery";



interface ContactStateI {
    [key:string]:string;
    email:string;
    message:string;
}

export default class Contact extends React.Component<any, ContactStateI>
{

    constructor(props:any)
    {
        super(props);

        this.state ={
            name:"",
            email:"",
            message:""
        }
        
    }
    submit = () => {
        this.props.addToast("Sending Message!");
        var data = {
            service_id: 'gmail',
            template_id: 'personal_portfolio',
            user_id: 'user_4oGQ5d0UgsOqLXbRe9XoO',
            template_params: {
                name:this.state.name,
                email:this.state.email,
                message:this.state.message
            }
        };
        
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
          type: 'POST',
          data: JSON.stringify(data),
          contentType: 'application/json'
        }).done(()=> {
          this.props.addToast("Thank you!");

          this.setState({
              name:"",
              email:"",
              message:""
          })

        }).fail((error) =>{
          this.props.addToast("Something went wrong!");
          console.log(error);
        }); 
    }

    handleChange = (value:string,field:"name" | "email" | "message"):void => {
        this.setState({
            [field]:value
        })
    }
    render()
    {
        return (
        <div className={`contact-section fade-in ${this.props.fadeOut?"fade-out":""}`}>
        <div className="wrapper">
        <div className="section-presentation">
            <div className="circle"><i className="material-icons">fiber_manual_record</i></div>
            <div className="title"><h2>GET IN TOUCH</h2></div>
          </div>

          <div className="contact-body">

          <div className="contact-body-column" style={{flex:"50%"}}>
          <div className="form">
              <div className="flex-center">
                  <div className="form-group-legacy">
                      <label>Name</label>
                      <input 
                      type="text" 
                      className="form-control-legacy" 
                      value={this.state.name}
                      onChange={e => {
                          this.handleChange(e.currentTarget.value, "name")
                      }}
                      />
                  </div>
                  <div className="form-group-legacy">
                      <label>Email</label>
                      <input
                       type="text" 
                       className="form-control-legacy" 
                       value={this.state.email}
                       onChange={e => {
                        this.handleChange(e.currentTarget.value, "email")
                    }}
                       />
                  </div>
              </div>
          
                  <div className="form-group-legacy">
                      <label>Message</label>
                      <textarea
                       rows={6} 
                       className="textarea-control-legacy"
                        value={this.state.message}
                        onChange={e => {
                            this.handleChange(e.currentTarget.value, "message")
                        }}
                        />
                  </div>
             
              <div className="flex-center">
                  <button className="btn-legacy" type="button" onClick={() => {
                      this.submit();
                  }}>SUBMIT</button>
              </div>
          </div>
          </div>

          <div className="contact-body-column background-thankyou-design" style={{flex:"50%"}}>

          </div>

          </div>

        </div>
      </div>
        )
    }
}