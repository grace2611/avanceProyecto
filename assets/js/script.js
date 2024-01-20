/*// url: https://picsum.photos
function generateUrl() {
    //GENERAMOS UN URL ALEATORIO
    let id = math.round(math.random() * 500);
    return `https://picsum.photos/id/${id}/info`;

}
*/

//CONSUMO DE API
function getPic() {
    $.ajax({
        type:"GET",
        url:
        dataType:"json",
        sucess: function(data...) {
            ; 
        }
    })
}