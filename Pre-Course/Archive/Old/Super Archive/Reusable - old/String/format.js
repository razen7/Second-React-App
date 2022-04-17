text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
width = 30;
alignment = 'center';

console.log(formatText(text, width, alignment));

function formatText(text, width, alignment) {
    return formatTextHelper(text.split(' '), width, alignment)
}

function formatTextHelper(textArr, width, alignment) {
    let formattedArr = [];
    let myStr = '';
    for (let i = 0; i < textArr.length; i++) {
        let word = textArr[i];
        while (textArr[i] && myStr.length + word.length < width) {
            myStr += word + ' ';
            ++i;
            word = textArr[i];
        }
        formattedArr.push(myStr.trim());
        myStr = word ? word + ' ' : '';
        if (i === textArr.length - 1) {
            formattedArr.push(word);
        }
    }

    newWidth = width + 1;
    if (alignment === 'right') {
        formattedArr = formattedArr.map(v => v.padStart(newWidth, ' '));
    } else if (alignment === 'left') {
        formattedArr = formattedArr.map(v => v.padEnd(newWidth, ' '));
    } else if (alignment === 'center') {
        formattedArr = formattedArr.map(v => {
            let remainingWidth = newWidth - v.length;
            let half = Math.floor(remainingWidth / 2);
            return ' '.padStart(half, ' ') + v + ' '.padEnd(half, ' ');
        });
    }
    return formattedArr.join('\n');
}