import React, { Component } from 'react';
import { View, WebView, StatusBar } from 'react-native';

export default class App extends Component {
    render() {

        var webViewCode = `
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript" src="https://static.codehs.com/gulp/89cd3118fd3b4fab9f913ce7091f1761944163e8/chs-js-lib/chs.js"></script>

<style>
    body, html {
        margin: 0;
        padding: 0;
    }
    canvas {
        margin: 0px;
        padding: 0px;
        display: inline-block;
        vertical-align: top;
    }
    #btn-container {
        text-align: center;
        padding-top: 10px;
    }
    #btn-play {
        background-color: #8cc63e;
    }
    #btn-stop {
        background-color: #de5844;
    }
    .glyphicon {
        margin-top: -3px;
        color: #FFFFFF;
    }
</style>
</head>

<body>
    <div id="canvas-container" style="margin: 0 auto; ">
        <canvas
        id="game"
        width="400"
        height="480"
        class="codehs-editor-canvas"
        style="width: 100%; height: 100%; margin: 0 auto;"
        ></canvas>
    </div>
    <div id="console"></div>
    <div id="btn-container">
        <button class="btn btn-main btn-lg" id="btn-play" onclick='stopProgram(); runProgram();'><span class="glyphicon glyphicon-play" aria-hidden="true"></span></button>
        <button class="btn btn-main btn-lg" id="btn-stop" onclick='stopProgram();'><span class="glyphicon glyphicon-stop" aria-hidden="true"></span></button>
    </div>

<script>
    var console = {};
    console.log = function(msg){
        $("#console").html($("#console").html() + "     " + msg);
    };

    var runProgram = function() {
        function start(){
    choiceOne();
    choiceTwo();
}

/* choice one illustrates a math equation that determines how much you have to pay for your lives*/
/* uses a user input along with X as a variable for the # of lives */
function choiceOne(){
    println("You have entered an arcade and want to play the new adventure game. ");
    println("You walk over to the Dark Voyage console.");
    println(" Your friend warns you that nobody has completed");
    println("the game successfully.");
    println("You walk up to the game anyways, determined to win. ");
    var x = readFloat("How many lives do you want? ");
    println("That will be $ " + x * 2 + "  says the screen" );
    
   
}
    
/* this choice is your first decision and if you answer incorrectly the story is over as your player dies*/
/* uses an if/ else statement */
function choiceTwo(){
    println("You enter the world and your character");
    println("enters the arena");
    println("Your first battle is against Fredrick the Ogre.");
    println(" Suddenly a sharp arrow streaks across in front");
    println("of you! But it misses you!");
    var str = readLine("Do you grab the sword (grab sword) or attack with  no weapon  (no sword)?");
        
     if (str == "no sword"){
        choiceFour();
    
    }else if (str == "grab sword"){
        choiceFive();


    }else{
        println("This is not a choice!");
    }

}


function choiceFour(){
    println("You valiantly attack Fredrick but come up short. ");
    println("He picks you up breaks your back and that's the end of you.");


}
/* this is your final challenge and if you answer the riddle correctly you win*/
/* uses an if/ else statement */
function choiceFive(){
    println("The Ogre charges after you but you quickly grab");
    println("your weapon and stab him in the heart");
    println("You now come across an evil dwarf named Alex");
    println("You must solve my math equation to survive my arena, says Alex");
    var num = readInt("What is the sqaure root of 36?");
    
    if (num == "6"){
        choiceSix();

    }else{
        choiceSeven();
        
    }
    
}

function choiceSix(){
    println("You have solved my riddle Alex exclaims");
    println("The dwarf hands you an ice cream bar and you escape a free man");
}

function choiceSeven(){
    println("You are incorrect the dwarf exclaims");
    println("Alex pulls out his speaker and blasts annoying music until your ears bleed");
    println("You fall to your knees and eventually go unconcious from the annoyance");
}





        if (typeof start === 'function') {
            start();
        }

        // Overrides setSize() if called from the user's code. Needed because
        // we have to change the canvas size and attributes to reflect the
        // user's desired program size. Calling setSize() from user code only
        // has an effect if Fit to Full Screen is Off. If Fit to Full Screen is
        // On, then setSize() does nothing.
        function setSize(width, height) {
            if (!true) {
                // Call original graphics setSize()
                window.__graphics__.setSize(width, height);

                // Scale to screen width but keep aspect ratio of program
                // Subtract 2 to allow for border
                var canvasWidth = window.innerWidth - 2;
                var canvasHeight = canvasWidth * getHeight() / getWidth();

                // Make canvas reflect desired size set
                adjustMarginTop(canvasHeight);
                setCanvasContainerSize(canvasWidth, canvasHeight);
                setCanvasAttributes(canvasWidth, canvasHeight);
            }
        }
    };

    var stopProgram = function() {
        removeAll();
        window.__graphics__.fullReset();
    }

    window.onload = function() {
        if (!false) {
            $('#btn-container').remove();
        }

        var canvasWidth;
        var canvasHeight;
        if (true) {
            // Get device window width and set program size to those dimensions
            setSize(window.innerWidth, window.innerHeight);
            canvasWidth = getWidth();
            canvasHeight = getHeight();

            if (false) {
                // Make room for buttons if being shown
                $('#btn-container').css('padding', '5px 0');
                canvasHeight -= $('#btn-container').outerHeight();
            }

            setCanvasAttributes(canvasWidth, canvasHeight);
        } else {
            // Scale to screen width but keep aspect ratio of program
            // Subtract 2 to allow for border
            canvasWidth = window.innerWidth - 2;
            canvasHeight = canvasWidth * getHeight() / getWidth();

            // Light border around canvas if not full screen
            $('#canvas-container').css('border', '1px solid #beccd4');

            adjustMarginTop(canvasHeight);
        }

        setCanvasContainerSize(canvasWidth, canvasHeight);

        if (true) {
            runProgram();
        }
    };

    // Set the canvas container width and height.
    function setCanvasContainerSize(width, height) {
        $('#canvas-container').width(width);
        $('#canvas-container').height(height);
    }

    // Set the width and height attributes of the canvas. Allows
    // getTouchCoordinates to sense x and y correctly.
    function setCanvasAttributes(canvasWidth, canvasHeight) {
        $('#game').attr('width', canvasWidth);
        $('#game').attr('height', canvasHeight);
    }

    // Assumes the Fit to Full Screen setting is Off. Adjusts the top margin
    // depending on the Show Play/Stop Buttons setting.
    function adjustMarginTop(canvasHeight) {
        var marginTop = (window.innerHeight - canvasHeight)/2;
        if (false) {
            marginTop -= $('#btn-container').height()/3;
        }
        $('#canvas-container').css('margin-top', marginTop);
    }
</script>
</body>
</html>
`;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden />
                <WebView
                    source={{html: webViewCode, baseUrl: "/"}}
                    javaScriptEnabled={true}
                    style={{ flex: 1 }}
                    scrollEnabled={false}
                    bounces={false}
                    scalesPageToFit={false}
                ></WebView>
            </View>
        );
    }
}
