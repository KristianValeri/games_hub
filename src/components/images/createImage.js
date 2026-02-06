import "./image.css"


export function createImage (src, style, alt){
     let image = document.createElement("img")
     image.src = src
     image.alt = alt

    if(style != null){
        image.className = style
    }

    return image
}
