# Day 19

### I. Introduction and Definition of Events

*   Events are a very important topic in JavaScript. Without events, web pages lack dynamic behavior.
*   An **event** is defined as a signal that something has happened in the browser. This can be likened to someone knocking on a door.
*   Examples of browser events include: someone clicking a button, typing text in an input box, or selecting an option from a checkbox or radio button. Each action generates a signal that something has changed or happened.
*   The ability to decide whether or not to act upon this signal is called **responding to the event**.
*   In JavaScript, we respond to events using an **event handler**. The event handler is typically a function written by the programmer to define the functionality that executes when the event occurs.

### II. Event Handling Methods

The sources detail three primary ways to handle events: 1) Handling in Markup, 2) Handling in Script (Property Method), and 3) Handling with `addEventListener` (The preferred method).

#### 1. Handling Event in Markup (HTML Attributes)

*   Events can be handled by specifying an element's intrinsic attributes, such as `onclick`.
*   The `onclick` attribute must specify the handler function to be called when the event occurs.
*   **Passing Arguments:** Arguments can be passed directly within the attribute's function call. If double quotes are used to define the function call string, single quotes must be used for any string arguments inside it to avoid an invalid string definition.
*   **Case Sensitivity:** The `onclick` attribute in HTML is generally not case sensitive (e.g., `onClick` or `ONCLICK` will work), but the convention is to keep it lowercase when working with plain JavaScript.
*   This method is primarily useful for statically created elements.

#### 2. Handling Event in Script (Property Method)

*   Events can be handled by accessing the element in the script (e.g., using `document.getelement by id`) and assigning a function directly to the event property (e.g., `element.onclick = function`).
*   The handler function can be an anonymous (inline) function or a named function defined elsewhere.
*   **Function Reference (Crucial Point):** When assigning a named function as a handler, you *must not* include parentheses (e.g., `element.onclick = handleclick`). Including parentheses executes the function immediately, causing `element.onclick` to be set to the function's return value (often `undefined`), rather than the function reference itself.
*   If the handler function requires arguments, it must be wrapped inside another function (e.g., an arrow function) to ensure that the event property receives a valid function reference.
*   **Case Sensitivity:** When using the property method in `index.js`, the event name (e.g., `onclick`) **is case sensitive** and must be in lowercase.
*   **Limitation:** Using the property method (e.g., `element.onclick = func1; element.onclick = func2;`) means that the **latest defined handler will always override the previous one**. This prevents attaching multiple functionalities to a single event.

#### 3. Handling Event with `addEventListener` (The Better Way)

*   `addEventListener` is the better way to handle events because it allows multiple handlers to be attached to a single event on the same element, resolving the overriding issue of the property method.
*   **Syntax:** `element.addEventListener(event, handler, options)`.
    *   **First Parameter:** The type of event (e.g., `'click'`).
    *   **Second Parameter:** The event handler function.
    *   **Third Parameter:** An optional parameter, which is relevant when discussing event bubbling and capturing.
*   When using `addEventListener`, multiple functions can be attached to the same event; for instance, a single click can trigger one function to disable a button and another to initiate a download.

### III. Cleanup and Event Handler References

*   **`removeEventListener`:** This function is necessary for writing optimized JavaScript code because if an event listener is not removed when its work is done, it remains attached to the UI element, leading to potential issues.
*   **Requirement for Removal:** To successfully remove an event listener, you must pass the exact same event type and the **exact same function instance (reference)** that was used during the addition phase.
*   **Pitfall of Anonymous Functions:** If an anonymous (inline) function is used with `addEventListener`, `removeEventListener` will fail if another anonymous function is passed for removal, because these are two completely different function instances.
*   **Best Practice:** Always define the event handler as a named function outside of the `addEventListener` call to ensure the same reference can be passed to both `add` and `remove` methods.

### IV. Special Event: `DOMContentLoaded`

*   The `DOMContentLoaded` event signals when the DOM content is completely loaded.
*   This is important because trying to query or manipulate elements before the DOM content is loaded might result in getting `undefined` values.
*   **Handling Restriction:** `DOMContentLoaded` **must** be handled using `addEventListener` (`document.addEventListener('DOMContentLoaded', ...)`); the property way (`document.ondomcontentloaded = ...`) will not work.

### V. Anatomy of the Event Object

*   An event object is an implicit object provided by JavaScript to all handler functions. It contains valuable information about the event that occurred.
*   The event object can be captured as a parameter in the handler function (often named `e` or `event`).
*   **Key Properties of the Event Object:**
    *   `event.type`: Returns the name of the event that occurred (e.g., `'change'`).
    *   `event.target`: **The element that triggered the event** (e.g., the input box that received the click).
    *   `event.target.value`: The current value of the element that triggered the event.
    *   `event.target.name`: The value of the `name` attribute of the element that triggered the event.
    *   `event.currentTarget`: **The element that the event listener is attached to**.
    *   In simple cases, `event.target` and `event.currentTarget` might be the same, but they differ when using event bubbling or delegation.
*   **The `this` Keyword:** When referring to `this` inside an event handler function (using a plain old JavaScript function, not an arrow function), `this` refers to the element on which the handler was added (the element instance itself).

### VI. Event Flow: Bubbling and Capturing

Event flow describes the path an event takes through the DOM hierarchy.

#### 1. Event Bubbling

*   **Bubbling is the default behavior** for events.
*   The event flow starts at the **target element** (where the user interacted) and then **bubbles up** through its ancestors (parents) toward the document level.
*   Flow: Child $\rightarrow$ Parent $\rightarrow$ Grandparent $\rightarrow$ Document.
*   If any ancestor element has an event handler attached for the same event type, that handler will execute as the event passes through it.

#### 2. Event Capturing

*   **Capturing is disabled by default**.
*   When capturing is enabled, the event flow starts from the outermost ancestor (top) and flows **down** toward the target element.
*   Capturing happens *before* the target element handles the event.
*   To enable capturing for a listener, pass `true` as the optional third argument to `addEventListener`.
*   **Event Phases:** An event follows three phases: 1) **Capture Phase** (Top-down), 2) **Target Phase** (execution on the element clicked), and 3) **Bubbling Phase** (Bottom-up).

### VII. Event Delegation

*   **Event Delegation** is a powerful and efficient design pattern achieved using the concept of bubbling.
*   **Definition:** Instead of adding individual event listeners to all child elements, a **single listener is added to a parent element**.
*   When an event occurs on a child, it bubbles up, and the parent's single listener executes.
*   Inside the parent's handler function, you use `event.target` to identify which specific child element triggered the event and execute logic based on that target.
*   **Advantages:** It leads to clean code, reduces unnecessary event listener additions, and offers reusability. Any new child elements dynamically added to the parent hierarchy will automatically be handled by the single parent listener without needing additional code.

### VIII. Stopping Propagation and Preventing Defaults

#### 1. Stopping Propagation (`event.stopPropagation()`)

*   In situations where you do not want an event to continue bubbling up to higher-level elements (e.g., you do not want a click on a button to also trigger a click handler on the `document` level), you must explicitly stop it.
*   Calling `e.stopPropagation()` inside a handler function tells JavaScript to stop propagating the event upwards from that point in the hierarchy.

#### 2. Preventing Default Behavior (`event.preventDefault()`)

*   Elements often have default browser behaviors (e.g., an anchor tag navigating to its `href`, or a form submitting and reloading the page).
*   If you need to override or stop these default actions (for instance, to run custom client-side validation before submission), you must call `e.preventDefault()` inside the event handler.

### IX. Custom Events

*   Beyond standard browser events, you can create your own **custom events** to handle complex application logic.
*   **Three Required Steps:**
    1.  **Create the Event:** Use the `CustomEvent` constructor (`const myEvent = new CustomEvent(eventName, detailsObject)`).
        *   The constructor takes the event name (e.g., `'user logged in'`).
        *   Custom data can be passed using a `detail` property inside an object provided as the second argument (e.g., `{ detail: { username: '...' } }`).
    2.  **Listen to the Event:** Use `addEventListener` to listen for the custom event name on an element (often the `document`).
        *   The listener retrieves the custom data using `e.detail`.
    3.  **Dispatch the Event:** Use `element.dispatchEvent(myEvent)` (often `document.dispatchEvent(myEvent)`) to trigger the custom event.

### X. Project Concepts (FAQ System)

The provided project demonstrated how events and design patterns work together:

*   **Structure:** An outer div (`FAQ main div`) held multiple question-answer pairs (FAQ items).
*   **Delegation:** A single click handler was added only to the top-level parent div, rather than individual click handlers on every question element.
*   **Logic Flow:**
    1.  When a question was clicked, the event bubbled up to the parent FAQ div handler.
    2.  Inside the handler, the `event.target` was used to identify the clicked element.
    3.  The handler then navigated the DOM hierarchy (using `parentElement` and `querySelector`) to find the corresponding answer div.
    4.  The answer div's visibility was controlled by toggling a class (`classList.toggle('show')`).
*   **`stopPropagation` Use Case:** A separate click handler was placed on the `document` level to handle collapsing all expanded answers when the user clicked outside the FAQ items. To ensure that clicking a question (which should expand/collapse a specific item) did not immediately trigger the document's "collapse all" logic, `e.stopPropagation()` was applied inside the question-handling logic. This prevented the event from bubbling up to the document level.
