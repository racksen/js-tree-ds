class Categories {
  constructor(rootNode) {
    this.root= rootNode;    
  }

  FindByCategoryId(id) {
    //why breadth first traverse
    // 
    let retObj = {};
    const nodes= [this.root];

    while(nodes.length) {
      const node = nodes.shift();
      if(node.id == id) {
        retObj = node;
        retObj.keywords = this._getKeywords(node);
        break;
      } else {
        nodes.push(...node.children)
      } 
    }
    return retObj;
  }

  GetCategoriesAtTheLevel(tree_level) {
    let node_level = 0;
    const retCategories = [];
    const nodes = [this.root, 'LEVEL_UP'];
    while (nodes.length) {
      const node = nodes.shift();
      if (node === "LEVEL_UP") {
        if (node_level == tree_level) {
          break;
        } else {
          node_level++;
          nodes.push(node);
        }
      } else {
        if (node_level == tree_level) {
          retCategories.push(node.id);
        }
        nodes.push(...node.children);
 
      }
    }
    return retCategories;
  }

  // private function but still it will be exposed outside.
  _getKeywords(node) {
    if (node.keywords && node.keywords.length > 0) {
      return node.keywords;
    } else {
      return this._getKeywords(node.parent);
    }
  }
}

export {Categories}; 