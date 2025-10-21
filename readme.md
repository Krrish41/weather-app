# Weather App

A simple, clean, and responsive web application that fetches and displays the current weather for any city using the OpenWeatherMap API.

## Features

* **Current Weather:** Get up-to-the-minute weather data.
* **City Search:** Search for the weather in any city around the world.
* **Detailed Information:** Displays temperature, humidity, and wind speed.
* **Dynamic Icons:** The weather icon automatically changes to match the current conditions (e.g., Clouds, Clear, Rain, Snow).
* **Error Handling:** Provides a clear "Invalid City Name" message if the city is not found (handles 404 errors).
* **Responsive Design:** The layout is mobile-friendly and looks great on all screen sizes.

## Technologies Used

* **HTML5:** For the core structure of the application.
* **CSS3:** For styling, including the card layout, gradient background, and responsive design.
* **JavaScript (ES6+):** For the application logic, DOM manipulation, and API handling.
    * **Async/Await:** Used to handle asynchronous API calls gracefully.
    * **Fetch API:** The modern standard used to make the network request to the OpenWeatherMap API.
* **OpenWeatherMap API:** The third-party service used to source the weather data.

## How It Works

The application's logic is contained in `script.js`.

1.  **Event Listener:** A click event listener is attached to the search button. When clicked, it captures the text value from the search input box.
2.  **API Call:** It calls the `checkWeather()` function, passing the city name as an argument.
3.  **Async Function:** The `checkWeather(city)` function is an `async function`.
    * `await fetch(...)`: It uses `fetch` to make a request to the OpenWeatherMap API, appending the city name and your API key. The `await` keyword pauses the function until a response is received from the server.
    * **Error Check:** It first checks if `response.status == 404`. If so, it displays the error message and hides the details.
    * `await response.json()`: If the response is successful, it uses `await` again to parse the response body from a JSON string into a usable JavaScript object.
4.  **DOM Manipulation:** The function then uses `document.querySelector` to find the HTML elements for temperature, city, humidity, and wind speed and updates their `innerHTML` with the data from the parsed JSON object.
5.  **Dynamic Icon:** A series of `if/else if` statements check the `data.weather[0].main` property (e.g., "Clouds", "Clear") and update the `src` attribute of the weather icon image accordingly.

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone or Download:** Download the `index.html`, `style.css`, and `script.js` files into a single project folder.
2.  **Get Your API Key:**
    * This project requires a free API key from [OpenWeatherMap](https://openweathermap.org/api).
    * Sign up on their website to get your unique key.
3.  **Add Your API Key:**
    * Open the `script.js` file.
    * Find the line: `const apiKey = "fbb7c84a189c78e991d89829cd6137b2";`.
    * Replace the existing key with **your own** API key.
4.  **Run the Application:**
    * You will need to have your `images` folder (containing `clouds.png`, `clear.png`, etc.) in the same directory.
    * Open the `index.html` file in your web browser.

### :warning: Important Security Note

The `script.js` file includes a hardcoded API key. This is acceptable for a small personal project or for testing, but **it is not secure for a public application.**

If you deploy this project (e.g., to GitHub Pages), your API key will be visible to everyone, and it could be misused. In a real-world application, API keys should be stored securely on a backend server or as an environment variable in a build process, not exposed in client-side JavaScript.
