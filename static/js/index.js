
$(document).ready( function() {
    
    // This controls the button for the c note.
    
    // This variable calls the cNote audio element in the HTML.
    var cNote = document.getElementById('cAudio');

    // This turns our <div id= "c"> into a button that plays our audio file when the box is pressed.
    $('#c').mousedown(function(){
        
        // This is a property that scrubs the audio file back to its start.
        cNote.currentTime = 0;
        
        // This plays the audio file.
        cNote.play();
    });
    
    // This controls the button for the d note.
    
    
    $('#d').mousedown(function(){
        dNote.currentTime = 0;
        dNote.play();
    });
    
    // This controls the button for the e note.
    
    
    
 
    // This controls the button for the f note.
    
    
    
    
    // This controls the button for the g note.
    
    
    
    
    // This controls the button for the a note.
    
    
    
    
    // This controls the button for the b note.
    
    
    
    
});