function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class MarkdownPreviewer extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      rawInput: placeholder });}


  onChange(raw) {
    this.setState({ rawInput: raw });
  }

  render() {
    window.marked.setOptions({
      breaks: true });


    return (
      React.createElement("div", { className: "App" },
      React.createElement("header", { className: "sidebar" },
      React.createElement("a", { href: "https://reactjs.org/" }, React.createElement("img", { src: "https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg",
        alt: "markdown previewer logo",
        className: "logo" })),

      React.createElement("h1", { className: "brand" }, "\xA0\xA0Markdown previewer for ", React.createElement("a", { href: "https://reactjs.org/" }, "React"))),


      React.createElement("div", { className: "container" },

      React.createElement("h2", { className: "label" }, "editor"),
      React.createElement("textarea", {
        name: "editor",
        id: "editor",
        value: this.state.rawInput,
        onChange: e => this.onChange(e.target.value) })),



      React.createElement("article", { className: "container" },
      React.createElement("h2", { className: "label" }, "preview"),
      React.createElement("div", {
        className: "preview",
        id: "preview",
        dangerouslySetInnerHTML: {
          __html: window.marked(this.state.rawInput) } })),



      React.createElement("footer", { className: "bottombar", id: "bottombar" },
      React.createElement("div", { className: "container-fluid" },
      React.createElement("div", { class: "row" },
      React.createElement("div", { className: "col-lg-6" },
      React.createElement("small-2", { id: "credits" }, React.createElement("a", { href: "#", id: "link" }, "info@randandgalt.com")),
      React.createElement("small", { id: "credits" }, " | Rand & Galt Studio 2020 \xA9")),

      React.createElement("div", { class: "col-lg-6 text-right" },
      React.createElement("div", { class: "mc" },

      React.createElement("div", { class: "footer-social" },
      React.createElement("a", { href: "#" }, React.createElement("i", { class: "fab fa-facebook-f" })),
      React.createElement("a", { href: "#" }, React.createElement("i", { class: "fab fa-instagram" })),
      React.createElement("a", { href: "#" }, React.createElement("i", { class: "fab fa-codepen" })),
      React.createElement("a", { href: "#" }, React.createElement("i", { class: "fab fa-twitter" }))))))))));










  }}


const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png)`;

ReactDOM.render(React.createElement(MarkdownPreviewer, null), document.getElementById("root"));