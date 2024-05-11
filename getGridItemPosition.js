function getGridItemPosition(item, container) {
    const containerRect = container.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();

    const gridColumnStart = Math.ceil((((item.offsetLeft + 1) - containerRect.left) / item.clientWidth));
    const gridRowStart = Math.ceil(((itemRect.top + 1) - containerRect.top) / item.clientHeight);

    return {
        'column': gridColumnStart,
        'row': gridRowStart
    }
}