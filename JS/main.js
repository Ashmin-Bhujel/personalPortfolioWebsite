// Accessing header element
const header = document.getElementById("header");

// Adding event listener in window when DOM content is loaded
window.addEventListener("DOMContentLoaded", (event) => {
    let welcomebox = document.createElement("div");
    welcomebox.id = "welcome-box";
    
    // Adding the html code
    let welcomeContent = `<p>This Website is under developement<br>
    Thank You for your visit.<br><br>
    Note: Use landscape mode and desktop mode in mobile phones.</p>`
    
    welcomebox.innerHTML = welcomeContent;

    let show = setTimeout(() => {
        // Inserting welcomebox after header element after 3 sec
        header.insertAdjacentElement("afterend", welcomebox);

        // Removing welcomebox after 10 sec
        let remove = setTimeout(() => {
            welcomebox.remove();
        }, 10000);

    }, 3000);
});