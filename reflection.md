## Section 4 Reflection

1. How different did your workflow feel this week, considering we asked you to follow the Pomodoro technique?

It felt more intentional, systematic, and effective.  By setting a timer I was better able to hold myself to micro-level goals, and by taking Pom breaks I was able to stay energized and attentive.  It's amazing how helpful it is to sort of clear your "sensory palette" now and then - every time I spend even 5 minutes away from the computer I feel like I'm coming back with a new set of eyes.

1. Regarding the work you did around setting intentions in Step 1 of the Pomodoro technique - how did that go? Were you surprised by anything (did you find yourself way more focused than you realized, more distracted that you thought you'd be, estimating times accurately or totally off, etc)?

Setting intentions was a really useful approach - as I mentioned above, these "micro-level goals" not only helped me accomplish larger tasks by breaking them down into compartmentalized sub-tasks, but also allowed me to regularly feel a small sense of achievement, which then propelled me into the next task, time and time again.  Overall I was less distracted than I would be if I tried to plow through an assignment in, say, an uninterrupted 4+ hour block.  My planned focus/break Pom times weren't always exactly what worked best for me in the moment, but it was easy to adjust when necessary without throwing off the overall rhythm and effectiveness of the Pom technique.  

1. What is an Object, and how is it different from an Array in Javascript?

Both objects and arrays are *collections of data* with the potential to contain entire lists of values rather than just single values, but unlike an array, an object doesn't exist only to store such a list.  An object is used to *represent a "thing" in our code*, and within this "thing", the values aren't just indexed - they're attached to *keys* and combined to form characteristics we call *properties*.  Additionally, the *parameters* listed in the definition of an object allow us to use/manipulate its property values using *arguments* passed by "action" functions called *methods*.  Simply, an **object** represents a "thing", and has characteristics defined as **properties**, whereas an array creates and stores a list of data in a single variable. This gives the object a broader scope and a wider range of potential behaviors.

1. For each set of data, would an array or object be better to store it? Explain your choice.

  * List of all of the students in class: **object**
    - At first I thought **array**, but perhaps we'll end up wanting to make lists for additional classes of students.  So we should declare a "Students" `class` with "name" as a property, and then create an object instance for this particular class of students, for now.

  * List of states and their capitals: **object**
    - "State" is broad enough to be a class object, with each state a different object instance, and "capital" as a property in each.

  * List of things to pack for vacation: **array**
    - No need for multiple object instances or properties - this is simply one list of items to pack.

  * Names of all the Instagram accounts I follow: **array**
    - This would make more sense as an object if we wanted to store multiple pieces of data for each account, but it sounds like all we want is a simple list of names.  `myInstagramFollows = ["", "", "" ...]` should do.

  * List of student names and their cohort: **object**
    - For more or less the same reason provided in the first scenario, only instead of representing each cohort as a different object instance inside the same "Students" `class`, we'll create this "Students" `class` and include two properties - "name" and "cohort".  We couldn't do this with an array.

  * Ingredients and amount of each ingredient to bake a cake: **object**
    - Again, we have multiple characteristics we'll want represented by properties "ingredient" and "amount".  This would require 2 separate arrays, and maybe we'll end up wanting to do this for multiple cakes, which would be very inefficient.

  * All my favorite restaurants: **array**
    - This is another simple list - if we wanted to include more information about each of these restaurants, an object would be more appropriate, but for the purposes of this single collection of data, an array with do.

1. In this section, we talked about a `transaction item object`. It has keys that represent different properties a bank transaction would have, and values that store the data. In a banking app, this data would eventually be displayed in the browser for the user. Think of another Object in a web application that you use frequently. What is it? What keys might be on it? What are example values?

iMDB - the entire movie database is likely a class, with each film a different object instance, and dozens of properties (key-value pairs) within each:

```
class Movie {
    constructor(name, yearReleased, genre, director, lengthInMinutes, studio, avgUserRating) {
      this.name = name;
      this.year = yearReleased;
      this.genre = genre;
      this.director = director;
      this.length = lengthInMinutes;
      this.studio = studio;
      this.avg = avgUserRating;
    }
}

var mullhollandDrive = new Movie("Mulholland Drive", 2001, "David Lynch", 147, "Universal", 7.9);

console.log(mullhollandDrive);
```

1. What questions do you still have about classes and/or Objects?

After a whole lot of tinkering I think I finally get it!  All my questions really are just about how to manipulate classes and objects (and their components) in ways we haven't learned yet, especially **methods** I've seen that might not be deployed with the same dot-notation syntax that we've been using.
