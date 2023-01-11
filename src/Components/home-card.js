import React from "react";

function HomeCard(props) {
 const data = props.data 
 const report = props.report


    return(
        <fragment className="container">
            <div className="row">
                <div className="col">
                <div>
        {data.map((reports)=>
                        <div key={reports.id} className='card-home'>
                            <div>
                               <img src={reports.image_url} alt="avatar"/> 
                            </div>
                            <div>
                            <h3>{reports.title}</h3>
                        <p>{reports.message}</p>
                        <p>{reports.report_status}</p>
                            </div>

                        </div>
        )}
        </div>
                </div>
                <div className="col">
                <div>
            {report.map((report)=>
            <div key= {report.id}>
            <div>
                <img src={report.image_url}/>
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

        </fragment>
    )
}
export default HomeCard 