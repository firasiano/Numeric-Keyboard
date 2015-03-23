# Numeric-Keyboard

[Demo](http://plnkr.co/edit/h3ag1KfJHxbFWYFj4DVQ?p=preview)



Welcome to the Customized Numeric Keypad!
===================


Because browsers and mobile platforms never agree altogether on one Numeric Keypad, that's why it's sometimes helpful to create your own **Custom** Keypad that will look the same on every browser/platform and has the buttons that **You** want.

----------


How to use it?
-------------


> - Download the files in the /src folder and include them in your project.
> - Add **numericKeyboard** as a dependency in your Angular app.
> - Add this directive tag in your main html page, index.html
    < numeric-keyboard /> 
> - In your input field add the directive **numeric-keyboard-input** like this 

    p id="output-text" numeric-keyboard-input="" ng-model="simple" ng-bind="simple"></p>



Attributes?
----------------


> - **ng-model** required.
> - **max-length="3"**: How many numbers allowed maximum.
> - **abondon-callback**: The value is the function that will be executed if you leave the keypad and have the value empty.   "might be helpful if you want to return to the older value"
> - **getter-setter**: The value is the function that will be executed  after you enter a value from the keypad and click SET, this would be helpful to verify if the number you entered is valid.
