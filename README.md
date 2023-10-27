# iPhone13 JavaScript Object

This JavaScript code is an object named `iPhone13` that represents an iPhone 13 and is clearly an item I use every day. It contains various properties and methods related to this device:

## Properties
- `type`: An object containing information about the brand, model, and color of the iPhone.
- `storage`: An object with details about the RAM and memory card support.
- `display`: An object describing the screen size, panel type, and touchscreen capabilities.
- `resolution`: An object specifying the screen resolution.
- `features`: An array of features supported by the iPhone 13.
- `on`: A boolean property that indicates whether the iPhone is turned on or off.

## Methods
- `power()`: A method to toggle the power state of the iPhone. It switches the `on` property between `true` and `false`.

## Usage
You can use this JavaScript object to represent and manipulate the characteristics of an iPhone 13. For example, you can turn the iPhone on or off using the `power` method.

// Check if the iPhone is on

if (iPhone13.on) {
    console.log("iPhone is on.");
} else {
    console.log("iPhone is off.");
}