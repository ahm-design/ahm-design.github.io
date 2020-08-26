/*global document*/
/*jslint unused:false, plusplus:true*/

var image = document.getElementsByClassName("area-title"),
    feild = document.getElementById("search-feild"),
    search = document.getElementById("search");


function searching()
{
    var i, lowerText,
        feildValue = feild.value.toLowerCase();
    
    for(i=0; i<image.length; i++)
    {
        lowerText = image[i].innerText.toLowerCase();
        
        if(lowerText.indexOf(feildValue) > -1)
        {
            image[i].parentElement.parentElement.style.display = "block";
        }
        
        else
        {
            image[i].parentElement.parentElement.style.display = "none";
        }
    }
}


search.onclick = searching;