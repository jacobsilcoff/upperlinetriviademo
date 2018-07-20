/*Initialize global variables for the question, answers, and repsonse divs
* as well as a token variable, and a variable for whether the user has the right
* answer selected
*/


/**
* Make a sendApiRequest function that
* fetches a new token (using https://opentdb.com/api_token.php?command=request)
* turns it into json, and then does a few set up tasks
* including setting the token, and adding an event listener to the response
* div.
* When done, display a new question
*/



/**
 * Make a function that will display a new question
 * Start by fetching a question from https://opentdb.com/api.php?amount=1&token=YOUR_TOKEN
 * Then convert to json
 * retrieve question and answers
 * Clear out divs
 * Put question on screen
 * Put all of the answers into the answer div using the getHtmlFromAnswer function,
 * adding correct answer in at a random position
 * Add event listenr to all .answer, that will call answer chosen
 */
 
 function getHtmlFromAnswer(ans)
 {
     return `<button type="button" class="btn btn-warning justify-content-center answer">${ans}</button>`
 }


/**
 * make a function to handle the answer being chosen
 * Should take two params, the answer selected and the correct answer
 * If the params are equal, set correct selected to true and add
 * button for next question (use class .btn and .btn-success)
 * Otherwise, set correct selected to false, and give a message saying
 * the user is wrong and must try again.
 * 
*/