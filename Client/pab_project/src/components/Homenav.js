import './pab.css'

const Homenav=()=>{
    return(
    <div>
              <div style={{backgroundColor: "#f8f8f8"}}>
                   <div className="container-fluid text-center">
                        <div className="row m-3 mb-4">
                            <div className="col-12 m-3">
                                <h3 style={{color:"#2c0264;"}}><b>Find your right candidate here</b></h3>
                                <label for="">5 lakh+ candidates for you to explore now</label>
                    <div className="row d-flex flex-row justify-content-center mt-4">
                                <div className="col-md-4 pr-1">
                                    <div className="input-group mb-3 shadow" style={{height: "50px;"}}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" style={{backgroundColor: "white"}}>
                                                <i className="fa-solid fa-magnifying-glass py-2"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" aria-label="" placeholder="Jobs Title,Skills or Company" style={{borderRight:"0",borderLeft:"0"}}/>
                                        <div className="input-group-append">
                                            <span className="input-group-text" style={{backgroundColor: "white"}}>
                                                <i className="fa-solid fa-caret-down py-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 pl-1 pr-1">
                                    <div className="input-group mb-3 shadow" style={{height: "50px"}}>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" style={{backgroundColor: "white"}}>
                                                <i className="fas fa-thin fa-location-dot py-2"></i>
                                            </span>
                                        </div>
                                            <input type="text" className="form-control" aria-label="" placeholder="City,Province or Region" style={{borderRight:"0",borderLeft:"0"}}/>
                                        <div className="input-group-append">
                                            <span className="input-group-text" style={{backgroundColor: "white"}}>
                                                <i className="fa-solid fa-caret-down py-2"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                        
                    </div>
                        <button className="btn btn-light px-4 my-4 background-bottom">Search</button>
                </div>
                
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-11 offset-md-1">
                <h5><b>Tops Searches</b></h5>
            </div>
            <div className="col-md-10 offset-md-1 d-flex flex-row justify-content-center shadow">
                <div className="row card-body">
                    <div className="col-md-10">
                        <button className="btn btn-light mx-2 mt-3"> Banking</button>
                        <button className="btn btn-light mx-2 mt-3"> Sales</button>
                        <button className="btn btn-light mx-2 mt-3"> Hr Executive</button>
                        <button className="btn btn-light mx-2 mt-3"> Manual Testing</button>
                        <button className="btn btn-light mx-2 mt-3"> IT</button>
                        <button className="btn btn-light mx-2 mt-3"> Deveops Engineer</button>
                        <button className="btn btn-light mx-2 mt-3"> Digital Marketing</button>
                        <button className="btn btn-light mx-2 mt-3"> Grapic Designing</button>
                        <button className="btn btn-light mx-2 mt-3"> Data Analyst</button>
                        <button className="btn btn-light mx-2 mt-3"> Accounting</button>
                        <button className="btn btn-light mx-2 mt-3"> Software Engineer</button>
                        <button className="btn btn-light mx-2 mt-3"> Fresher</button>
    
    
                    </div>
                    <div className="col-md-12 " style={{textAlign:"right"}}>
                        <label>more...</label>
                    </div>
                    
                </div>                         
           </div>           
        </div>
    </div>

 <div className="background-color">
    <div className="container mt-4 " >    
        <div className="row" >
            <div className="col-md-11 offset-md-1 py-3">
                <h5><b>Search By Location</b></h5>
            </div>
            <div className="col-md-10 offset-md-1">
                <div className="row ">        
                        <div className="col-md-2">
                            <button className="btn btn-light white btn-block shadow-sm ">
                                <img src={"https://static.thenounproject.com/png/5301313-200.png"} alt="img" className="img-fluid" style={{width:"25px"}}/>Hyderabad</button>
                        </div>
                        <div className="col-md-2">
                            <button class="btn btn-light white btn-block shadow-sm ">
                                <img src={"https://static.thenounproject.com/png/5301313-200.png"} alt="img" className="img-fluid" style={{width:"25px"}}/>Mumbai</button>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-light white btn-block shadow-sm ">
                                <img src={"https://static.thenounproject.com/png/5301313-200.png"} alt="img" className="img-fluid" style={{width:"25px"}}/>Chennai</button>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-light white btn-block shadow-sm ">
                                <img src={"https://static.thenounproject.com/png/5301313-200.png"} alt="img" className="img-fluid" style={{width:"25px"}}/>Pune</button>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-light white btn-block shadow-sm ">
                                <img src={"https://static.thenounproject.com/png/5301313-200.png"} alt="img" className="img-fluid" style={{width:"25px"}}/>Bengaluru</button>
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-light white btn-block shadow-sm ">
                                <img src={"https://static.thenounproject.com/png/5301313-200.png"} alt="img" className="img-fluid" style={{width:"25px"}}/>Delhi</button>
                        </div>
                       
                    
                    <div className="col-md-12 pt-4" style={{textAlign:"right"}}>
                         <label for="">View All Functional Cities...</label>
                    </div>
                </div>
            </div>                
        </div>
    </div>



    <div className="container mt-4">
            <div className="row">
                <div className="col-md-11 offset-md-1">
                    <h5><b>Top Companies By Category</b></h5>
                </div>                
                <div className="col-md-10 offset-md-1">
                    <div className="row">
                        <div className="col card shadow pr-0 mr-2">
                            <label><b>MNC'S <i class="fas fa-regular fa-angle-right"></i></b></label>
                            <small>1.5k job are available</small>
                            <div className="mt-3">
                                <img alt="img" className="img-fluid" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/1200px-Wipro_Primary_Logo_Color_RGB.svg.png"}
                                    style={{height:"40px", width: "40px;"}}/>
                                <img className="img-fluid" src={"https://logowik.com/content/uploads/images/fedex-icon3211.jpg"}
                                    style={{height: "50px", width: "50px;"}}/>
                                <img className="img-fluid" src={"https://pbs.twimg.com/profile_images/1133750031847108608/Hin1Z-7D_400x400.png"}
                                    style={{height: "40px", width: "40px;"}}/>
                                <img className="img-fluid" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQesjEVwtXATKjbYul6F5f6URCru9HZQg7fKhNsgZNG9n9DbqCG9IPqm5RqUdY1OjuKj0U&usqp=CAU"}
                                    style={{height: "50px", width: "50px;"}}/>
                            </div>
                        </div>
                        <div className="col card shadow pr-0 mr-2">
                            <label><b>Banking & Finance <i class="fas fa-regular fa-angle-right"></i></b></label>
                            <small>1.5k job are available</small>
                            <div class="mt-3">
                                <img src={"https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-emblem.png"}
                                style={{height:"40px", width: "40px;"}}/>
                            <img src="https://companieslogo.com/img/orig/IBN-af38b5c0.png?t=1648383607"
                                style={{height: "40px", width: "40px;"}}/>
                            <img src="https://4.bp.blogspot.com/-P5BiFJK-kL0/VKGZKc9UkTI/AAAAAAAAH7Y/jOwrZaTRRU0/s1600/Logo%2BAxis_Bank.png"
                                style={{height: "40px", width: "40px;"}}/>
                            <img src={"https://4.bp.blogspot.com/-P5BiFJK-kL0/VKGZKc9UkTI/AAAAAAAAH7Y/jOwrZaTRRU0/s1600/Logo%2BAxis_Bank.png"}
                                style={{height: "40px", width: "40px"}} />
                            </div>
                        </div>
                        <div className="col card shadow pr-0 mr-2">
                            <label><b>FMCG % Retail <i class="fas fa-regular fa-angle-right"></i></b></label>
                            <small>1.5k job are available</small>
                            <div className="mt-3">
                                    <img src={"https://cdn.sanity.io/images/92ui5egz/production/7c1c60e9afaaaa3cce61e5101717796d21b7f914-1426x1080.svg?rect=0,141,1426,799&w=150&h=84&fit=crop&auto=format"}
                                        style={{height: "30px", width: "30px"}}/>
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-83jYAyebreEieHEhxRIwPgbqfTf1Ck4Bod_7Yk2UHSMyPXUEg7lnN4IPA7MFHKncPY&usqp=CAU"}
                                        style={{height: "30px", width: "30px;"}}/>
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2rdzxfqrwS2HeJ_8b6tYan2ym3-vBCwq5NdqszPJ9g&s"}
                                        style={{height: "30px", width: "30px"}}/>
                                    <img src={"https://companieslogo.com/img/orig/ITC.NS-3f25b36d.png?t=1593960669"}
                                        style={{height: "30px", width: "30px;"}}/>
                            </div>
                        </div>
                        <div className="col card shadow">
                            <label><b>Heathcare <i class="fas fa-regular fa-angle-right"></i></b></label>
                            <small>1.5k job are available</small>
                            <div className="mt-3">
                                <img src={"https://www.pngitem.com/pimgs/m/574-5741795_apollo-hospitals-logo-png-apollo-hospital-transparent-png.png"}
                                    style={{height: "30px", width: "30px"}}/>
                                <img src={"https://upload.wikimedia.org/wikipedia/commons/a/a6/KIMS_Main_Logo_Col-01.jpg"}
                                    style={{height: "30px", width: "30px"}}/>
                                <img src={"https://pbs.twimg.com/profile_images/1133750031847108608/Hin1Z-7D_400x400.png"}
                                    style={{height: "30px", width: "30px"}}/>
                                <img src={"https://m.economictimes.com/thumb/msid-78141430,width-1200,height-900,resizemode-4,imgsize-38969/drreddy.jpg"}
                                    style={{height: "30px", width: "30px"}}/>
                            </div>
                        </div>
                    </div>
                    
                        
                        <div className="col-md-12 mt-3 pb-3 " style={{textAlign:"right"}}>
                            <label for=""><i className="fa-solid fa-arrow-right"></i>View All Category</label>

                        </div>
                    </div>
                </div>
            </div>
    </div>
    
<div className="container mt-4">
    <div className="row">
        <div className="col-md-11 offset-md-1">
            <img src={"https://barn2.com/wp-content/uploads/2019/09/sell-fonts-e1569490133184-820x340.jpg"} alt="img" className="img-fluid" style={{height:"200px",width:"930px"}}/>
        </div>
        <div className="col-md-11 offset-md-1 mt-4 mb-3">
            <h5><b>Featured JObs By Companies</b></h5>
        </div>
        <div className="col-md-10 offset-md-1" style={{backgroundColor: "#f8f8f8",borderRadius: "10px;"}}>
            <marquee  direction={"left"} height={"90px"} id="companyImg">
                
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Harman_International_logo.svg/1200px-Harman_International_logo.svg.png"} className="img-fluid"/>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Genpact_logo.svg/800px-Genpact_logo.svg.png"} className="img-fluid"/>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1024px-Tata_Consultancy_Services_Logo.svg.png"} className="img-fluid" />
                <img src={"https://www.datanami.com/wp-content/uploads/2023/05/Cognizant.png"} className="img-fluid"  />
                <img src={"https://www.drupal.org/files/Capgemini_Logo_2COL_RGB.png"} className="img-fluid" />
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png"} className="img-fluid" />
                <img src={"https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen-1920x706.jpg"} className="img-fluid"/>
                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"} className="img-fluid" />
                
            </marquee>
        </div>
        <div className="col-md-11 mt-3" style={{textAlign:"right"}}>
            <label for=""><i className="fa-solid fa-arrow-right"></i>View All Category</label>

        </div>

    </div>
</div>
<div className="background-color">     
<div className="container">
    <div className="row" >
        <div className="col-md-10 offset-md-1 ">
            <h5><b>Browse Jobs By Designation</b></h5>
        </div> 
    <div className="col-md-10 offset-md-1 ">
        <div className="row">
            <div className="col">
                <button className="btn btn-light white shadow-sm px-2">ABAP Consultent</button>
            </div>
            <div class="col">
                <button className="btn btn-light white shadow-sm px-3">BPO Executive</button>
            </div>
            <div class="col">
                <button className="btn btn-light white shadow-sm px-5">Chef</button>
            </div>
            <div class="col">
                <button className="btn btn-light white shadow-sm px-3">BPO Executive</button>
            </div>
            <div class="col">
                <button className="btn btn-light white shadow-sm px-5">Chef</button>
            </div>
        </div>
        <div className="row mt-3">
            <div class="col">
                <button className="btn btn-light white shadow-sm px-2">ABAP Consultent</button>
            </div>
            <div className="col">
                <button className="btn btn-light white shadow-sm px-3">BPO Executive</button>
            </div>
            <div className="col">
                <button className="btn btn-light white shadow-sm px-5">Chef</button>
            </div>
            <div className="col">
                <button className="btn btn-light white shadow-sm px-3">BPO Executive</button>
            </div>
            <div className="col">
                <button className="btn btn-light white shadow-sm px-5">Chef</button>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col">
                <button className="btn btn-light white shadow-sm px-5">Editor</button>
            </div>
            <div className="col">
                <button className="btn btn-light white shadow-sm">Finance Manager</button>
            </div>
            <div className="col">
                <button className="btn btn-light white shadow-sm">Game Designer</button>
            </div>
            <div className="col">
                <button className="btn btn-light white shadow-sm px-4">Hr Assistent</button>
            </div>
            <div className="col">
                <button className="btn btn-light white shadow-sm">Industrial Engineer</button>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col">
                <button className="btn btn-light white shadow-sm px-5">Editor</button>
            </div>
            <div className="col">
                <button className="btn btn-light white shadow-sm">Finance Manager</button>
            </div>
            <div className="col">
                <button className="btn btn-light white shadow-sm">Game Designer</button>
            </div>
            <div className="col">
                <button className="btn btn-light white shadow-sm px-4">Hr Assistent</button>
            </div>
            <div className="col">
                <button className="btn btn-light white shadow-sm">Industrial Engineer</button>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-11 offset-md-1" style={{textAlign:"right"}}>
                <p className="ViewAllCategory1"><i class="fa-solid fa-arrow-right"></i> View All Category</p>

            </div>
        </div>
    </div>                  
 </div>
</div>
</div>

<div className="container mt-3 mb-5">
        <div className="col-md-12 text-center">
            <img style={{height:"200px",
            width: "930px"}} src={"https://img.freepik.com/premium-vector/flat-design-find-new-work-space-freelancer-landing-page_106954-467.jpg?w=826"} alt="img" className="img-fluid"/>
        </div>
    </div>

    <div className="container">
        <div className="col-md-10 offset-md-1">
            <div className="row mb-5 py-4" style={{backgroundColor: "rgb(21, 21, 51)",borderRadius: "15px;"}}>
                <div className="col-md-7 text-center">
                    <h6 style={{color: "white"}}>Find Better & Faster with Pab Jobs Service Call:1800 833
                        944 Now</h6>
                </div>
                <div className="col-md-3 d-flex flex-row justify-content-end m-auto" style={{paddingRight:"0px"}}>
                   <input type="text"className="form-control" placeholder="Enter Your Mobile Number" style={{height:"30px"}}/>
                </div>
                <div className="col-md-2 m-auto" style={{paddingLeft:"0px"}}>
                    <button className="btn btn-warning" style={{height: "30px",color:"white"}}>Get Call Back</button>
                </div>  
                  
                </div>
            </div>
        </div>
    </div>
    )
}

export default Homenav;