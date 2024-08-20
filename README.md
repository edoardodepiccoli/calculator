# calculator

# new reamde!

This is a simple calculator project I did as an assignment for [theodinproject](theodinproject.com)
The first version I coded was so messy and unreadable I just rewrote it from scratch (I should have created a refactoring branch). I left the old readme below so, by reading it and taking a look at the old commits, you can see my though process when coding this app.

Try it live on [this link](https://edoardodepiccoli.github.io/calculator/)

## features to add

- change hovering and active styles on buttons
- add keyboard support
- find a way to disable mobile double tap to zoom

# old readme (before refactoring)

This is my attempt at copying the IOS default calculator app. I like the style of it but it is not very intuitive. You will see that some features are different from the official app and you may also find a lot of bugs.

## Demo

Try it live on [this link](https://edoardodepiccoli.github.io/calculator/)

## Things to fix

- Refactor code, now it's a mess and I still have to figure out where to start making changes :(
- Decouple logic and UI
- Add undo feature (delete last digit from number on display)
- Add history feature
- Add some sort of responsiveness to the UI, since now it's very small and the grid layout is a little bit rushed (css was not the orimary focus with this exercise)

## Lessons Learned

- It was very hard keeping track of wether the calculator was in the middle of the operation or not. I still have to fix the logic behind it but I felt like I learned to come up with a solution (even if a crappy one) all by myself.
- I learned a bit of CSS grid
- I learned that writing pseudocode can be great but it has to be correct or it can actually harm your app development if you don't know what you are doing (me, lol)
- Event delegation, pretty cool, makes you write less code and makes the page perform better, nice
