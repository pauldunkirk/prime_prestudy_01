var clicked = function () {
console.log("Hey! This works! Have a great day! OK?");
}


var clickToCountEs = function countE() {
  var phrase = prompt ("Which phrase would you like to examine?");
  if (typeof(phrase) != "string") {
    alert("That's not a valid entry, Buddy! Give it another try!");
    return false;
  } else {
    var eCount = 0;
    for (index=0; index<phrase.length; index++) {
      if (phrase.charAt(index) == 'e' || phrase.charAt(index) == 'E')
      eCount++;
    }
  }
    alert("There are " + eCount + " E's in \"" + phrase + "\".");
    return true;

}
countE();
