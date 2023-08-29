// Выравнивание элементов по максимальной высоте 
function setMaxHeight(elems) {
    var maxHeight = 0

    $(elems).each(function (index, elem) {
        var height = $(elem).height()
        if (height > maxHeight) { maxHeight = height }
    })

    $(elems).each(function (index, elem) {
        $(elem).height(maxHeight)
    })
}
