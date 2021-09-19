# Yegor Chernomor

## Front End Developer

![Yegor Chernomor](https://avatars2.githubusercontent.com/u/58956828?s=150&u=e39d72ef46b560e5077f2cc7c785c4b3c7996ede&v=4)

___
### Contacts

* __Phone:__ +375 (29) 708-89-31 (Viber, Telegram)
* __Email:__ chernomor.yegor@gmail.com
* __Skype:__ s_o_m_b_r_e
* __Discord:__ ChernomorYegor#1932
* __LinkedIn:__ [linkedin.com/in/yegor-chernomor](https://linkedin.com/in/yegor-chernomor)
* __GitHub:__ [github.com/ChernomorYegor](https://github.com/ChernomorYegor)

___
### Summary

I'm a front end developer and an individual entrepreneur. My experience in web development is more than 7+ years 
with a break of 4 years for other professions. Therefore, I still remember what cross-browser development 
for Internet Explorer 6 is and what table-based layout is. Those were terrible times for web developers... =)

But times change and web technologies are constantly improving. You have to keep an eye on them. 
Now I want to improve my JavaScript and React skills, learn Typescript and possibly Angular as well. 
I really enjoy studying and learning new things. I have a great desire to grow professionally. 
My main goal is to learn how to create good web applications and learn the technologies necessary for this.

I am a calm, responsible and executive, attentive to details person (I always use Pixel Perfect =)) 
who has an analytical mindset and a good learning ability.

___
### Skills

* Photoshop, Figma
* HTML5, BEM
* CSS3, Sass/SCSS
* Bootstrap
* JavaScript, AJAX, jQuery
* Git, GitHub
* Webpack, npm, gulp
* React, React-Router
* Redux, Redux Saga

English – [B2 Upper Intermediate (CEFR)](https://www.efset.org/cert/jXLAay). I can read technical literature.

___
### Work experience

* __09.2020 - present__ – Individual Entrepreneur (Freelance), Front End Developer.  
__Main responsibilities:__ Front End Development using HTML5, BEM, CSS3, Sass/SCSS, JavaScript, Git, GitHub.

* __12.2014 - 10.2016__ – Individual Entrepreneur (Freelance), Web Developer.  
__Main responsibilities:__ Web Development using Photoshop, HTML5, CSS3, JavaScript, jQuery.

* __01.2010 - 12.2014__ – Freelance, Web Developer.  
__Main responsibilities:__ Web Development using Photoshop, HTML, CSS, JavaScript, jQuery.

___
### Education

* __07.2021 - 09.2021__ – The Rolling Scopes School 
([Certificate](https://app.rs.school/certificate/wf6u50rq)).  
__Course:__ JS/FE Pre-School (JavaScript).  
__Description:__ Development using HTML5, CSS3, JavaScript, Git, GitHub, Figma.  
[Slider "Premier League Stadiums"](https://chernomoryegor.github.io/premier-league-stadiums/) 
([Source code](https://github.com/ChernomorYegor/premier-league-stadiums)) 

* __11.2019 - 06.2020__ – Coding School TeachMeSkills 
([Certificate](https://media-exp1.licdn.com/dms/image/C4D2DAQG7xJ4qNS_U-w/profile-treasury-image-shrink_800_800/0/1597479377694?e=1632139200&v=beta&t=Vahd7t7R7S6Fc4MFnonrIYhmyeShcxoMGwtKhcub8As)).  
__Course:__ Front End Developer.  
__Description:__ Web development using Photoshop, HTML5, CSS3, JavaScript, AJAX, Git, Bootstrap, Webpack, npm, 
React, React-Router, Redux, Redux Saga.  
[React game "Dungeon Crawl"](https://chernomoryegor.github.io/react-dungeon-crawl/) 
([Source code](https://github.com/ChernomorYegor/react-dungeon-crawl)) / 
[React game "Tic Tac Toe"](https://chernomoryegor.github.io/react-tic-tac-toe/) 
([Source code](https://github.com/ChernomorYegor/react-tic-tac-toe))  

* __10.2008 - 04.2010__ – Belarusian National Technical University.  
The Branch of BNTU "Institute of Improvement of Professional Skills 
and Staff Retraining on New Directions of Engineering, Technology and Economy".  
__Specialty:__ Web Design and Computer Graphics.  
__Qualification:__ Software Engineer, Web Designer.

* __09.2002 – 06.2007__ – Belarusian National Technical University.  
Faculty of Information Technologies and Robotics.  
__Specialty:__ industrial Robots and Robotic System.  
__Qualification:__ Electrical and Mechanical Engineer.

___
### Code example

The code for the function that generates a new starting map for the "Dungeon Crawl" game:
```javascript
function generateMap(playerX) {
    let generatedMap = [];
    let numberOfWalls = Math.ceil(mapWidth * difficulty / 100);

    for (let i = 0; i < mapHeight; i++) {
        let generatedRowMap = [];
        if (i === 0) {
            generatedRowMap[playerX] = PLAYER;
        }

        let wallVar = 0;
        while (wallVar < numberOfWalls) {
            let randomSquare = getRandomNumber(0, mapWidth - 1);
            if (generatedRowMap[randomSquare] !== WALL && generatedRowMap[randomSquare] !== PLAYER &&
                !(i === 1 && randomSquare === playerX)) {
                generatedRowMap[randomSquare] = WALL;
                wallVar++;
            }
        }

        for (let j = 0; j < mapWidth; j++) {
            if (!generatedRowMap[j]) {
                generatedRowMap[j] = EMPTY;
            }
        }
        generatedMap.push(generatedRowMap);
    }
    generateBosses(generatedMap, BOSSES);
    generateItems(generatedMap, CERTIFICATES, CERTIFICATE);

    return generatedMap;
}
```