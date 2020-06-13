ans = 0;
f = [];
for (a = 2; a <= 100; a ++) {
  n = [];
  q = a;
  for (j = 2; j < q; j++) {
    while (q % j == 0) {
      q = q / j;
      n.push(j);
    }
  }
  if (q != 1) n.push(q);
  for (b = 2; b <= 100; b++) {
    m = [];
    for (i = 1; i <= b; i++) {
      for (k in n) m.push(n[k]);
    }
    m.sort();
    m = String(m);
    if (!f[m]) ans++;
    f[m] = 1;
  }
}document.write("Result : "+ans);

