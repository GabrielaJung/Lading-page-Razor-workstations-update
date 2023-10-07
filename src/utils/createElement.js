
function CreateElement(element, content = null, attrs = null, attrsValue = null) {
    let elemt = document.createElement(element);
    elemt.textContent=content;
  
    if (attrs === null || attrsValue === null) return elemt;
  
    elemt.setAttribute(attrs, attrsValue);
    return elemt
  }

  export default CreateElement