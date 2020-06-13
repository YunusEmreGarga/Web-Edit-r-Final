const twoCitySchedCost = function(costs) {
    const N = costs.length
    let res = 0
    const refund = []
    for(let i = 0; i < N; i++) {
      refund[i] = costs[i][1] - costs[i][0]
      res += costs[i][0]
    }
    refund.sort((a, b) => a - b)
    for(let i = 0; i < N / 2; i++) {
      res += refund[i]
    }
    return res
  };
  
  document.write("Result : ", twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]]))
  
  