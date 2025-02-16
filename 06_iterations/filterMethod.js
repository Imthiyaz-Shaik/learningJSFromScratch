//🔹 filter() Method
// Purpose: Filters elements based on a condition and returns a new array with only the elements that satisfy the condition.
// Return Value: A new array with fewer elements (or the same if all pass).
// Does Not Mutate: The original array remains unchanged.

const filterMethod = ['f','i','l','t','e','r']

 const storeVar = filterMethod.filter((item)=>(item=='f' || item == 'r')
)

console.log(storeVar)

const otherVar = filterMethod.filter((item)=>{
    console.log(item)
})

const nums = [1,2,3,4,5,6,7,8,9,10]

// IMPORTANT ---OBSERVE
 nums.filter((num)=>{ 
    const result = num>4;
     return console.log(result) 
    })
// Output : false false false false true true true true true true


//CORRECT Format .......

const result = nums.filter((num)=>num>4) //use RETURN keyword if {} are used
console.log(result)

//Big Example..........

const books = [
    {
      bookTitle: "To Kill a Mockingbird",
      genre: "Fiction",
      author: "Harper Lee",
      publishedOn: 1960
    },
    {
      bookTitle: "1984",
      genre: "Dystopian",
      author: "George Orwell",
      publishedOn: 1949
    },
    {
      bookTitle: "The Great Gatsby",
      genre: "Classic",
      author: "F. Scott Fitzgerald",
      publishedOn: 1925
    },
    {
      bookTitle: "Moby-Dick",
      genre: "Adventure",
      author: "Herman Melville",
      publishedOn: 1851
    },
    {
      bookTitle: "Pride and Prejudice",
      genre: "Romance",
      author: "Jane Austen",
      publishedOn: 1813
    },
    {
      bookTitle: "The Catcher in the Rye",
      genre: "Coming-of-Age",
      author: "J.D. Salinger",
      publishedOn: 1951
    },
    {
      bookTitle: "The Hobbit",
      genre: "Fantasy",
      author: "J.R.R. Tolkien",
      publishedOn: 1937
    },
    {
      bookTitle: "War and Peace",
      genre: "Historical Fiction",
      author: "Leo Tolstoy",
      publishedOn: 1869
    },
    {
      bookTitle: "Crime and Punishment",
      genre: "Psychological Fiction",
      author: "Fyodor Dostoevsky",
      publishedOn: 1866
    },
    {
      bookTitle: "Brave New World",
      genre: "Science Fiction",
      author: "Aldous Huxley",
      publishedOn: 1932
    }
  ];
  
 const res = books.filter((bk)=>bk.genre.includes('Fiction'))
  
 console.log(res) //OutPut : returns complete objects of ['to kill a mockinbrid','war and peace','crime and punishment, and lastly...'Brave New world']


 const yearFilter = books.filter((year)=>year.publishedOn < 1900)

 console.log(yearFilter)