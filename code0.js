gdjs.Loading_32Zero_32PhaseCode = {};
gdjs.Loading_32Zero_32PhaseCode.localVariables = [];
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDTransition_9595OUTObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDTransition_9595OUTObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDTransition_9595OUTObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDLeaderBoard_9595ButtonObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDLeaderBoard_9595ButtonObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDLeaderBoard_9595ButtonObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDPointerObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDPointerObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDPointerObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDPause_9595ButtonObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDPause_9595ButtonObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDPause_9595ButtonObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDOverlayObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDOverlayObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDOverlayObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDResume_9595ButtonObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDResume_9595ButtonObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDResume_9595ButtonObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDSound_9595OkObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDSound_9595OkObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDSound_9595OkObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595CHARACTERObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595CHARACTERObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595CHARACTERObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595LEVELObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595LEVELObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595LEVELObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDRestart_9595Button_9595SecondaryObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDRestart_9595Button_9595SecondaryObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDRestart_9595Button_9595SecondaryObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595FRAMEObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595FRAMEObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595FRAMEObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDSound_9595ButtonObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDSound_9595ButtonObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDSound_9595ButtonObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDGlow_9595BallObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDGlow_9595BallObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDGlow_9595BallObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDGlow_9595ParticleObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDGlow_9595ParticleObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDGlow_9595ParticleObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDMini_9595LockObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDMini_9595LockObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDMini_9595LockObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDProfil_9595PicObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDProfil_9595PicObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDProfil_9595PicObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDOverlay_9595LoadingObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDOverlay_9595LoadingObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDOverlay_9595LoadingObjects3= [];


gdjs.Loading_32Zero_32PhaseCode.userFunc0x3912548 = function GDJSInlineCode(runtimeScene) {
"use strict";
(function() {
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
  }

  // Direct path from root since you're using a custom domain
  link.href = "/favicon.png";
})();

};
gdjs.Loading_32Zero_32PhaseCode.eventsList0 = function(runtimeScene) {

{


gdjs.Loading_32Zero_32PhaseCode.userFunc0x3912548(runtimeScene);

}


};gdjs.Loading_32Zero_32PhaseCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LoadingText"), gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Satoshi_Loading"), gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects1);
{for(var i = 0, len = gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1.length ;i < len;++i) {
    gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1[i].setPosition(Math.round(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - Math.round((gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1[i].getWidth()) / 2),Math.round((( gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects1.length === 0 ) ? 0 :gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects1[0].getPointY(""))) + Math.round((( gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects1.length === 0 ) ? 0 :gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects1[0].getHeight())) + 20);
}
}}

}


};gdjs.Loading_32Zero_32PhaseCode.eventsList2 = function(runtimeScene) {

};gdjs.Loading_32Zero_32PhaseCode.eventsList3 = function(runtimeScene) {

{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.random(13));
}
{ //Subevents: 
gdjs.Loading_32Zero_32PhaseCode.eventsList2(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1 */
{for(var i = 0, len = gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1.length ;i < len;++i) {
    gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}{for(var i = 0, len = gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1.length ;i < len;++i) {
    gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadein", 255, "easeInOutQuad", 0.3, false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}}

}


};gdjs.Loading_32Zero_32PhaseCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LoadingText"), gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects2);
{for(var i = 0, len = gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects2.length ;i < len;++i) {
    gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects2[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "easeInOutQuad", 0.3, false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ChangeTextTimer");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Satoshi_Loading"), gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects2);
{for(var i = 0, len = gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects2.length ;i < len;++i) {
    gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects2[i].getBehavior("Opacity").setOpacity(100);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(69151204);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Satoshi_Loading"), gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects2);
{for(var i = 0, len = gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects2.length ;i < len;++i) {
    gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects2[i].getBehavior("Tween").addObjectOpacityTween2("fadein", 255, "easeInOutQuad", 0.3, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ChangeTextTimer") > 2.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LoadingText"), gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects2);
{for(var i = 0, len = gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects2.length ;i < len;++i) {
    gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects2[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "easeInOutQuad", 0.3, false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ChangeTextTimer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LoadingText"), gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1.length;i<l;++i) {
    if ( gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1[i].getBehavior("Tween").hasFinished("fadeout") ) {
        isConditionTrue_0 = true;
        gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1[k] = gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1[i];
        ++k;
    }
}
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(19071356);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Loading_32Zero_32PhaseCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Loading_32Zero_32PhaseCode.asyncCallback65325252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Loading_32Zero_32PhaseCode.localVariables);
gdjs.Loading_32Zero_32PhaseCode.localVariables.length = 0;
}
gdjs.Loading_32Zero_32PhaseCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Loading_32Zero_32PhaseCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Loading_32Zero_32PhaseCode.asyncCallback65325252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Loading_32Zero_32PhaseCode.asyncCallback65328188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Loading_32Zero_32PhaseCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Connect Wallet", false);
}gdjs.Loading_32Zero_32PhaseCode.localVariables.length = 0;
}
gdjs.Loading_32Zero_32PhaseCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Loading_32Zero_32PhaseCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.Loading_32Zero_32PhaseCode.asyncCallback65328188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Loading_32Zero_32PhaseCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, "Connect Wallet");
}
{ //Subevents
gdjs.Loading_32Zero_32PhaseCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, "Connect Wallet");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(65326092);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LoadingText"), gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Satoshi_Loading"), gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects1);
{for(var i = 0, len = gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1.length ;i < len;++i) {
    gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "easeInOutQuad", 0.3, false);
}
}{for(var i = 0, len = gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects1.length ;i < len;++i) {
    gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "easeInOutQuad", 0.3, false);
}
}
{ //Subevents
gdjs.Loading_32Zero_32PhaseCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Loading_32Zero_32PhaseCode.eventsList8 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Loading_32Zero_32PhaseCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Loading_32Zero_32PhaseCode.eventsList1(runtimeScene);
}


{


gdjs.Loading_32Zero_32PhaseCode.eventsList4(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.Loading_32Zero_32PhaseCode.eventsList7(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Loading_32Zero_32PhaseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDTransition_9595OUTObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDTransition_9595OUTObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDTransition_9595OUTObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLeaderBoard_9595ButtonObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLeaderBoard_9595ButtonObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLeaderBoard_9595ButtonObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDPointerObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDPointerObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDPointerObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDPause_9595ButtonObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDPause_9595ButtonObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDPause_9595ButtonObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDOverlayObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDOverlayObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDOverlayObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDResume_9595ButtonObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDResume_9595ButtonObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDResume_9595ButtonObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSound_9595OkObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSound_9595OkObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSound_9595OkObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595CHARACTERObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595CHARACTERObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595CHARACTERObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595LEVELObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595LEVELObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595LEVELObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDRestart_9595Button_9595SecondaryObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDRestart_9595Button_9595SecondaryObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDRestart_9595Button_9595SecondaryObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595FRAMEObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595FRAMEObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595FRAMEObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSound_9595ButtonObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSound_9595ButtonObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSound_9595ButtonObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDGlow_9595BallObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDGlow_9595BallObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDGlow_9595BallObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDGlow_9595ParticleObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDGlow_9595ParticleObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDGlow_9595ParticleObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDMini_9595LockObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDMini_9595LockObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDMini_9595LockObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDProfil_9595PicObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDProfil_9595PicObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDProfil_9595PicObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDOverlay_9595LoadingObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDOverlay_9595LoadingObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDOverlay_9595LoadingObjects3.length = 0;

gdjs.Loading_32Zero_32PhaseCode.eventsList8(runtimeScene);
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDTransition_9595OUTObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDTransition_9595OUTObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDTransition_9595OUTObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLeaderBoard_9595ButtonObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLeaderBoard_9595ButtonObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLeaderBoard_9595ButtonObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDPointerObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDPointerObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDPointerObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDPause_9595ButtonObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDPause_9595ButtonObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDPause_9595ButtonObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDOverlayObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDOverlayObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDOverlayObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDResume_9595ButtonObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDResume_9595ButtonObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDResume_9595ButtonObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSound_9595OkObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSound_9595OkObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSound_9595OkObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595CHARACTERObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595CHARACTERObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595CHARACTERObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595LEVELObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595LEVELObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595LEVELObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDRestart_9595Button_9595SecondaryObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDRestart_9595Button_9595SecondaryObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDRestart_9595Button_9595SecondaryObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595FRAMEObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595FRAMEObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDBACK2_9595OVERALL_9595FRAMEObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSound_9595ButtonObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSound_9595ButtonObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSound_9595ButtonObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDGlow_9595BallObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDGlow_9595BallObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDGlow_9595BallObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDGlow_9595ParticleObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDGlow_9595ParticleObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDGlow_9595ParticleObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDMini_9595LockObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDMini_9595LockObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDMini_9595LockObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDProfil_9595PicObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDProfil_9595PicObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDProfil_9595PicObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDOverlay_9595LoadingObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDOverlay_9595LoadingObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDOverlay_9595LoadingObjects3.length = 0;


return;

}

gdjs['Loading_32Zero_32PhaseCode'] = gdjs.Loading_32Zero_32PhaseCode;
