# React Color Scheme Thing

## Elevator Pitch
	This project will be used by designers who want to ensure their color choices properly reflect their intent and are suitable for the intended audience.

## Wireframes
	See wireframe.htm

## Dependencies
	Uses the API from thecolorapi.com.
	Uses Firebase to store information about each base color.

## Task List
	Set up the project using create-react-app.
	Get the API connected.
		The user will input a color hex code and get back a JSON object containing a color scheme.
	Store the color scheme in a component state and output it in the #colorOutput div using a component.
	Find the base color closest to the color input by the user.
		EG: #E1F243 is a shade of yellow.
	Use that base color to look up color information in the Firebase table.
	Display that info in the #meaningOutput div using another component.
## Schedule for the next 3 weeks
	Week 1: API connection, Firebase 
	Week 2: Basic layout, write code to identify basic color
	Week 3: CSS tweaks