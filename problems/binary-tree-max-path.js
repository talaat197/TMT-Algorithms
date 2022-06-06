/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxPathSum = function(root) {
  let result = root.val
  
  const dfs = (node) => {
      if(!node) return 0
      
      const leftMax = Math.max(dfs(node.left), 0)
      const rightMax = Math.max(dfs(node.right), 0)
      
      // compute without parent
      result = Math.max(result, leftMax + rightMax + node.val)
      
      return Math.max(node.val + leftMax, node.val + rightMax)
  }
  
  dfs(root)
  
  return result
};