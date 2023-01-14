import React from "react";
import "./home.css"

function HomeCard({data, report, handleData}) {



    return(
            <div className="home-card">
                
                <div className="home-row">
                    <div>
                    {data.map((reports)=>
                        <div key={reports.id} className='card-home' onClick={handleData}>
                            <div className="home-div">
                               <img src={reports.image_url} alt="avatar" className="home-image"/> 
                            </div>
                            <div className="home-content">
                            <h3>{reports.title}</h3>
                        <p>{reports.message}...</p>
                        <p>{reports.report_status}</p>
                            </div>

                        </div>
        )}
                    </div>

        </div>
                

                
                <div>
                <div className="home-row1">
            {report.map((report)=>
            <div key= {report.id}>
            <div>
                <img src={report.image_url} className="home-image1"/>
            </div>
            <div>
                <h4>{report.title}</h4>
                <p>{report.message}</p>
            </div>
                 </div>
            )}

        </div>
                </div>

               
            </div>

        
    )
}
export default HomeCard 