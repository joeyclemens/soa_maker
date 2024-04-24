const headerText = "I am the Helperbot 3000. How may I help you?";
const headerSpan = document.getElementById("header-text");
let i = 0;

function typeWriter() {
    if (i < headerText.length) {
        headerSpan.innerHTML += headerText.charAt(i);
        i++;
        setTimeout(typeWriter, 80); // Adjust the duration here (in milliseconds)
    } else {
        // Text has finished typing, create the buttons after a delay
        createButtons();
    }
}

function createButtons() {
    const buttonSection = document.querySelector(".button-section");

    const button1 = createButton("How do I use the SoA Maker?");
    const button2 = createButton("Explain the Exported SoA");
    const button3 = createButton("Give me the Reference SoA Template");
    const button4 = createButton("The Python Source Code");

    buttonSection.appendChild(button1);
    buttonSection.appendChild(button2);
    buttonSection.appendChild(button3);
    buttonSection.appendChild(button4);

    // Add margin between buttons
    buttonSection.querySelectorAll('.button').forEach(button => {
        button.style.marginRight = '10px'; // Adjust as needed
    });

    // Triggering reflow to enable transition
    buttonSection.offsetHeight;

    // Gradually increase opacity of buttons
    buttonSection.querySelectorAll('.button').forEach(button => {
        button.style.opacity = 1;
    });

    // Add event listeners to the buttons
    button1.addEventListener('click', () => {
        // Navigate to a new page when Button 1 is clicked
        window.location.href = 'help.html'; 
    });

    button2.addEventListener('click', () => {
        // Navigate to a new page when Button 2 is clicked
        window.location.href = 'soa_export.html'; 
    });

    button3.addEventListener('click', () => {
        // Create a function to trigger file download
        function downloadFile(url) {
            // Create an anchor element
            const link = document.createElement('a');
            // Set the href attribute to the file URL
            link.href = url;
            // Set the download attribute to specify the file name
            link.download = 'MJM_PROJ_240311_SOATEMPLATE_v1.0.xlsx'; // Replace with the desired file name
            // Append the anchor element to the document body
            document.body.appendChild(link);
            // Trigger a click event on the anchor element
            link.click();
            // Remove the anchor element from the document body
            document.body.removeChild(link);
        }
    
        // Call the downloadFile function with the URL of the file to download
        downloadFile('../files/MJM_PROJ_240311_SOATEMPLATE_v1.0.xlsx'); // Replace the URL with the URL of the desired file
    });

    button4.addEventListener('click', () => {
        // Navigate to a new page when Button 2 is clicked
        window.location.href = 'python.html'; 
    });
}

function createButton(text) {
    const button = document.createElement("button");
    button.classList.add("button");
    button.innerHTML = text;
    return button;
}

function appendAutoTypedText(text) {
    const autoTypedText = document.createElement('span');
    autoTypedText.classList.add('auto-typed-text');
    document.body.appendChild(autoTypedText);
    autoType(text, autoTypedText);
}

function autoType(text, element) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 80);
        }
    }
    type();
}

typeWriter();

// Create a new image element for the custom cursor
var customCursor = document.createElement("img");
customCursor.src = "custom-cursor.png";
customCursor.style.position = "fixed";
customCursor.style.pointerEvents = "none"; // Ensure the cursor doesn't interfere with clicks
customCursor.style.zIndex = "9999"; // Make sure the cursor appears above other elements
customCursor.style.width = "32px"; // Adjust the width and height as needed
customCursor.style.height = "32px";

// Add the custom cursor to the body
document.body.appendChild(customCursor);

// Update the position of the custom cursor to follow the mouse movement
document.addEventListener("mousemove", function(event) {
    customCursor.style.left = event.clientX + "px";
    customCursor.style.top = event.clientY + "px";
});
