module.exports = {
  fixedStr
}

function fixedStr (str, len, rightAligned) {

  const spaces = (len) => new Array(len).fill().join(' ');
  const rightPad = (str, len) => (str + spaces(len)).substr(0, len);
  const leftPad  = (str, len) => (spaces(len) + str).substr(str.length-1, len+str.length-1);

  const truncate = (str, len) => `${str.substr(0,len-3)}...`;

  const fixedLeft = (str, len) => (str.length > len) ?
        truncate(str, len) :
        rightPad(str, len);

  const fixedRight = (str, len) => (str.length > len) ?
        truncate(str, len) :
        leftPad(str, len);

  const fixed = (rightAligned) ?
        fixedRight(str, len) :
        fixedLeft(str, len);

  return fixed;
}


