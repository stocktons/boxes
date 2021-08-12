import React from "react";

function Box({ id, color, height, width }) {
    return (
        <div className="Box" 
             id={id} 
             style={{ backgroundColor: color, 
                      width: width,
                      height: height 
                      }}
        >
        </div>
    )
}

export default Box;