# Built this animation by taking a leaf out of my life .

  **I wanted to make something out of love for my dog(#Milo - Added his photo in the tab icon) , so created a scene where a human throws a ball and the dog moves to fetch the ball and return it to the human.**

1. Have used **keyframes** to produce the animations and used time delay to create a **15 second scene with sequential flow** .

2. Used **DOM** to get the ball and sun with user timed interactions.

3. Used **Event Listeners** to trigger the action through **click** and also by **keydown**.

Challenges faced : 
 --> After one cycle of action was completed , i was unable to start the sequence without pressing 'S' that is without manually stopping the animation . 
         Then came thorugh the solution of using void with offSetWidth of the element , which doesnt allow the browser to batch all the changes at once instead renders each step designed for execution .
 
