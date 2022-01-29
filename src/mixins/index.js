export const checkImage = (image)=>{
    if(image !== null){
        return `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${image}`
    }

    return "https://place-hold.it/300x400"
    
}

export const checkProfileImage = (image)=>{
    if(image !== null){
        return `https://www.themoviedb.org/t/p/w138_and_h175_face${image}`
    }
    return "https://place-hold.it/90x90"

}
export const checkTitle = (title,defaultTitle)=>{
if(title !== null){
    return title
}else if(defaultTitle !== null){
   return defaultTitle
}
return "Movie Title"
}
export const checkName = (name,defaultName)=>{
if(name !== null){
    return name
}else if(defaultName!== null){
   return defaultName
}
return "Tv Name"
}