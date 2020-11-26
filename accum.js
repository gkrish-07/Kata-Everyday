//This time no story, no theory. The examples below show you how to write function accum:

//Examples:

//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"
//The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s) {
  let tempStr = '';
  let str = '';
  for(let i = 0; i<s.length;i++){
    if(i==0){
      str = s.charAt(i).toUpperCase();
    }
    else
      for(let j = 1; j<=i;j++){
        tempStr = s.charAt(j).toUpperCase();
        if(s.charAt(j) == s.charAt(j).toLowerCase())
        tempStr += s.charAt(j).repeat(j);
        else
          tempStr += s.charAt(j).toLowerCase().repeat(j);
      }
    str += tempStr + '-';
    tempStr = '';
  }
  return str.slice(0,-1);
  
}
