function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let a = `I am an avid physicist, having won the School Physics Prize each year and my proficiency in this subject resulted in my getting gold in the Intermediate Physics Online Challenge. I also was entered into the British Physics Olympiad by my teacher.  
<br><br>
I am also interested in high-level mathematics, having won Gold awards and achieved high marks in the Senior Mathematical Challenge. I am a programming enthusiast with a specific focus on Python and iOS mobile app development and have used Python to develop games using the PyGame module and Object Oriented Programming. I have also created pathfinding programs using Dijkstra and A-Star. I have explored machine leaning with logistic regression and K-Nearest Neighbours techniques and have built a program to analyse disaster-related tweets to help rescue efforts using Natural Language Processing. I know HTML and have used it to code front end website layouts as well as Swift to code iOS apps such as weather, live currency conversion and music apps.  
<br><br>
Furthermore, I am passionate about writing, having been published in my school publications for my cultural writing and having won the school Economics Essay prize, as well as being published in the Economics School Magazine. I was also head of International Affairs for my school newspaper.  
<br><br>
I also am interested in humanities and languages: I have won the French, RS, Chemistry, Latin and Geography prizes multiple times and have received a top grade in French IGCSE. I also enjoy economics and was invited to be part of the inaugural lower school society for it. 
<br><br>
I pursue debating, having been head of Debating Society in my old school and winning an out of school public Intelligence Squared competition, as well as being part of my school debating team and representing it in competitions. `;
let s = `I am a Computer Science enthusiast with a keen interest in AI. I achieved a distinction in the Oxford University Computing Challenge. I am proficient in Python programming, creating machine learning applications, such as cricket win prediction software, exploring several regression and classification techniques, using deep learning with neural networks, computer vision, natural language processing for sentiment analysis classification and chatbots, and developing algorithms, for example, a sudoku solver with recursion and backtracking. I have honed my skills in web development using front-end technologies such as HTML, CSS, JavaScript and React, with Python and Django/Flask on the backend and have deployed multiple web applications. As an avid programmer, I am also skilled in the C++ programming language and object-oriented programming and have explored game development. Recently, I was awarded a silver medal in the National Cipher Challenge, a codebreaking competition conducted by the University of Southampton. Additionally, I have a good grasp of high-level mathematical concepts and enjoy logical problem-solving, having won medals in UKMT's Mathematical Olympiads and gold awards for high marks in Mathematical Challenges. My strength in physics has led me to getting gold in the Intermediate Physics Online Challenge and being entered into the British Physics Olympiad. In addition, I have excelled in electronics and chemistry at school having won a prize in each of these, and received top school prizes in French, Biology, Geography and Latin last year. Additionally, I attained the top grade in French IGCSE. `;
let d = `I greatly enjoy English and creative writing; at school I was given the English Prize (Nicholson Cup), the Booth Clibborn Reading Cup, and earned first place in the Writing Competition, which was judged by the Head of English at Westminster School. I have also had my writing featured in school publications. Beyond school, I recently received a prize from Jewish News (the UK’s largest Jewish newspaper), and also wrote an article which was published in the Algemeiner, which is the “fastest growing Jewish newspaper in America”. 
<br><br>
I also am interested in rhetorical writing and public speaking, having recently written and performed a speech in Westminster Abbey in front of hundreds of people to commemorate Holocaust Memorial Day.  
<br><br>
I have a passion for languages; in the past I have studied Latin and Classical Greek, and currently study Spanish and French, in addition to knowing Russian to heritage or native level. At school, I won the French Prize, and attained the top grade at French IGCSE; I am currently further pursuing the DELF B1 qualification. In my spare time I also do volunteer translations of historical documents from Russian to English, helping the History of Jewish Communities in Ukraine “JewUA” project. I also entered the Advanced paper of the UK Linguistics Olympiad.  
<br><br>
I have done volunteer work with children in the past, and have experience as an assistant then a teacher at academic weekend and holiday camps during the last 3-4 years. `;
tutorColumn = 
`<div class="col">
<div class="category card">
    <div class="category card-body">
        <h5 class="card-title"></h5>
        <p class="card-text"></p>
    </div>
</div>
</div>`
descriptions = [{name:"Sathvik", desc:s}, {name:"Daniel",desc:d}, {name:"Aarav", desc:a}];
descriptions = shuffleArray(descriptions);
tutors = document.getElementById('tutors');
descriptions.forEach(element => {
    tutors.innerHTML += 
    `<div class="col mb-3">
    <div class="category card">
        <div class="category card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">${element.desc}</p>
        </div>
    </div>
    </div>`
});