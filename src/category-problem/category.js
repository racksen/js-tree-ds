class Category {
  constructor({ id, name = '', keywords = '' }) {
    this.id = id;
    this.name = name;
    this.keywords = keywords;
    this.parentCategoryId = null;
    this.parent = null;
    this.children = [];
  }

  add(node) {
    node.parent = this;
    node.parentCategoryId = this.id;
    this.children.push(node);
  }
}

export {Category};       