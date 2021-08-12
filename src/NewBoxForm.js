import React, { useState } from "react";

/** Form for creating a new box to add to the page.
 *
 * Has state for the height/width/background color of the box; on submission,
 * sends {height, width, backgroundColor} to fn rec'd from parent.
 *
 * BoxList -> NewBoxForm
 */

function NewBoxForm({ addBox }) {
  const initialState = { height: "", width: "", backgroundColor: "" };
  const [formData, setFormData] = useState(initialState);
  console.log(formData, "THIS IS THE FORM DATA FROM NEWBOXFORM");

  /** Send {name, quantity} to parent
   *    & clear form. */
  function handleSubmit(evt) {
    console.log(formData, "THIS IS THE FORM DATA FROM HANDLE SUBMIT");
    evt.preventDefault();
    addBox(formData);
    setFormData(initialState);
  }

  /** Update local state w/curr state of input elem */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }
  // we need the parentheses up above on line 26 
  // if you have more than one statement you need curly braces and the return
  // that's all old info. If you try to do the thing below, 
  // JS can't differentiate whether you are making a multi-line arrow function
  // or whether you actually want an object, so it breaks. 
  // To get around it, add the parentheses like the example above. 
  // 
  // This would break. Add parens: 
  //
  // const addOne = input => {
  //  name: "Tim",
  //  job: "instructor"
  // };

  /** render form */
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height:</label>
      <input
        type="number"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <label htmlFor="width">Width:</label>
      <input
        type="number"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="backgroundColor">Color:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <button>Add a new box!</button>
    </form>
  );
}

export default NewBoxForm;
