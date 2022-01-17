 
 최종부모가 다르면? root--;
 
 */
var makeConnected = function(n, c) {
    //edge
    if(c.length < n-1) return -1;
    
    const p = [...Array(n).keys()];
    
    let root=n;
    
    const find = (x)=>{
        while(x!==p[x]){
            x=p[x];
        }
        return x;
    }
    
    for(let [c1,c2] of c){
        const p1=find(c1);
        const p2=find(c2);
        // console.log(p,c2,p2);
        if(p1!==p2){
            root--;
            p[p2]=p1;
        }
    }
    
    // console.log(p);
    return root-1;
};
// Runtime: 132 ms, faster than 87.28% of JavaScript online submissions for Number of Operations to Make Network Connected.
// Memory Usage: 53.5 MB, less than 80.35% of JavaScript online submissions for Number of Operations to Make Network Connected.