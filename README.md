# Catalog of Star Wars episodes with detailed information about each film

This single page application provides a catalog of Star Wars episodes. Clicking on each of them opens a page with detailed information about the episode without rebooting with the ability to return to the main page by clicking on the "Back to episodes" button or by clicking on the browser's "Back" button, also without rebooting.

Opening the main page with the catalog and detailed pages is possible from the address bar: the address of the main page is http://localhost:3000, the address of the detailed page (for example, 4: A New Hope) is http://localhost:3000/?episodeId= 1, where episodeId represents the episode number in the movie's release order.

You can also switch between pages by clicking on the browser's "Back" and "Forward" buttons.

Clicking links does not cause the page to reload, but the information is requested from a third-party API, so loading may take a long time and errors may occur.

## Installation

You can download or clone this project by running this command from your terminal:

https://github.com/dzianachayeuskaya/SPA.git

This will create a directory in the name of the project folder.

Start the local server (for example, using a pre-installed globally installed library serve):

npm install --global serve

serve

You should see the application in your browser's address bar at http://localhost:3000.
