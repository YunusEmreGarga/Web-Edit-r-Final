const corpFlightBookings = function(bookings, n) {
    let res = new Array(n).fill(0)
    for (let v of bookings) {
      res[v[0] - 1] += v[2]
      if (v[1] < n) res[v[1]] -= v[2]
    }
    for (let i = 1; i < n; ++i) res[i] += res[i - 1]
    return res
  }
  document.write("Result : "+corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]],5));