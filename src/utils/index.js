/*
但当参数中有中文的时候， 就会出现乱码的问题。 通过查询资料 原来是浏览器默认使用的是 encodeURI 对汉字进行的编码 所以在解码的时候就需要使用decodeURI  而不是 unescape 上面的代码稍微修改下后 就能解决中文乱码的问题了
*/
export function getUrlParam(name) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
  const r = window.location.search.substr(1).match(reg)
  if (r != null) return decodeURI(r[2])
  return null
}

// 比较日期
export function compareDate (date1, date2){
  const oDate1 = new Date(date1);
  const oDate2 = new Date(date2);
  if (oDate1.getTime() > oDate2.getTime()){
    return 1;
  } else if (oDate1.getTime() < oDate2.getTime()) {
    return -1;
  } else {
    return 0;
  }
}

// 显示遮罩层
export function showMask() {
  const mask = document.getElementById('mask');
  mask.style.display = 'block';

  // 此刻屏幕不可以滑动
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';// 手机版设置这个。
}

// 隐藏遮罩层
export function hideMask() {
  const mask = document.getElementById('mask');
  mask.style.display = 'none';

  // 此刻屏幕可以滑动
  document.documentElement.style.overflow = 'visible';
  document.body.style.overflow = 'visible';// 手机版设置这个。
}
