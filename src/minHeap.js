function MinHeap () {
  const _container = [null];

  // Node function constructor
  function Node(element, priority) {
    this.element = element;
    this.priority = priority;
  }

  this.insert = function (element, priority) {
    priority = priority || 0;
    if (element) {
      const newNode = new Node (element, priority);
      _container.push(newNode);
      let currNodeIndex = _container.length - 1;
      let parentNodeIndex = Math.floor(currNodeIndex / 2);
      
      while (_container[parentNodeIndex] && newNode.priority < _container[parentNodeIndex].priority) {
        const parent = _container[parentNodeIndex];
        _container[parentNodeIndex] = newNode;
        _container[currNodeIndex] = parent;
        currNodeIndex = parentNodeIndex;
        parentNodeIndex = Math.floor(currNodeIndex / 2);
      }
    }
    console.error(`MinHeap.insert(): Arguments missing!`);
    return false;
  }

  this.remove = function () {
    if (_container.length < 3) { 
      const toReturn = _container.pop();
      _container[0] = null;
      if (toReturn !== null) {        
        return toReturn;
      }
      console.error(`MinHeap.remove(): Empty heap!`);
      return false;
    }

    const toRemove = _container[1];
    _container[1] = _container.pop();
    let currIndex = 1;
    let [left, right] = [2 * currIndex, 2 * currIndex + 1];
    let currChildIndex = _container[right] && _container[right].priority <= _container[left].priority ? right : left;
    while (_container[currChildIndex] && _container[currIndex].priority >= _container[currChildIndex].priority) {
      let currNode = _container[currIndex];
      let currChildNode = _container[currChildIndex];
      _container[currChildIndex] = currNode;
      _container[currIndex] = currChildNode;
    }
    return toRemove.element;
  }

  this.peek = function () {
    return _container[1].element;
  }

  this.isEmpty = function () {
    return _container.length >= 2 ? false : true;
  }

  this.toArray = function () {
    _container.shift();
    return _container.map(item => item.element);
  }
}
module.exports = MinHeap;