export default function singularize(text) { 
  return text.split(" ").map(text => text.slice(0, -1)).join(" ") 
}
