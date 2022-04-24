import React from 'react'


const CricketItem = (props) => {


    return (
        // articles.data && 
        <div>
            <div className='container'>
                <div className="card bgcolor">
                    <div className="card-body">
                        <div className="mb-3" style={{ textAlign: "center" }}>
                            <h2 className="card-title mb-3" >{props.name}</h2>
                            <p className="card-text">{props.date}</p>
                            {/* <hr /> */}
                        </div>
                        {props.score[0] && <h4 className="card-title">{props.score[0].inning} {props.score[0].r}-{props.score[0].w}
                        ({props.score[0].o})</h4>}
                        {props.score[1] && <h4 className="card-title">{props.score[1].inning} {props.score[1].r}-{props.score[1].w}
                        ({props.score[1].o})</h4>}
                        {/* <p> {articles.data.tossWinner} won toss and selected to {articles.data.tossChoice}</p> */}
                        <p className="card-text">Venue: {props.venue}</p>
                        <h2 className='mt-3' style={{ textAlign: "center" }}>{props.status == null ? "" : props.status}</h2>
                        <p style={{ textAlign: "right" }}>Remaining-Hits {props.hitsLimit - props.hitsToday}</p>
                        <button href="/" className="btn btn-primary" onClick={props.fetchBtn}>Get live score</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CricketItem