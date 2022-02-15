class SortedList {
  constructor() {
    this.items = [], 
    this.length = this.items.length;
  }

  add(item) {
    // if(item) {
      this.items.push(item);
      this.length += 1

      this.items.sort(function (a, b) {
        return a - b;

      });

    // }

    return this.items
  }

  get(pos) {
    if(pos <= this.length && pos >= 0){
      return this.items[pos]

    } else {
      throw new Error('OutOfBounds');

    }

  }

  max() {
    if( this.items.length > 0) {
      return Math.max(...this.items)
    } else {
      
      throw new Error('EmptySortedList');
    }
    
    
  }

  min() {
    if( this.items.length > 0) {
      return Math.min(...this.items)
    } else {
      
      throw new Error('EmptySortedList');
    }
    
  }

  sum() {
    return this.items.reduce((acc, elem) => {
      return acc + elem


    }, 0)
  }

  avg() {

    
    if(this.items.length > 0){
    return this.sum(this.items) / this.length
  } else {
    throw new Error('EmptySortedList');
  }

}
}
module.exports = SortedList;
