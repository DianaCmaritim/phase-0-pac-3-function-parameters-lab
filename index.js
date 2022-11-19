function introduction(name = `${Aki} ${Samip}`) {
    return [ `Hi, my name is ${name}.` ];
}

function introductionWithLanguage(name = `${Aki} ${Samip}`,language = `${Ember.js} ${React}`) {
    return [ `Hi, my name is ${name} and I am learning to program in ${language}.`]
}

function introductionWithLanguageOptional(name, language = `${Python} ${JavaScript}` `${Gracie}`) {
    return [ `Hi, my name is ${name} and I am learning to program in ${language}.`]
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}