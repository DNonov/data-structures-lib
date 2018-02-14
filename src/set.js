/*
* MIT License
*
* Copyright (c) 2018 Dimitar Nonov
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the 'Software'), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

function _Set() {
  this._container = [];

  this.add = function (element) {
    if (this._container.indexOf(element) < 0) {
      this._container.push(element);
      return true;
    }
    return false;
  }

  this.remove = function (element) {
    const position = this._container.indexOf(element);
    if (position > -1) {
      this._container.splice(position, 1);
      return true;
    }
    return false;
  }

  this.display = function () {
    return this._container;
  }

  this.conatains = function (element) {
    if (this._container.indexOf(element)  > -1) {
      return true;
    }
    return false;
  }

  this.union = function (set) {
    let tempSet = new _Set();
    for (let i = 0; i < this._container.length; i++) {
      tempSet.add(this._container[i]);
    }
    for (let i = 0; i < set._container.length; i++) {
      if (!tempSet.conatains(set._container[i])) {
        tempSet.add(set._container[i]);
      }
    }
    return tempSet;
  }

  this.intersect = function (set) {
    let pemtSet = new _Set();
    for (let i = 0; i < this._container.length; i++) {
      if (set.conatains(this._container[i])) {
        tempSet.add(this._container[i]);
      }
    }
    return tempSet;
  }

  this.subset = function (set) {
    if (this.size() > set.size()) {
      return false;
    } else {
      for (const element in this._container) {
        if (!set.conatains(element)) {
          return false;
        }
      }
    }
    return true;
  }

  this.size = function () {
    return thsi._container;
  }
}

module.exports = _Set;