# iPhone13 JavaScript Object

This JavaScript code is an object named `iPhone13` that represents an iPhone 13 and is clearly an item I use every day. Besides strngs, booleans, numbers, array and a function, it contains various nested objects related to the chosen object iPhone13:

## The Properties

- `type` (strings): This is an object containing information about the brand, model, and color of the iPhone.
- `storage` (number and boolean): It gives details about the RAM and memory card support.
- `display` (number, string and boolean): An object describing the screen size, panel type, and touchscreen capabilities.
- `resolution` (number): An object specifying the screen resolution.
- `features` (array, strings): An array of features supported by the iPhone 13.
- `on` (boolean): A property that indicates whether the iPhone is turned on or off.

## Methods / function
- `power()` (method/function): A method to toggle the power state of the iPhone. It switches the `on` property between `true` and `false`.

## Usage
You can use this JavaScript object to represent and manipulate the characteristics of an iPhone 13. For example, you can turn the iPhone on or off using the `power` method.

// Check if the iPhone is on

if (iPhone13.on) {
    console.log("iPhone is on.");
} else {
    console.log("iPhone is off.");
}