q = 1;
p = [];
i = 2;
for(;;) {
  f = 1;
  for (j = 0; j < p.length; j++) {
    if (p[j] * p[j] > i) break;
    if (i % p[j] == 0) {
      f = 0;
      break;
    }
  }
  if (f) {
    p.push(i);
    if (q * i > 1000000) break;
    q *= i;
  }
  i++;
}

ans = q;
document.write('Result : ', ans);