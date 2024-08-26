/*
*Objective: Get base, height of a triangle. calculate the rea by using the provided formula. and the display area.
*step 1 - get base value of the triangle
* step 2 - added an d the base input field
*step 3 - use getElementBy Id to access the input field
*step 4 - get value the input field.(value is string now)
*step 5 - convert the value to a number - use parseFloat
*/
function calculateTriangleArea(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle_base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    // console.log(base);
    
    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle__height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    // console.log(height);

    const area = 0.5 * base * height;
    // console.log(area);

    // display triangle area

    const triangleAreaSpan = document.getElementById('triangle_area');

    triangleAreaSpan.innerText = area;
}