function sortedList() {
  return {
    list: [],
    size: 0,
    add: function (element) {
      this.list.push(element);
      this.size++;
      this.list.sort((a, b) => a - b);
    },
    remove: function (index) {
      if (index >= 0 && index < this.size) {
        this.list.splice(index, 1);
        this.size--;
      }
    },
    get: function (index) {
      if (index >= 0 && index < this.size) {
        return this.list[index];
      }
    },
  };
}