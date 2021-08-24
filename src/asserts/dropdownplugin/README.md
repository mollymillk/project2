# NumberCategorySelector

<img src="http://i.imgur.com/Va2Jh7G.png" height="320" width="400"/>

## A JQuery plugin for selecting numbers
###How to use:
1. Link JQuery
2. Include **numbercategoryselector.js**
3. Link **numbercategoryselector.css** style
4. Call **NCS()** on an input element

```javascript
$("input[name='NCS']").NCS();
```

Or call **NCS()** on an input element with the settings of your preference

```javascript
$("input[name='NCS']").NCS({
    maxValue: 9001,
    fade: true,
    showZero: true
});
```

Or even call **NCS()** with a callback function

```javascript
$("input[name='NCS']").NCS({
    callback: function (values) {
        console.log(values);
    }
});
```

All the settings are described below.

###Settings:
####1. categoryNames
An array of strings to represent the values to be selected.

**Example: ["Red" "Green", "Blue"]**

####2. categoryValues
An array of preset values for the previous categories. Can be set to false to create an array of 0s

**Example: [255, 255, 255]**

**Example: false**

####3. minValue
An integer to represent the minimum value possible. Applies to all categories.

**Example: 0**

####4. maxValue
An integer to represent the maximum value possible. Applies to all categories.

**Example: 255**

####5. closeOnOutsideClick
Boolean. Should the selector popup close when clicked outside of it.

**Example: true**

####6. showText
Boolean. Should the input's text be updated to represent the values selected.

**Example: true**

####7. delimiter
A string which separates the categories.

**Example: "|"**

####8. align
Where should the popup be aligned in relation to the input.

**Options: "left", "right", "center"**

####9. fade
Boolean. Should the popup fade in and away

**Example: true**

####10. useDisplay
Boolean. Should the plugin display selected values in a fancy way over the input.

**Example: true**

####11. showZero
Boolean: Should the fancy displays be shown if a value is 0..

**Example: false**

###Default settings:
1. **categoryNames:** ["Adults", "Children"]
2. **categoryValues:** false
3. **minValue:** 0
4. **maxValue:** 9999
5. **closeOnOutsideClick:** true
6. **showText:** true
7. **delimiter:** ", "
8. **align:** "left"
9. **fade:** true
10. **useDisplay:** true
11. **showZero:** false