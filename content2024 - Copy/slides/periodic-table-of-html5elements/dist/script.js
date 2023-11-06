function Element(props) {
  props = props || {};

  let className = [
  'cell',
  props.marked !== undefined ? 'cell--marked' : false].
  filter(e => !!e).
  join(' ');

  let elemStyle = {
    '--element-color': `var(--color-${props.group})`,
    '--element-hover-bgcolor': `var(--hover-bgcolor-${props.group})`,
    '--element-hover-color': `var(--hover-color-${props.group})` };


  function over() {
    props.onHover(props.group);
  }

  function out() {
    props.onHover('');
  }

  var tagName = props.children;

  let link = `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${tagName.toLowerCase()}`;

  return /*#__PURE__*/(
    React.createElement("li", { onMouseOver: over,
      onMouseOut: out,
      className: className,
      style: elemStyle }, /*#__PURE__*/

    React.createElement("a", { href: link, target: "_blank", className: "element" },
    props.children)));



}

function Spacer(props) {
  let className = [
  "cell",
  "cell--spacer-" + props.width].
  join(' ');

  return /*#__PURE__*/(
    React.createElement("li", { className: className }));


}

class PeriodicTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeGroup: '' };

  }

  onChildOver(group) {
    this.setState({ activeGroup: group });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("ul", { className: "period-table" },

      React.Children.map(this.props.children, element => {
        if (element.type === Element) {
          var props = {
            onHover: this.onChildOver.bind(this) };


          if (element.props.group === this.state.activeGroup)
          props.marked = true;

          element = React.cloneElement(element, props);
        }
        return element;
      })));



  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(PeriodicTable, null, /*#__PURE__*/
React.createElement(Element, { group: "root-element" }, "html"), /*#__PURE__*/
React.createElement(Spacer, { width: "15" }), /*#__PURE__*/
React.createElement(Element, { group: "table-content" }, "col"), /*#__PURE__*/
React.createElement(Element, { group: "table-content" }, "table"), /*#__PURE__*/

React.createElement(Element, { group: "document-metadata" }, "head"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "span"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "u"), /*#__PURE__*/
React.createElement(Spacer, { width: "8" }), /*#__PURE__*/
React.createElement(Element, { group: "forms" }, "fieldset"), /*#__PURE__*/
React.createElement(Element, { group: "forms" }, "form"), /*#__PURE__*/
React.createElement(Element, { group: "forms" }, "input"), /*#__PURE__*/
React.createElement(Element, { group: "embedded-content" }, "object"), /*#__PURE__*/
React.createElement(Element, { group: "embedded-content" }, "iframe"), /*#__PURE__*/
React.createElement(Element, { group: "table-content" }, "colgroup"), /*#__PURE__*/
React.createElement(Element, { group: "table-content" }, "tr"), /*#__PURE__*/

React.createElement(Element, { group: "document-metadata" }, "title"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "a"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "s"), /*#__PURE__*/
React.createElement(Spacer, { width: "8" }), /*#__PURE__*/
React.createElement(Element, { group: "forms" }, "meter"), /*#__PURE__*/
React.createElement(Element, { group: "forms" }, "select"), /*#__PURE__*/
React.createElement(Element, { group: "forms" }, "option"), /*#__PURE__*/
React.createElement(Element, { group: "embedded-content" }, "source"), /*#__PURE__*/
React.createElement(Element, { group: "embedded-content" }, "embed"), /*#__PURE__*/
React.createElement(Element, { group: "table-content" }, "caption"), /*#__PURE__*/
React.createElement(Element, { group: "table-content" }, "td"), /*#__PURE__*/

React.createElement(Element, { group: "document-metadata" }, "meta"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "rt"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "dfn"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "em"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "i"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "small"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "ins"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "br"), /*#__PURE__*/
React.createElement(Element, { group: "text-content" }, "p"), /*#__PURE__*/
React.createElement(Element, { group: "text-content" }, "div"), /*#__PURE__*/
React.createElement(Element, { group: "text-content" }, "blockquote"), /*#__PURE__*/
React.createElement(Element, { group: "forms" }, "legend"), /*#__PURE__*/
React.createElement(Element, { group: "forms" }, "optgroup"), /*#__PURE__*/
React.createElement(Element, { group: "forms" }, "output"), /*#__PURE__*/
React.createElement(Element, { group: "image-multimedia" }, "map"), /*#__PURE__*/
React.createElement(Element, { group: "embedded-content" }, "param"), /*#__PURE__*/
React.createElement(Element, { group: "interactive-elements" }, "menu"), /*#__PURE__*/
React.createElement(Element, { group: "table-content" }, "th"), /*#__PURE__*/

React.createElement(Element, { group: "document-metadata" }, "base"), /*#__PURE__*/
React.createElement(Element, { group: "scripting" }, "canvas"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "abbr"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "time"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "b"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "strong"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "del"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "bdi"), /*#__PURE__*/
React.createElement(Element, { group: "text-content" }, "figcaption"), /*#__PURE__*/
React.createElement(Element, { group: "text-content" }, "ol"), /*#__PURE__*/
React.createElement(Element, { group: "text-content" }, "dl"), /*#__PURE__*/
React.createElement(Element, { group: "forms" }, "label"), /*#__PURE__*/
React.createElement(Element, { group: "forms" }, "textarea"), /*#__PURE__*/
React.createElement(Element, { group: "forms" }, "datalist"), /*#__PURE__*/
React.createElement(Element, { group: "image-multimedia" }, "track"), /*#__PURE__*/
React.createElement(Element, { group: "image-multimedia" }, "img"), /*#__PURE__*/
React.createElement(Element, { group: "interactive-elements" }, "command"), /*#__PURE__*/
React.createElement(Element, { group: "table-content" }, "tbody"), /*#__PURE__*/

React.createElement(Element, { group: "document-metadata" }, "link"), /*#__PURE__*/
React.createElement(Element, { group: "scripting" }, "noscript"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "q"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "var"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "sub"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "mark"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "kbd"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "wbr"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "rtc"), /*#__PURE__*/
React.createElement(Element, { group: "text-content" }, "main"), /*#__PURE__*/
React.createElement(Element, { group: "text-content" }, "dt"), /*#__PURE__*/
React.createElement(Element, { group: "text-content" }, "hr"), /*#__PURE__*/
React.createElement(Element, { group: "text-content" }, "pre"), /*#__PURE__*/
React.createElement(Element, { group: "forms" }, "keygen"), /*#__PURE__*/
React.createElement(Element, { group: "image-multimedia" }, "video"), /*#__PURE__*/
React.createElement(Element, { group: "image-multimedia" }, "audio"), /*#__PURE__*/
React.createElement(Element, { group: "interactive-elements" }, "summary"), /*#__PURE__*/
React.createElement(Element, { group: "table-content" }, "thead"), /*#__PURE__*/

React.createElement(Element, { group: "document-metadata" }, "style"), /*#__PURE__*/
React.createElement(Element, { group: "scripting" }, "script"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "cite"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "samp"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "sup"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "ruby"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "bdo"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "code"), /*#__PURE__*/
React.createElement(Element, { group: "inline-text-semantics" }, "rp"), /*#__PURE__*/
React.createElement(Element, { group: "text-content" }, "ul"), /*#__PURE__*/
React.createElement(Element, { group: "text-content" }, "dd"), /*#__PURE__*/
React.createElement(Element, { group: "text-content" }, "figure"), /*#__PURE__*/
React.createElement(Element, { group: "text-content" }, "li"), /*#__PURE__*/
React.createElement(Element, { group: "forms" }, "progress"), /*#__PURE__*/
React.createElement(Element, { group: "forms" }, "button"), /*#__PURE__*/
React.createElement(Element, { group: "image-multimedia" }, "area"), /*#__PURE__*/
React.createElement(Element, { group: "interactive-elements" }, "details"), /*#__PURE__*/
React.createElement(Element, { group: "table-content" }, "tfoot"), /*#__PURE__*/

React.createElement(Spacer, { width: "2" }), /*#__PURE__*/
React.createElement(Element, { group: "content-sectioning" }, "footer"), /*#__PURE__*/
React.createElement(Element, { group: "content-sectioning" }, "aside"), /*#__PURE__*/
React.createElement(Element, { group: "content-sectioning" }, "header"), /*#__PURE__*/
React.createElement(Element, { group: "content-sectioning" }, "section"), /*#__PURE__*/
React.createElement(Element, { group: "content-sectioning" }, "address"), /*#__PURE__*/
React.createElement(Element, { group: "content-sectioning" }, "h1"), /*#__PURE__*/
React.createElement(Element, { group: "content-sectioning" }, "h2"), /*#__PURE__*/
React.createElement(Element, { group: "content-sectioning" }, "h3"), /*#__PURE__*/
React.createElement(Element, { group: "content-sectioning" }, "h4"), /*#__PURE__*/
React.createElement(Element, { group: "content-sectioning" }, "h5"), /*#__PURE__*/
React.createElement(Element, { group: "content-sectioning" }, "h6"), /*#__PURE__*/
React.createElement(Element, { group: "content-sectioning" }, "body"), /*#__PURE__*/
React.createElement(Element, { group: "content-sectioning" }, "article"), /*#__PURE__*/
React.createElement(Element, { group: "content-sectioning" }, "nav"), /*#__PURE__*/
React.createElement(Element, { group: "content-sectioning" }, "dialog"), /*#__PURE__*/
React.createElement(Element, { group: "obsolete-depricated" }, "hgroup"), /*#__PURE__*/

React.createElement(Element, { group: "obsolete-depricated" }, "frameset"), /*#__PURE__*/
React.createElement(Element, { group: "obsolete-depricated" }, "acronym"), /*#__PURE__*/
React.createElement(Element, { group: "obsolete-depricated" }, "xmp"), /*#__PURE__*/
React.createElement(Element, { group: "obsolete-depricated" }, "bgsound"), /*#__PURE__*/
React.createElement(Element, { group: "obsolete-depricated" }, "noembed"), /*#__PURE__*/
React.createElement(Element, { group: "obsolete-depricated" }, "applet"), /*#__PURE__*/
React.createElement(Element, { group: "obsolete-depricated" }, "frame"), /*#__PURE__*/
React.createElement(Element, { group: "obsolete-depricated" }, "strike"), /*#__PURE__*/
React.createElement(Element, { group: "obsolete-depricated" }, "big"), /*#__PURE__*/
React.createElement(Element, { group: "obsolete-depricated" }, "font"), /*#__PURE__*/
React.createElement(Element, { group: "obsolete-depricated" }, "centre"), /*#__PURE__*/
React.createElement(Element, { group: "obsolete-depricated" }, "tt"), /*#__PURE__*/
React.createElement(Element, { group: "obsolete-depricated" }, "plaintext"), /*#__PURE__*/
React.createElement(Element, { group: "obsolete-depricated" }, "dir"), /*#__PURE__*/
React.createElement(Element, { group: "obsolete-depricated" }, "basefont"), /*#__PURE__*/
React.createElement(Element, { group: "obsolete-depricated" }, "noframes"), /*#__PURE__*/
React.createElement(Element, { group: "obsolete-depricated" }, "blink"), /*#__PURE__*/
React.createElement(Element, { group: "obsolete-depricated" }, "isindex")),

document.getElementById('app-container'));