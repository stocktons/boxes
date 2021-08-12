import React from "react";

function Box({ id, color, height, width }) {
    return (
        <div className="Box" 
             id={id} 
             style={{ backgroundColor: color, 
                      width: `${width}px`,
                      height: `${height}px`
                      }}
        >
        </div>
    )
}

export default Box;