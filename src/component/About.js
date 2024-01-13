import React, {} from 'react'

export default function About(props) {



    let myStyle = {
        color: props.mode === 'dark'?'white': '#1e447c',
        backgroundColor: props.mode === 'dark'? '#3366af': 'white'
    }


    return (
        <div className='container my-3' >
            <h1 className='my-3'style={{color: props.mode === 'dark'?'white': '#1e447c'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Lights
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the first item's About</strong> A sleek and modern lighting fixture that not only illuminates your space with a warm glow but also serves as a stylish accent piece, seamlessly blending functionality with aesthetic appeal.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Fan
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the second item's About.</strong> This powerful and efficient cooling device is designed to circulate air throughout your room, providing a refreshing breeze on hot days. Its adjustable settings and contemporary design make it an essential addition to any living or working space.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Air Conditioner
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is the third item's About.</strong>  The ultimate solution for maintaining a comfortable climate in your surroundings. This technologically advanced air conditioning unit combines cooling prowess with energy efficiency, ensuring a cool and pleasant environment even during the hottest days of the year.
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-3'>
            </div>
        </div>
    )
}
