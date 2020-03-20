# React Portfolio

A remake of my last portfolio in react!

## Installation

1. Clone the repository
2. Run NPM install
3. Run NPM start

## Deployment

- [Link to live site](https://alexisboundsportfolio.herokuapp.com/)
- [Link to repository](https://github.com/boundsalexis/react-portfolio)

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



## Built With

* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://www.javascript.com/)
* [React](https://reactjs.org/)



## Author

 * **Alexis Bounds**
    - [GitHub](https://github.com/boundsalexis) 
    - [LinkedIn](https://www.linkedin.com/in/boundsalexis/)



## License
[MIT](https://choosealicense.com/licenses/mit/)