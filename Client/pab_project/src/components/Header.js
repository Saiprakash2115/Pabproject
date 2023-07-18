import pabjobslogo from './pabjobs-logo.png'
const Header=()=>{
    return(
        <div>
            <div className="" >
                <div className="container py-3">
                    <div className="row">
                        <div className="col-md-3 col-sm-4 col-xs-4 text-center ml-5">
                            <img src={pabjobslogo} alt="img" className="img-fluid" style={{width:"150px"}}/>
                        </div>
                        <div class="col-md-8 col-sm-4 col-xs-4 text-center m-auto">
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Header;