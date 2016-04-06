Focus Angular 2
Syntax
Familiar vs simple
data binding
binding semantics
<component title = "Literral">
<component [title] = "expression">

bingding question 
Is [property] a valid HTML?
Why [property] = expression
not property = {{expression}}?
what about {{interpolation}}?
Web components
Should act like existing browser elements
DOM API: properties, events, methods
HTML is serialized version of DOM

HTML Attributes => DOM properties
<input value = 'initial'>
Properties
provide current value
var current = input.value;
can contain non string values
passing model values to child component 
boolean attribute
what about {{interpolation}}?
event binding
<component [select]="user.name(current)"> expression
<component (select)="user.name(current)"> statement