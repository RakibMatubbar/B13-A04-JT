<hr>

<br>

<h1>Answer: 01 :</h1>
<b>getElementByID, getElementsByClassName, querySelector and querySelectorAll</b> they are all <br> DOM selection methods, but the <b>differ</b> in -

<br>

<ul>
<li>How they target elements<b>?</b></li> <br>
<li>and, What they return<b>?</b></li>
</ul>

<h3>getElementById()</h3>
Selects a single element by its unique id attribute and returns the element directly. Or null if id not found.

<h3>getElementByClassName()</h3>
Selects elements by class name and returns a live HTMLCollection and it updates automatically if DOM changes.

<h3>querySelector()</h3>
Accepts any valid CSS selector (id / class) and returns the first matching elements. Or null if selector not found.

<h3>querySelectorAll()</h3>
Returns a static NodeList of all matches. Here static means it dose not update when the DOM changes.

<hr>

<br>

<h1>Answer: 02 :</h1>
<b>Creating and Inserting a New Element into the DOM :</b>

<h5>Step 1 : Create Element : <br> Step 2 : Add Content : <br> Step 3 : Insert into DOM : </h5>

<p>Example:</p>

const newElement = document.createElement("p"); <br>
newElement.innerText = "Hi Rakib Matubbar"; <br>
document.body.appendChild(newElement); <br>

<hr>

<br>

<h1>Answer: 03 :</h1>

Event bubbling is the mechanism by which an event triggered on a deeply nested <br> element travels upward through its ancestor elements in the DOM tree, triggering any matching listeners along the way.

<ul>
<li>When an event happens on a child element.</li>
<li>it propagates upward to its parents.</li>
</ul>

<b>It Works Like :</b>
<br>

When I click a "button" inside a "div" inside the "body" > the click event first <br> trigger on the "button" then bubbles up to the "div" then to "body" then to "html" and finally to the "document object".

<br>

The opposite of bubbling is capturing (also called the trickling phase), where the event <br> travels down from the root to the target.

<hr>

<br>

<h1>Answer: 04 :</h1>

Event delegation attaches a single event listener to a parent element to manage events <br> for all its current and future child elements.

<ul>
<li>Attach a single event listener to a parent.</li>
<li>Handle events for its children using bubbling.</li>
</ul>

<b>Useful Becasue:</b>
<ul>
<li>Works for dynamically added elements.</li>
<li>Improves performance : (fewer listeners).</li>
<li>Cleanup system : Removing one listener is easier than tracking and removing many.</li>
</ul>

<hr>

<br>

<h1>Answer: 05 :</h1>
<b>Difference between preventDefault() and stopPropagation()</b>

<br>

<b>preventDefault()</b>
<br>
Stops the browser’s default behavior. <br>
Event continues to propagate as usual.

<b>topPropagation()</b>
<br>
Stops the event from bubbling to parent elements. <br>
Event flow is halted; parent/child handlers are not called.

<hr>

<br>


