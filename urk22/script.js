// через параграфы не вышло, поэтому сразу документ врайт

/*
выражение должно быть универсальным
*/
let strok = 'sss site.ru zzz site.com kkk';
let yoy = strok.replace(/\w+\.com|\w+\.ru/g, '<a href="http://$&">$&</a>');
document.write('ссылочки: ');
document.write(yoy);
