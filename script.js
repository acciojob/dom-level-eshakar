//your JS code here. If required.
window.onload = function() {
    
    const targetElement = document.getElementById("level");
    
   
    if (!targetElement) {
        alert("Element with id 'level' not found");
        return;
    }
    
   
    let level = 0;
    
    
    let currentElement = targetElement;

	while (currentElement) {

		level++;

		currentElement = currentElement.parentElement;
	}

	alert("The level of the element is: " + level);

}




	