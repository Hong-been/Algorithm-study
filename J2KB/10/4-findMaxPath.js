// import UnitTest from 'unitTest';
/*

           1
          / \
        2    3
       /\    / \
      4 11  5   6 
           /\  /
          7 8 9

[5,3,6,9]
[11,2,1,3,6,9] ***

1의
왼 return해서 받은값 "13,[11,2]"
오 returned "18,[9,6,3]"
curNode travel : 자기자신을 root로 하는 path를 업데이트할지 체크하고 업데이트함.(왼->root->오) return 왼->root || 오->root-(둘중 더 큰값)

2의 왼- 4,[4]
2의 오- 11,[11]
2의 travel-13,[11,2]

3의 왼-5,[5]
3의 오- 15,[9,6]
3의 traval- 18,[9,6,3]

6의 왼-"9,[9]"
6의 오-X(노드가 없으면 "0,[]")
6 traval- return [9,6]

maxSum=23
path=[2,11,1,3,6]

N: # of nodes
H: height of graph
time O(N)
space O(H+2H)=>O(H)
*/
function Node(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}


const solution = (root) => {
  if(!root) return [];

  let maxSum=Number.MIN_VALUE;
  let path=[];

  const dfs = (curNode)=>{
    let leftSum=0;
    let rightSum=0;
    let leftPath=[];
    let rightPath=[];

    // left존재하면 dfs로 들어감
    // return해서 받은 값은 [leftSum,leftPath]
    if(curNode.left) [leftSum,leftPath] = dfs(curNode.left);

    // right존재하면 dfs로 들어감
    // return해서 받은 값은 [rightSum,rightPath]
    if(curNode.right) [rightSum,rightPath] = dfs(curNode.right);

    // curNode travel
    const curSum = leftSum+rightSum+curNode.val;
    if(maxSum < curSum){
      maxSum = curSum;
      const reversed = [...rightPath].reverse();
      path = [...leftPath,curNode.val,...reversed];
    } 
    // 자기자신을 root로 하는 path를 업데이트할지 체크하고 maxSum, path 업데이트함.(왼->root->오)

    return leftSum>rightSum ? [leftSum+curNode.val,[...leftPath, curNode.val]] : [rightSum+curNode.val,[...rightPath, curNode.val]];
    // return 왼->root || 오->root (둘중 더 큰값)
  }

  dfs(root);

  console.log(path);
  return path;
};

const arguments = [
  {
		input: [
			new Node(1, new Node(2, new Node(4)), new Node(3, new Node(5), new Node(6)))
		],
		expected: [4,2,1,3,6]
	},
	{
		input: [
			new Node(
        1,
        new Node(2, new Node(1), new Node(3)),
        new Node(3, new Node(5, new Node(7), new Node(8)), new Node(6, new Node(9)))
      )
		],
		expected: [8,5,3,6,9]
	},
	
  {
		input: [
			new Node(
        1,
        new Node(2, new Node(4), new Node(11)),
        new Node(3, new Node(5, new Node(7), new Node(8)), new Node(6, new Node(9)))
      )
		],
		expected: [11,2,1,3,6,9]
	},
];

arguments.forEach((argu)=>solution(...argu.input));
// solution(...arguments[2].input);