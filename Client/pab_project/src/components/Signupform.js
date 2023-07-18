import './pab.css'
import { Link } from 'react-router-dom';
const Signupform=()=>{
    return(
        <div>
            <div className="container-fluid p-5 background-color">
            <div className="row ">
            <div className="col-md-6 card col-lg-6 col-sm-12 col-xs-12 p-5 offset-md-1">
                <div className="text-center">
                <h2>Create an account</h2>
                <small style={{color:"#2c0264"}}>It only takes a couple of minutes to get started!
                </small>
                </div>
            <div className="row ">
           <Link id="loginBtn" className="col-md-6 btn btn-light white" to="/Homenav"  style={{color:"rgb(205, 199, 199)"}}><b>Login</b> <i className="fa-circle-check fas float-right mt-2"></i></Link>
           <button id="signupBtn" className="col-md-6 btn btn-light white active" role="button" aria-pressed="true"><a href=""><b>Sign Up</b> <i class="fa-circle-check fas float-right mt-2"></i></a></button>
            </div>
            <div className="row">
            <div className="col-12 p-0">
                <ul className="nav nav-pills mb-3 nav-fill" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link style active" data-toggle="pill" href="#jobSeekerForm" role="tab" aria-selected="true" onclick="jobFormImgChange('jobSeekerRadio')">
                            <div className="form-check form-check-inline d-block">
                                <label className="form-check-label" for="jobSeeker">Job Seekers</label>
                                <input className="form-check-input float-right mt-2" type="radio" name="jobType" id="jobSeekerRadio" style={{accentColor:"#2c0264"}} checked/>
                            </div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link style" data-toggle="pill" href="#recruiterForm" role="tab" aria-selected="false" onclick="recruiterFormImgChange('recruiterRadio')">
                            <div className="form-check form-check-inline d-block">
                                <label className="form-check-label" for="recruiter">Recruiters</label>
                                <input className="form-check-input float-right mt-2" type="radio" name="jobType" id="recruiterRadio" style={{accentColor: " #2c0264"}}/>
                            </div>
                        </a>
                    </li>
                  
                </ul>
            </div>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="jobSeekerForm" role="tabpanel" aria-labelledby="pills-home-tab">
                    
                    <label for=""><b>Full Name</b></label>
                    <input type="text" className="form-control" placeholder="Enter your full name"/>
                    <label for=""><b>Email ID</b></label>
                    <input type="text"className="form-control" placeholder="Enter your Email ID"/>
                    <label for=""><b>Password</b></label>
                    <input type="text" className="form-control" placeholder="Minimum 6 characters"/>
                    <label for=""><b>Mobile Number</b></label><br/>
                    <div class="row">
                        <div class="col-3">
                            <select class="form-control" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <option value="+91">+91 </option>
                                <option value="+1">+1 </option>
                            </select>
                        </div>
                        <div className="col-9">
                            <input type="text" class="form-control" placeholder="Enter your mobile number"/>
                        </div>
                    </div>
                    <label for=""><b>Gender</b></label><br/>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                        <label className="form-check-label" for="inlineRadio1">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                        <label className="form-check-label" for="inlineRadio2">Female</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
                        <label className="form-check-label" for="inlineRadio3">Prefer not to say</label>
                    </div><br/>
                    <div className="form-check form-check-inline" style={{accentColor:"green"}}>
                        <input className="form-check-input" type="checkbox" checked id="inlineCheckbox1" value="option1"/>
                        <label className="form-check-label" for="inlineCheckbox1">I would like to get latest job updates on whatsapp</label>
                    </div><br/>
                    <p><small>By clicking Register, you agree to the Terms and Conditions & Privacy Policy of Pabjobs.com</small></p>
                    <button className="btn btn-light btn-block background-bottom">Register Now</button>
                    
                </div>
                <div className="tab-pane fade" id="recruiterForm" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <label for=""><b>Company Name</b></label>
                    <input type="text" class="form-control" placeholder="Enter your full company name"/>
                    <label for=""><b>Email ID</b></label>
                    <input type="text"className="form-control" placeholder="Enter your Email ID"/>
                    <label for=""><b>Password</b></label>
                    <input type="text" className="form-control"placeholder="Minimum 6 characters"/>
                    <label for=""><b>Mobile Number</b></label>
                    <div className="row">
                        <div className="col-3">
                            <select className="form-control" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <option value="+91">+91 </option>
                                <option value="+1">+1 </option>
                            </select>
                        </div>
                        <div className="col-9">
                            <input type="text" className="form-control" placeholder="Enter your mobile number" />
                        </div>
                      </div>
                      <div className="form-check form-check-inline" style={{accentColor:"green"}}>
                        <input class="form-check-input" type="checkbox" checked id="inlineCheckbox1" value="option1"/>
                        <label class="form-check-label" for="inlineCheckbox1">I would like to get latest job updates on whatsapp</label>
                    </div><br/>
                    <p><small>By clicking Register, you agree to the Terms and Conditions & Privacy Policy of Pabjobs.com</small></p>
                    <button class="RegisterBtn btn">Register Now</button>
                </div>
              </div>
        </div>
              
              
              
              </div>
              
           
            <div class="col-md-4 col-lg-4 d-none d-sm-block d-xs-block " style={{marginLeft:"30px"}}>
                <img id="jobimg" src="https://img.freepik.com/free-vector/man-search-hiring-job-online-from-laptop_1150-52728.jpg?w=826&t=st=1688450194~exp=1688450794~hmac=0b2fce7214fedde8233b57665ef43620aacaa59cc3bd5e14dad36bb4068367d7" alt="img" className="img-fluid mb-2"/>
                <div style={{padding:"10px",color:"#2c0264",textAlign:"left"}}>
                <div className='my-1'>
                <small><i className="fa-sharp fa-solid fa-circle-check"></i> Build your profile and let recruiters find you</small><br/>
                </div>
                <div className='my-2'>
                <small><i className="fa-sharp fa-solid fa-circle-check"></i> Get job postings delivered right to your email</small><br/>
                </div>
                <div className='my-1'>
                <small><i className="fa-sharp fa-solid fa-circle-check"></i> Find a job and grow your career</small>
                </div>
            </div>
            
        </div>
       
        </div>
       

    </div>
        </div>
    )
}

export default Signupform;