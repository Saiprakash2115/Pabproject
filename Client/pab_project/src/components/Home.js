import './pab.css'
import googlelogo from './googlelogo.png'
import jobsearchingimg from './jobsearchingimg.avif'
import { Link } from 'react-router-dom'

const Home=()=>{
    return(
        <div>
            <div className="container-fluid p-5 background-color">
               <div className="row">
                   <div className="col-md-7 card col-lg-6 col-sm-12 col-xs-12 p-3 offset-md-1">
                        <div className="row">
                        <div className='col-md-12 text-center'>                        
                        <h2>Login</h2>
                        <small style={{color:"#2c0264"}}>It only takes a couple of minutes to get started!
                        </small>
                        </div>
                            <div className='col-md-12'>
                      
                                <label style={{float:"left"}} ><b>Email ID</b></label>
                                <input type="text"className="form-control" placeholder="Enter your Email ID"/>
                                <label style={{float:"left"}}><b>Password</b></label>
                                    <div className="input-group mb-3">
                                        
                                        <input type="text" className="form-control" aria-label="" placeholder="Enter your Password" style={{borderRight:"0"}}/>
                                        <div className="input-group-append">
                                            <span className="input-group-text eyeicon">
                                            <i className="fa-regular fa-eye-slash"></i>
                                            </span>
                                        </div>
                                    </div>
                                <label className="forgetpwd">Forget Password?</label><br/>
                            </div>
                            <div className='col-md-12'>
                                <button className="btn btn-block btn-light w-100 background-bottom"><b>Login</b></button>
                            </div>
                                
                            <div className="col-md-12 text-center">
                                        <p className="loginotp" ><b>Login via OTP</b></p>
                                        <button className="btn btn-light p-2 shadow-sm" style={{borderRadius: "10px",backgroundColor:"white"}} ><img src={googlelogo} alt="img" className="img-fluid" style={{width:"25px",height:"25px"}}/>Sign in with Google</button>
                            </div>      
                        
                                                     
                            <div className="col-sm-12 col-xs-12 d-block d-md-none text-center pt-2" >
                                <Link  className="btn btn-light registerBtn" to="/Signupform"  >Register for Free</Link>
                            </div>
                        </div>
                        
                    </div>
                    
                        <div className="col-md-4 d-none d-sm-block d-xs-block" style={{marginLeft:"30px"}}>
                            <img id="jobimg" src={jobsearchingimg} alt="img" className="img-fluid"/>
                            <div style={{padding:"10px",fontSize: "15px",color:"#2c0264",textAlign:"left"}}>
                            <small><i className="fa-sharp fa-solid fa-circle-check"></i> One click apply using pabjobs profile.</small><br/>
                            <small><i className="fa-sharp fa-solid fa-circle-check"></i> Get relevant job recommendations.</small><br/>
                            <small><i className="fa-sharp fa-solid fa-circle-check"></i> Showcase profile to top companies and consultants.</small><br/>
                            <small><i className="fa-sharp fa-solid fa-circle-check"></i> Know application status on applied jobs.</small>
                        
                            <Link className="btn btn-light registerBtn mt-4" to="/Signupform">Register for Free</Link>
                        </div>
                </div>
           </div>
       </div>
    </div>    
   

    )
}
export default Home;