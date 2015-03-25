# Numeric-Keyboard

[Demo](http://plnkr.co/edit/h3ag1KfJHxbFWYFj4DVQ?p=preview)



Welcome to the Customized Numeric Keypad!
===================


Because browsers and mobile platforms never agree altogether on one Numeric Keypad, that's why it's sometimes helpful to create your own **Custom** Keypad that will look the same on every browser/platform and has the buttons that **You** want.

----------

Architect?
-------------


> - Numeric Keyboard Directive: which should be only one copy in the whole app. It's template is the actual keyboard.
> - Numeric Keyboard Input Directive: It's a clickable directive that opens your keyboard, you need to attach it to the editable element where you want your input to be.
> - Numeric Keyboard Service: which handles the communication between the two directives.

How to use it?
-------------


> - Download the files in the /src folder and include them in your project.
> - Add **numericKeyboard** as a dependency in your Angular app.
> - Add this directive tag in your main html page, index.html
    < numeric-keyboard /> 
> - In your input field add the directive **numeric-keyboard-input** like this 

    <p id="output-text" numeric-keyboard-input="" ng-model="simple" ng-bind="simple"></p>



Attributes?
----------------


> - **ng-model** required.
> - **max-length="3"**: How many numbers allowed maximum.
> - **abondon-callback**: The value is the function that will be executed if you leave the keypad and have the value empty.   "might be helpful if you want to return to the older value"
> - **getter-setter**: The value is the function that will be executed  after you enter a value from the keypad and click SET, this would be helpful to verify if the number you entered is valid.
