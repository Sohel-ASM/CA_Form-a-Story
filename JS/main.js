// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the names of the animals
function cleanAndCap(str) {
    if (!str) {
        return null;
    }
    let temp = str.trim();
    return temp[0].toUpperCase() + temp.substring(1);
}
