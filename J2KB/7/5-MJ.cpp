class Solution {
private:
  using ii = pair<int, int>;
  using arr = array<int, 3>;
  vector<vector<ii>> path;
public:
  int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {
    // 배열 path의 크기를 n만큼 초기화
    path.resize(n);
    // flights의 정보를 path에 데이터로 입력
    // 배열 path의 특정index(from)에서 갈수 있는 다음 항공편과, 가격이 입력
    // path[from] = [ {to, price}, {to, price}, ... ]
    for (auto f : flights){
      int from = f[0], to = f[1], price = f[2];
      path[f[0]].push_back(ii(f[1], f[2]));
    }
    
    // dijkstra 알고리즘을 위한 priority queue 생성
    priority_queue<arr> pq;

    // 경유 내용 저장, 경유 한도인 k보다 큰수로 초기화
    vector<int> visited(n, INT_MAX);

    // priority queue에 차례대로 가격, 시작노드, 경유한도를 입력
    pq.push({ 0, src, 0 });

    while (!pq.empty()) {
      // 가격, 현재노드, 경유 숫자
      auto [price, start, visitedCnt] = pq.top();
      // price를 양수로 초기화
      price = -price;

      // 목적지에 도달한 경우 price반환
      // priority queue에는 front에 최소값이(음수변환) front에 오므로
      // 현재 노드가 dst이면 그게 최소가격으로 출력이 됨
      if (start == dst) return price;

      pq.pop();

      // 현재 노드까지 오는데 경유한 숫자(visitedCnt)가 경유 한도(k)보다 클경우 또는
      // visited의 현재 노드에 입력되어 있는 경유 숫자(visited[start])보다 현재 경유 숫자가 더 클 경우 continue;
      if (visitedCnt > k || visited[start] != INT_MAX && visitedCnt > visited[start]) continue;
      // 현재 방문한 노드에 경유한 숫자를 저장
      visited[start] = visitedCnt;
      for (auto& [next, p] : path[start]) {
        // priority queue에 갱신한 가격을 음수로, 다음에 방문할 노드, 경유 숫자를 증가 
        pq.push({ -(price + p), next, visitedCnt + 1 });
      }
    }

    //목적지까지 도달에 실패한 경우 -1 반환
    return -1;
  }
};