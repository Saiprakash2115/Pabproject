import pablogobottom from './pab bottom-logo.jpg'
import './pab.css'

const Footer=()=>{
    return(
        <div>
            <div className="container-fluid p-2 background-bottom float-left">
            <div className="row p-5">
                <div className="col-md-3 col-sm-12 col-xs-12" style={{borderBottom: "1px solid white"}}>
                    <img src={pablogobottom} alt="img" className="img-fluid" style={{borderRadius:"10px"}}/>
                    
                    <div style={{textAlign:"left"}}>
                    <p>We provide a direct access to the walk-in opportunities available on the site.Results can be filtered on work experience, venue, from location, employer type, and data range.</p>
                    <h6 className='mt-3'>Toll Free Number:</h6>
                    <span style={{padding:"10px"}}><i className="fa-solid fa-phone-flip" style={{color:" white"}}></i>&nbsp; 1800 833 9448</span>
                    </div>
                    
    
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12"  style={{borderBottom: "1px solid white",textAlign:"left"}}>
                    
                    <ul style={{listStyleType:"none"}}>
                        <h5>For Candidates</h5>
                        <li><i className="fas fa-regular fa-chevron-right" style={{color : "white"}}></i> Candidate Profile</li>
                        <li><i className="fas fa-regular fa-chevron-right" style={{color : "white"}}></i> My Resume</li>
                        <li><i className="fas fa-regular fa-chevron-right" style={{color : "white"}}></i> Applied Jobs</li>
                        <li><i className="fas fa-regular fa-chevron-right" style={{color : "white"}}></i> job Alert</li>
                        <li><i className="fas fa-regular fa-chevron-right" style={{color : "white"}}></i> Change Password</li>
    
                    </ul>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12"  style={{borderBottom: "1px solid white",textAlign:"left"}}>
                    
                    <ul style={{listStyleType:"none"}}>
                        <h5>Jobs</h5>
                        <li><i className="fas fa-regular fa-chevron-right" style={{color : "white"}}></i> All Jobs</li>
                        <li><i className="fas fa-regular fa-chevron-right" style={{color : "white"}}></i> Company Jobs</li>
                        <li><i className="fas fa-regular fa-chevron-right" style={{color : "white"}}></i> Category Jobs</li>
                        <li><i className="fas fa-regular fa-chevron-right" style={{color : "white"}}></i> Locational Jobs</li>
                        <li><i className="fas fa-regular fa-chevron-right" style={{color : "white"}}></i> Designation Jobs</li>
                        <li><i className="fas fa-regular fa-chevron-right" style={{color : "white"}}></i> Skill Jobs</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12"  style={{borderBottom: "1px solid white",textAlign:"left"}}>
                    
                    <ul style={{listStyleType:"none"}}>
                        <h5>Browse Jobs</h5>
                        <li><i className="fas fa-regular fa-chevron-right" style={{color : "white"}}></i> Companies</li>
                        <li><i className="fas fa-regular fa-chevron-right" style={{color : "white"}}></i> Browse Jobs</li>
                        <li><i className="fas fa-regular fa-chevron-right" style={{color : "white"}}></i> Jobs</li>
    
                    </ul>
                    
                    <ul style={{listStyleType:"none"}}>
                        <h5>Information</h5>
                        <li><i className="fas fa-regular fa-chevron-right" style={{color : "white"}}></i> Terms & Conditions</li>
                        <li><i className="fas fa-regular fa-chevron-right" style={{color : "white"}}></i> Privacy Policy</li>
                        <li><i className="fas fa-regular fa-chevron-right" style={{color : "white"}}></i> Fraud Alert</li>
                    </ul>
                </div>
            </div>
            <div class="row pl-5 text-center" >
                <div class="col-md-3 col-sm-12 col-xs-12" >
                    <p><small>All rights reserved<i class="fas fa-sharp fa-light fa-copyright"></i> 2022 PAB Jobs</small></p></div>
    
                    <div className="col-md-3 col-sm-12 col-xs-12">   
                    <p>Designed by <span style={{color : "blue"}}>@ Perfex Technologies</span></p></div>
                    <div className="col-md-3 col-sm-12 col-xs-12">
                    <p >
                        <i className="fa-brands fa-linkedin" style={{color : "white"}}></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter" style={{color : "white"}}></i>
                    </p>
                </div>
            </div>
        </div>   
    </div>


       
    )
}
export default Footer;