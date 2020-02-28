# React Portfolio

A remake of my last portfolio in react!

## Installation

Clone the repository
Run NPM install
Run NPM start

## Live Link
- [Link to site repository](https://github.com/boundsalexis/react-portfolio)


## Code Snippets

1. Keeping the sticky footer in place

```css
.footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f5f5f5;
}
#footercontent{
text-align: center;
}

```
```jsx
function Footer(){
    return (
        <footer className="footer">
          <div className="container" id="footercontent">
            <span className="text-muted">
          <a className="fab fa-github" href="https://github.com/boundsalexis"> </a>
            Alexis Bounds
            <a className="fab fa-linkedin-in" href="https://www.linkedin.com/in/boundsalexis/"> </a>
            </span>
          </div>
        </footer>
    )

}
```

## Pages 
* There are 4 pages
* 4 Components
* Future goal of breaking it down into smaller components


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Bootstrap](https://getbootstrap.com/)
* [Javascript](https://www.javascript.com/)
* [React](https://reactjs.org/)



## Authors

 * **Alexis Bounds**
    - [GitHub](https://github.com/boundsalexis) 
    - [LinkedIn](https://www.linkedin.com/in/boundsalexis/)


## Github Links

- [Link to site repository](https://github.com/boundsalexis/react-portfolio)



## License
[MIT](https://choosealicense.com/licenses/mit/)