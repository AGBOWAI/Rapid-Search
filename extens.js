document.getElementById("google").addEventListener("click", () => {
    const query = document.getElementById("searchBox").value
    if(query){
        const urlgoogle = `https://www.google.com/search?q=${encodeURIComponent(query)}`
        chrome.tabs.create({url: urlgoogle})
    }
})


document.getElementById("wikipedia").addEventListener("click", () => {
    const query = document.getElementById("searchBox").value
    if(query){
        const urlwiki = `https://fr.wikipedia.org/wiki/Special:Search?search=${ encodeURIComponent(query)}`
        chrome.tabs.create({url: urlwiki})
    }
})

document.getElementById("youtube").addEventListener("click", () => {
    const query = document.getElementById("searchBox").value
    if(query){
        const urlyout = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
        chrome.tabs.create({url: urlyout})
    }
})