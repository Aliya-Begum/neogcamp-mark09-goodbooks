import "./styles.css";
import { useState } from "react";

const bookList = {
  javascript: [
    {
      bookName: "Title : JavaScript-The Good Parts",
      author: "Author : Douglas Crockfors",
      rating: "Rating : 4.2/5",
      description:
        "Description : Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. Considered the JavaScript expert by many people in the development community, author Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language-ideas such as functions, loose typing, dynamic objects, and an expressive object literal notation."
    },
    {
      bookName: "Title : JavaScript-The Definitive Guide",
      author: "Author : David Flanagan",
      rating: "Rating : 4.2/5",
      description:
        "Description : JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. It begins by explaining the JavaScript language itself, in detail, from the bottom up."
    },
    {
      bookName: "Title : Eloquent javaScript ",
      author: "Author : Marijn Haverbeke",
      rating: "Rating : 4.5/5",
      description:
        "Description : This is a book about instructing computers. Computers are about as common as screwdrivers today, but they are quite a bit more complex, and making them do what you want them to do isn’t always easy. Most programming is done with programming languages. A programming language is an artificially constructed language used to instruct computers"
    }
  ],
  angular: [
    {
      bookName: "Title :Angular Development with TypeScript",
      author: "Author : Anton Moiseev and Yakov Fain",
      rating: "Rating : 4.6/5",
      description:
        "Dexcription : Angular Development with TypeScript, Second Edition teaches you how to build web applications with Angular and TypeScript. Written in an accessible, lively style, this illuminating guide covers core concerns like state management, data, forms, and server communication as you build a full-featured online auction app."
    },
    {
      bookName: "Title : A journey to Angualr Development",
      author: "Author : Sukesh Marla ",
      rating: "Rating : 4.5/5",
      description:
        "Description : It covers the essentials of ES6, Webpack, and TypeScript to write Angular applications and make the development of Angular apps more enticing, innovative, and scalable. The book talks about modules, directives, components, data binding, routing, and many more components and functions."
    },
    {
      bookName: "Title : Angular CookBook",
      author: "Author : Muhammad Ahsan Ayaz",
      rating: "Rating : 4.4/5",
      description:
        "Description : You'll explore a wide range of recipes across key tasks in web development that will help you build high-performance apps. The book starts by taking you through core Angular concepts such as Angular components, directives, and services to get you ready for building frontend web apps."
    }
  ],
  java: [
    {
      bookName: "Title : Effective Java",
      author: "Author : Joshua bloch",
      rating: "Rating : 4.7/5",
      description:
        "Description: Java 7 and Java 8 introduced new features and functions including, forEach() method in Iterable interface, default and static methods in Interfaces, Functional Interfaces and Lambda Expressions, Java Stream API for Bulk Data Operations on Collections, Java Time API, Collection API improvements, Concurrency API improvements, and Java IO improvements. "
    },
    {
      bookName: "Title  : Modern Java in action",
      author: "Author : Raoul-Gabriel Urma, Mario Fusco, Alan Mycroft ",
      rating: "Rating : 4.6/5",
      description:
        "Description : Modern Java in Action connects new features of the Java language with their practical applications. Using crystal-clear examples and careful attention to detail, this book respects your time. It will help you expand your existing knowledge of core Java as you master modern additions like the Streams API and the Java Module System, and learn how functional concepts can help you write code that’s easier to read and maintain "
    },
    {
      bookName: "Title : Thinking in Java  ",
      author: "Author : Bruce Eckel",
      rating: "Rating : 4.2/5",
      description:
        "Description : Thinking in Java is considered as one of the most complete Java books containing everything from the fundamentals to advanced topics. The latest edition covers several topics of Java 8 features in detail. It serves as an excellent resource for intermediate and advanced developers serious about object-oriented programming."
    }
  ]
};

var bookGenreName = Object.keys(bookList);
export default function App() {
  var [genre, setGenre] = useState("javascript");
  function OnClickHander(bookGenreType) {
    setGenre(bookGenreType);
  }
  return (
    <div className="App">
      <h1 id="header">
        <span role="img" aria-label="books">
          📚
        </span>{" "}
        Good Books
      </h1>
      <small id="heading">
        Checkout my favorite books. Select a genre to get started.
      </small>
      <div class="genre-div">
        {bookGenreName.map(function (bookGenre) {
          return (
            <button class="button" onClick={() => OnClickHander(bookGenre)}>
              {bookGenre}
            </button>
          );
        })}
      </div>
      <hr class="break" />
      <div class="list">
        {bookList[genre].map(function (bookNameAndRating) {
          return (
            <ul class="list-inline">
              <li class="div-list">
                <div class="list-item">{bookNameAndRating.bookName}</div>
                <div class="list-item">{bookNameAndRating.author}</div>
                <div class="list-item">{bookNameAndRating.rating}</div>
                <div class="list-item">{bookNameAndRating.description}</div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
