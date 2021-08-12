import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    function renderBoxes() {
        return (
            <div>
            {boxes.map(box => (
                <Box key={box.id} 
                     height={box.height} 
                     width={box.width} 
                     color={box.color} />
            ))}
            </div>
        );
    }

    function addBox(box) {
        let newBox = { ...box, id: uuid()};
        setBoxes(boxes => [...boxes, newBox]);
    }

    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    );

}

export default BoxList;

