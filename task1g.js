var arr=["apple","orange","lemon","pineapple","apple","watermelon","orange"];
function removeduplicate(data)
{
    return[...new Set(data)];
}
console.log(removeduplicate(arr));