let items = [["sdfoiajsd", 4, 3], ["test", 1, 2], ["sam", 3, 6], ["samsdfdytjs", 6, 6]]


function fetchItemsToDisplay(items, sortParameter, sortOrder, itemsPerPage, pageNumber) {
    let sortedItems = items 

    function CompareAscByPrice(a, b) {
        if (a[2] < b[2]) return -1;
        if (a[2] > b[2]) return 1;
        return 0;
    }
    
    function CompareDscByPrice(a, b) {
        if (a[2] < b[2]) return 1;
        if (a[2] > b[2]) return -1;
        return 0;
    }
    
    if (sortParameter === 1 && sortOrder === 0) {
        sortedItems = sortedItems.sort(CompareAscByRel)
    } else if (sortParameter === 1 && sortOrder === 1) {
        sortedItems = sortedItems.sort(CompareDscByRel)
    } else if (sortParameter === 2 && sortOrder === 0) {
        sortedItems = sortedItems.sort(CompareAscByPrice)
    } else if (sortParameter === 2 && sortOrder === 1) {
        sortedItems = sortedItems.sort(CompareDscByPrice)
    }
    
    const collectedItems = sortedItems.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage)
    
    const itemNames = []
    
    for (let i = 0; i < collectedItems.length; i++) {
        itemNames.push(collectedItems[i][0])
    }
    
    return itemNames; 
    
}


function CompareAscByRel(a, b) {
    if (a[1] < b[1]) return -1;
    if (a[1] > b[1]) return 1;
    return 0;
}

function CompareDscByRel(a, b) {
    if (a[1] < b[1]) return 1;
    if (a[1] > b[1]) return -1;
    return 0;
}

fetchItemsToDisplay(items, 1, 0, 2, 2)