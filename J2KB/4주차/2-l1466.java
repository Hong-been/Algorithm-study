 class Solution {
    public int minReorder(int n, int[][] connections) {
        List<List<Integer>> graph = new ArrayList<>();
        
        for(int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }
        
        for(int[] c : connections) {
            int from = c[0];
            int to = c[1];
            
            graph.get(from).add(to);
            graph.get(to).add(-from);
        }
        
        return dfs(graph, new boolean[n], 0);
    }
    
    public int dfs(List<List<Integer>> graph, boolean[] visited, int from) {
        int cnt = 0;
        
        visited[from] = true;
        
        for(int to : graph.get(from)) {
            if(!visited[Math.abs(to)])
                cnt += dfs(graph, visited, Math.abs(to)) + (to > 0 ? 1 : 0);
        }
        
        return cnt;
    }
}