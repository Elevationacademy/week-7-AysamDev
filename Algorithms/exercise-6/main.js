const Encrypt = function(str)
{
    let encrypted = ''
    for(let i =0;i<str.length;i++)
    {
        if(  str[i] <= 'z' && str[i] >= 'a')
        {
        console.log(String.fromCharCode(str.charCodeAt(i) + 1))
        encrypted += String.fromCharCode(str.charCodeAt(i) + 1)
        }
        else
        {
            return "this contains other characters too"
        }
    }
    return encrypted
}

console.log(Encrypt("cat1"))