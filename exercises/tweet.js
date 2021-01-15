/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments){
    this.author = author;
    this.content = content;
    this.time = timeStamp;
    this.likes = numberOfLikes;
    this.comments = comments;
  }
// define addLike method
  addLike(){
    this.likes += 1;
  }
// define addComment method
  addComment(newComment){
    this.comments += newComment;
  }

}

// delare 3 new object instance variables in Tweet class and assign values
var newTweet1 = new Tweet("Donald Trump", "I'm deeply sad inside.", "12/24/10", 20000, ["That's tight", "Nice"]);
var newTweet2 = new Tweet("Peter Muellerleile", "I don't use the Twitter please help me", "01/13/21", 4, ["Welcome!!", "Okay grandpa."]);
var newTweet3 = new Tweet ("Somebody else", "blah blah blah", "07/07/07", 0, []);

// increment numberOfLikes property +1 in newTweet2
newTweet2.addLike();

// add new elemet to comments property in newTweet3
newTweet3.addComment("THIS IS A NEW COMMENT!!!🥴");

// increment numberOfLikes property +54 in newTweet1 using 'for loop'
var newLikeBatch = 54;
for (i = 1; i <= newLikeBatch; i++) {
  newTweet1.addLike();
}

// log values of newTweet variables
console.log(newTweet1);
console.log(newTweet2);
console.log(newTweet3);
