function introduction(name){
    console.log(`Hi, my name is ${name}.`);
}
introduction("Alvin");

function introductionWithLanguage(name, language){
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

introductionWithLanguage("Aki", "Ember.js");


function introductionWithLanguageOptional(name, language = "Javascript"){
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

introductionWithLanguageOptional("Aki");





