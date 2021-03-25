# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Jesse Wang

Time spent: 2 hours spent in base game. 3 hours spent in other upgrades.

Link to project: https://glitch.com/~quaint-brassy-chamomile

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

I could perhaps make it multiplayer, but that would require a lot more work if I were to do it online. More details on question 4.

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![https://recordit.co/3xhFCcLLJ1]


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I used w3schools to get different colors, more knowledge on classes in html, and searched up functions such as Math.Floor and Math.Random to verify the syntax was correct.
I also searched up array syntax in html on w3schools. I used stackoverflow to see a basic set up for a timer and did research on the timer functions from there.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
A challenge that I encountered during the submission of this code was the different formatting of what I am used to. My current computer science class was about functional programming and ocaml, and my mind was in a different programming language
so changing my mindset and the syntax was a slight setback I had. I overcame this setback by simply setting my mind to a different coding style, and a lot of javascript had parallels 
with java itself, so the transition wasn't as difficult. Another slight challenge I had was getting the images I uploaded to work. I initially thought the images were matched with the file name
rather than the url, and that ended up causing a lot of confusion in the functionality of the code. Eventually I realized it was url that was referenced, not the file name.
A challenge that I couldn't seem to fix was the display and functionality of the timer. The timer says "NaN" seconds left, which I'm fairly confident means that the time variable is not referencing anything but I do not know how to get rid of it. 
I somehow fixed this, but I am not entirely sure how. In terms of functionality, I utilized clear and set interval to cause the timer to reset to what it should be. Initially, the timer would 
go to 0 but not do anything else, as I only had clear interval but not a set interval. Adding a set interval allowed the timer to reset itself, which is what I wanted to do. I used google to find the 
complement of clear interval. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
A question about web devopment I had while doing this came when I was wondering how I could implement this to multiplayer. I realized that this would need me to have a means of
sending information across computers from different locations and perhaps a server as a means of transporting and receiving this information, andI would be especially interested
in how this would be done. Another question about web development I had was about animations. How would I bring animations into a website? Especially since I would like to have 
the animations react to the cursor. I am aware that there is something for tracking cursor location, but I am not entirely sure how I would add an animation. 

In regards to questions about web development that is not related to this current project, I am especially interested in artificial intelligence, and I was wondering how that would
be implemented. Would tests be run in large amounts for the AI to learn? If so, when is enough testing enough? I'm sure it depends on the scenario, but I would like to know more information
about this.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had more time to work on this project I would have implemented sounds. Unfortunately, the timing of this project was during midterm week and a some computer science
homeworks so the timing was a bit off. What I would have doen was added different monster sounds to each door, and perhaps had a scream for when the game was lost.
I would have also liked to have background music, and an announcer in the beginning that explained the rules of the game. I would have also liked to implement different
gamemodes, such as seeing how far you can last. I would have liked to give the user more say in what the game is like, rather than having it as a rigid memory game.

If I had a lot more time I would have done some research into the capabilities of multiplayer, where two individuals battle it out to see who can last the longest. 



## License

    Copyright Jesse Wang
    
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
