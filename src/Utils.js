function scrollToElement (elementId) {
  const element = document.querySelector(elementId);
  const to = element.offsetTop;
  console.log(element.clientHeight)
  window.scroll({
    top: to + element.clientHeight,
    behavior: "smooth"
  });
}

export default scrollToElement;