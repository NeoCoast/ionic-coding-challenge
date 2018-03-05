const colors = ['black', 'red', 'green', 'blue'];
const fontSizes = ['24px', '28px', '32px', '36px'];
const paddings = ['10px 10px', '0px 10px'];
const fontWeights = [200, 400, 600, 800];
const fontFamilies = [
  "'Roboto', sans-serif",
  "'Krona One', sans-serif",
  "'Merriweather', serif",
  "'Anton', sans-serif",
  "'Coiny', cursive"
];


function randomize(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function chooseConfiguration(alignment) {  
  const selectedColor = randomize(colors);
  return {
    'width': '250px',
    'text-align': alignment,
    'border': randomize(['1px', '0px']) + ' solid ' + selectedColor,
    'text-transform': randomize(['uppercase', 'lowercase', 'capitalize']),
    'font-size': randomize(fontSizes),
    'color': selectedColor,
    'background-color': randomize(['none', 'white']),
    'text-decoration': randomize(['underline', 'none']),
    'padding': randomize(paddings),
    'font-weight': randomize(fontWeights),
    'font-family': randomize(fontFamilies),
    'text-shadow': randomize(['0px', '2px']) + ' ' + randomize(['0px', '2px']) + ' lightgray'
  }
}

export function randomizeWordsByLine(string) {
  // convert string to array of words
  let words = string.split(/ +/);
  let wordsByLine = [];

  // randomize words by lines
  let sentenceAtMoment = '';
  
  // this is just for better styling
  const alignment = randomize(['center', 'right', 'left']);
  words.forEach((word, index) => {
    if (sentenceAtMoment === '') {
      sentenceAtMoment = word;
    } else {
      sentenceAtMoment += ' ' + word;
    }

    // if this is the last word, we have to add it to the wordsByLine array
    if (index === words.length - 1) {
      wordsByLine.push({
        'sentence': sentenceAtMoment,
        'configuration': chooseConfiguration(alignment)
      });
      return;  
    }

    // randomize if we keep on the same line or create another
    if (Math.random() >= 0.5) {
      return;
    }

    wordsByLine.push({
      'sentence': sentenceAtMoment,
      'configuration': chooseConfiguration(alignment)
    });

    sentenceAtMoment = '';
  });
  
  return wordsByLine;
}