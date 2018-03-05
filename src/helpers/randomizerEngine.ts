function randomArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function chooseConfiguration(alignment) {
  const colors = ['black', 'red', 'green', 'blue'];
  const fontSizes = ['20px', '21px', '22px', '23px', '24px', '25px', '26px', '27px', '28px', '29px', '30px'];
  const paddings = ['10px 10px', '0px 0px', '10px 0px', '0px 10px'];
  const fontWeights = ['200', '400', '600'];
  const fontFamilies = [];
  
  const selectedColor = randomArray(colors);
  return {
    'width': '100%',
    'text-align': alignment,
    'border': randomArray(['1px', '0px']) + ' solid ' + selectedColor,
    'text-transform': randomArray(['uppercase', 'lowercase', 'capitalize']),
    'font-size': randomArray(fontSizes),
    'color': selectedColor,
    'background-color': randomArray(['none', 'white']),
    'text-decoration': randomArray(['underline', 'none']),
    'padding': randomArray(paddings),
    'font-weight': randomArray(fontWeights),
    'font-family': randomArray(fontFamilies)
  }
}

export function randomizeWordsByLine(string) {
  // convert string to array of words
  let words = string.split(/ +/);
  let wordsByLine = [];

  // randomize words by lines
  let sentenceAtMoment = '';
  
  // this is just for better styling
  const alignment = randomArray(['center', 'right', 'left']);
  words.forEach((word, index) => {
    if (sentenceAtMoment === '') {
      sentenceAtMoment = word;
    } else {
      sentenceAtMoment += ' ' + word;
    }

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