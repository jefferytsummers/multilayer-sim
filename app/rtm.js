/*****************************************************************************\
                        RTM - Ray Transfer Matrix
 Grab needed variables from the document and calculate:
 1.     n angles of transmission; one for each layer.
        Append these values to the t_angles array.
 2.     Phase changes for each layer. The phase of the wave is dependent on
        the index of refraction of the layer (n_j) it is in and the distance it
        traverses through the layer (thickness d_j). This can easily be seen 
        by looking at the waveform of an EM wave propagating through the stack:
        
    E_j(t,x,z) = E_oj*exp[i*(w*t+(2Pi/lambda)*[sin(theta_j)*x+cos(theta_j)*z]]

        So, as the wave propagates through a layer of index n_j and thickness
        d_j, the wave picks up a phase factor of
        
\*****************************************************************************/

// Grab varaibles from document
// layers = number of layers in the multilayer stack
// n1     = index of odd layers;          id: index1
// n2     = index of even layers;         id: index2
// d1     = thickness of odd layers       id: d1
// d2     = thickness of even layers      id: d2

$(document).ready(function() {
//     $("input[type=range]").click(function() {
    $("input[type=range]").on('click', function() {
       var n1 = document.getElementById("index1").value/100.0;
       var n2 = document.getElementById("index2").value/100.0;
       var d1 = document.getElementById("d1").value;
       var d2 = document.getElementById("d2").value;
           
       var test = document.getElementById("test");
       test.innerHTML = "n1: "  + String(n1) + " n2: " + String(n2) + " d1: " + String(d1) + " d2: " + String(d2);    
       // test.innerHTML = "Spaghetti";
    });
});
// theta_i      :  incident angle on the first layer
// reflection   :  array holding reflection values, 90 elements long
// transmission :  array holding transmission values, 90 elements long
function rtm(theta_i, reflection, transmission) {
       // Use Snell's law to calculate all angles of transmission
       // A total of "numlayers" angles should be calculated for each incident
       // angle:
       /* 
       angles = new Array[numlayers+1]
       angles[0] = 0;
       for (var i=1; i <= numlayers+1; i++) {
           angles[i] = math.atan2((indices[i-1]/indices[i])*math.sin(angles[i-1]))
       }
       */
}