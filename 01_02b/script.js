 const data = [
  { id: 1, parent: 0, text: "Top-level comment 1" },
  { id: 2, parent: 0, text: "Top-level comment 2" },
  { id: 3, parent: 1, text: "Reply to Top-level comment 1" },
  { id: 4, parent: 3, text: "Reply to Reply to Top-level comment 1" },
];

/**
 * Restructure the flat data array into a nested array.
 *
 * @param {array} data
 * @returns {array}
 */
function restructureArray(data) {
  // Create an array to hold the root elements
  const root = [];
  const dataMap = {};
  data.forEach((item) => {
    dataMap[item.id] = {
      ...item,
      children: []
    }
  })

  data.forEach((item) => {
    // the key here is to push item from dataMap instead of item from data array
    // item in data array is isolated
    const parent = dataMap[item.parent]
    if (parent) {
      parent.children.push(dataMap[item.id])
    } else {
      root.push(dataMap[item.id])
    }
  })
  return root;
}

const result = restructureArray(data);

// Output the resut array as a tree.
console.log(JSON.stringify(result, null, 2));
