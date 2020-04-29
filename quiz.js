
const options=document.querySelector(".options").children;
const answerTrackerContainer=document.querySelector(".answers-tracker");
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const correctAnswerSpan=document.querySelector(".correct-answers");
const totalQuestionSpan2=document.querySelector(".total-question2");
const percentage=document.querySelector(".percentage");
const question=document.querySelector(".question")
const op1 = document.querySelector(".option1");
const op2 = document.querySelector(".option2");
const op3 = document.querySelector(".option3");
const op4 = document.querySelector(".option4");
let questionIndex;
let index=0;
let myArray=[];
let myArr=[];
let score=0;

// questions and options and answers

const questions=[
{
	q:'On est confiné pour combien de temps',
	options:['1 mois','3 mois','1 an','a determiner'],
	answer:3
},
{
	
	q:'Le corona est?',
	options:['une maladie','un virus', 'une pandemie', 'une blague'],
	answer:1
},
{
	q:'Le premier pays infecte est?',
	options:['Chilie','Bresil','USA','la Chine'],
	answer:3
},
{
	q:'On doit éternuer  dans ?',
	options:['nos mains','une serviette','le coudre','notre maison'],
	answer:2
},
{
	q:'On doit éviter de?',
	options:['se parler','manger','se donner la main','courir'],
	answer:2
},

{
	q:'La distance requise entre deux personnes est?',
	options:['1m', '3m', '2m', '2km'],
	answer:2
},

{
	q:'On se lave les mains:',
	options:['Souvent', 'Parfois', 'Si on veut', 'Chaque 30minutes'],
	answer:0
},


{
	q:'Est ce que les personnes de couleur sont épargnée ?',
	options:['Non', 'Peut etre', 'Je sais', 'Oui'],
	answer:0
},

{
	q:'Le CORONA  est considérée comme ',
	options:['Une malediction', 'Une pandemie', 'La fin du monde', 'Une catastrophe'],
	answer:1
},


{
	q:'Quel type de personne sont vulnerable au virus CORONA?',
	options:['Les enfants', 'les vieux', 'Les jeunes', 'Tout le monde'],
	answer:1
},

]

// set questions and options and question number 
// sa pati sa ki responsab poul fe kesyon ak tt chwa yo afiche nan paj html lan

totalQuestionSpan.innerHTML=questions.length;
function load(){
	questionNumberSpan.innerHTML=index+1;
	question.innerHTML=questions[questionIndex].q;
	op1.innerHTML=questions[questionIndex].options[0];
	op2.innerHTML=questions[questionIndex].options[1];
	op3.innerHTML=questions[questionIndex].options[2];
	op4.innerHTML=questions[questionIndex].options[3];
	index++;

}

//fonction sa se pou lhrw klike sou chwa wap fe an
 // menm fonktyon sa ap  pemet ou konnen lhr chwa a bon ou pa
// menm fonktyon sa pemet ou we l tou 


function check(element){
	if(element.id==questions[questionIndex].answer){
		element.classList.add("correct");
		updateAnswerTracker("correct")
		score++;
		console.log("score:"+score)
	}
	else{
		element.classList.add("wrong");
		updateAnswerTracker("wrong")
	} 
	disabledOptions()
}

// sa se yon fonktyon kap pemet ou chwazi youn
function disabledOptions(){
	for(let i=0; i<options.length; i++){
		options[i].classList.add("disabled");
		if(options[i].id==questions[questionIndex].answer){
			options[i].classList.add("correct");
		}
	}
}

//function sa c pou lhr cliquer pou li pa baw menm nan
function enableOptions(){
	for(let i=0; i<options.length; i++) {
		options[i].classList.remove("disabled","correct","wrong");
	}
}



//function sa ap gen yon kondisyon ladan pou diw pa chwazi youn
function validate(){
	if(!options[0].classList.contains("disabled")){
		alert("SVP vous devez choisir une option")
	}
	else{
		enableOptions();
		randomQuestion();
	} 
}

// function ap pemet ou valide
function next(){
	validate();
}


// kounya nou pral fe yon function kap pemet kesyon yo vinn aleatwa
 function randomQuestion(){
 	let randomNumber=Math.floor(Math.random()*questions.length);
 	let hitDuplicate=0;
 	if(index==questions.length){
 		console.log("quiz over")
 		quizOver();
 	}
 	else{
 		// premier
 		if(myArray.length>0){
 			for(let i=0; i<myArray.length; i++){
 				if(myArray[i]==randomNumber){
 					hitDuplicate=1;
 					break;
 				}
 			}
 			if(hitDuplicate==1){
 				randomQuestion();
 			}
 			else{
 				questionIndex=randomNumber;
 				load();
 				myArr.push(questionIndex);
 			}
 			

 		}
 		//deuxieme
 		if(myArray.length==0){
 			questionIndex=randomNumber;
 			load();
 			myArr.push(questionIndex);
 		}

 	
 	    myArray.push(randomNumber);

 	//test dans la console
 	// console.log("myArray:"+myArray)
 	//console.log(questionIndex)
 	
 	 }
 }

 // fonktyon sa pral pemet u konnen lhr li bon ou pa men nan sans konkre
//menm fonktyon sa ap pemet ou kreye yon div 
function answerTracker(){
	for(let i=0; i<questions.length; i++){
		const div=document.createElement("div")
		answerTrackerContainer.appendChild(div);
	}
}

// fonktyon sa ap pemet ou wel 
function updateAnswerTracker(classNam){
	answerTrackerContainer.children[index-1].classList.add(classNam);
}
//function ap pemet ou afiche resulta final moun lan apre quizz lan 
function quizOver(){
	document.querySelector(".quiz-over").classList.add("show");
	correctAnswerSpan.innerHTML=score;
	totalQuestionSpan2.innerHTML=questions.length;
	percentage.innerHTML=(score/questions.length)*100 + "%";

}
// function sa c pouw ka rejwe anko siw vle 
function tryAgain(){
	window.location.reload();
}

window.onload=function(){
	randomQuestion();
	answerTracker();
}
