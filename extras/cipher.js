$(document).ready(function (){
  var sentence = prompt("Enter a sentence to be encoded:");

  $(".forward").click(function (){
    alert(caller(sentence));
  });

  $(".reverse").click(function (){
    alert(reverseString(caller(sentence)));
  });



  var firstAndLast = function (sentence)
  {
    return sentence.charAt(0).toUpperCase() + sentence.charAt(sentence.length -1).toUpperCase();
  };

  var reverse2 = function (letters)
  {
    return letters.charAt(1) + letters.charAt(0);
  };

  var caller = function (sentence)
  {
    var addition = reverse2(firstAndLast(sentence));
    sentence = sentence + addition;
    sentence = midpointInFront(sentence);
    return sentence;
  };

  var midpointInFront = function (sentence)
  {
    var mid = sentence.charAt(Math.round((sentence.length - 2)/2));
    sentence =  mid + sentence;
    return sentence;
  }

  var reverseString = function (str)
  {
    return str.split("").reverse().join("");
  };

});
