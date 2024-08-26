function calculateRectangleArea(){
    //get Width of the rectangle
    const rectangleWidthInput = document.getElementById('rectangle_width');
    const rectangleWidthText = rectangleWidthInput.value;
    const Width = parseFloat(rectangleWidthText);

    //get length of the rectangle
    const rectangleLengthInput = document.getElementById('rectangle__length');
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);

    // Calculate rectangle area
    const area = Width * length;

    // Diplay rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle_area');

    rectangleAreaSpan.innerText = area;

}