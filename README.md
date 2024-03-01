# Wheel of Success
A minigame where you have to choose letters to guess the hidden sentence.

[Live Demo](https://msosadesign.github.io/treehouse-project-6/)

Technologies used:
- HTML/CSS
- Javascript

This is the sixth project of the Front End Development Techdegree, focused on testing my skills on Javascript DOM Programming. It's a minigame where you have to guess the hidden sentence, but you can only make 5 mistakes before losing.

![image](https://github.com/msosadesign/treehouse-project-6/assets/59977013/e4be5ea2-b6a5-4b4b-bd24-72f03b6ab4b1)

There's a keyboard on the screen to select each letter, if you get one right, it will show it on the hidden sentence.

![image](https://github.com/msosadesign/treehouse-project-6/assets/59977013/7e851a4b-3f13-410d-a12b-15ee3d00b792)

If you select a letter not present in the sentence, you lose a heart.

![image](https://github.com/msosadesign/treehouse-project-6/assets/59977013/b1506d45-8900-4a71-a5c2-06f25cff46ad)

After losing all your hearts, you have to restart the game.

![image](https://github.com/msosadesign/treehouse-project-6/assets/59977013/b6dd71e0-c912-4c64-ae0c-e0bb53bd5ac2)

Inside the code, there's an array holding all the sentences, each time the game starts, it takes a random sentence and obscures it. When the user selects a letter, the class .chosen is applied and the code verifies how many times the letter is present in the sentence, for each match in the sentence, the class .show is applied. Finally, the user wins once every letter is uncovered.
