// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    this.expandButton.textContent = "expand";
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    console.log(this.expandButton)
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle() );
  }

  expandArticle() {
    this.domElement.classList.toggle('article-open');
    // this.expandButton.classList.toggle('close');
    // Using our reference to the domElement, toggle a class to expand or hide the article.

  }
}

/* START HERE: 
- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.
*/
const articles = document.querySelectorAll('.article');

articles.forEach( article => {
  return new Article(article);
});


// let articles;