gdjs.LoadingCode = {};
gdjs.LoadingCode.localVariables = [];
gdjs.LoadingCode.GDTransition_9595OUTObjects1= [];
gdjs.LoadingCode.GDTransition_9595OUTObjects2= [];
gdjs.LoadingCode.GDTransition_9595OUTObjects3= [];
gdjs.LoadingCode.GDLeaderBoard_9595ButtonObjects1= [];
gdjs.LoadingCode.GDLeaderBoard_9595ButtonObjects2= [];
gdjs.LoadingCode.GDLeaderBoard_9595ButtonObjects3= [];
gdjs.LoadingCode.GDPointerObjects1= [];
gdjs.LoadingCode.GDPointerObjects2= [];
gdjs.LoadingCode.GDPointerObjects3= [];
gdjs.LoadingCode.GDPause_9595ButtonObjects1= [];
gdjs.LoadingCode.GDPause_9595ButtonObjects2= [];
gdjs.LoadingCode.GDPause_9595ButtonObjects3= [];
gdjs.LoadingCode.GDOverlayObjects1= [];
gdjs.LoadingCode.GDOverlayObjects2= [];
gdjs.LoadingCode.GDOverlayObjects3= [];
gdjs.LoadingCode.GDResume_9595ButtonObjects1= [];
gdjs.LoadingCode.GDResume_9595ButtonObjects2= [];
gdjs.LoadingCode.GDResume_9595ButtonObjects3= [];
gdjs.LoadingCode.GDSound_9595OkObjects1= [];
gdjs.LoadingCode.GDSound_9595OkObjects2= [];
gdjs.LoadingCode.GDSound_9595OkObjects3= [];
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects1= [];
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects2= [];
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects3= [];
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects1= [];
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects2= [];
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects3= [];
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595CHARACTERObjects1= [];
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595CHARACTERObjects2= [];
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595CHARACTERObjects3= [];
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595LEVELObjects1= [];
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595LEVELObjects2= [];
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595LEVELObjects3= [];
gdjs.LoadingCode.GDRestart_9595Button_9595SecondaryObjects1= [];
gdjs.LoadingCode.GDRestart_9595Button_9595SecondaryObjects2= [];
gdjs.LoadingCode.GDRestart_9595Button_9595SecondaryObjects3= [];
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595FRAMEObjects1= [];
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595FRAMEObjects2= [];
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595FRAMEObjects3= [];
gdjs.LoadingCode.GDSound_9595ButtonObjects1= [];
gdjs.LoadingCode.GDSound_9595ButtonObjects2= [];
gdjs.LoadingCode.GDSound_9595ButtonObjects3= [];
gdjs.LoadingCode.GDGlow_9595BallObjects1= [];
gdjs.LoadingCode.GDGlow_9595BallObjects2= [];
gdjs.LoadingCode.GDGlow_9595BallObjects3= [];
gdjs.LoadingCode.GDGlow_9595ParticleObjects1= [];
gdjs.LoadingCode.GDGlow_9595ParticleObjects2= [];
gdjs.LoadingCode.GDGlow_9595ParticleObjects3= [];
gdjs.LoadingCode.GDMini_9595LockObjects1= [];
gdjs.LoadingCode.GDMini_9595LockObjects2= [];
gdjs.LoadingCode.GDMini_9595LockObjects3= [];
gdjs.LoadingCode.GDProfil_9595PicObjects1= [];
gdjs.LoadingCode.GDProfil_9595PicObjects2= [];
gdjs.LoadingCode.GDProfil_9595PicObjects3= [];
gdjs.LoadingCode.GDSatoshi_9595LoadingObjects1= [];
gdjs.LoadingCode.GDSatoshi_9595LoadingObjects2= [];
gdjs.LoadingCode.GDSatoshi_9595LoadingObjects3= [];
gdjs.LoadingCode.GDLoadingTextObjects1= [];
gdjs.LoadingCode.GDLoadingTextObjects2= [];
gdjs.LoadingCode.GDLoadingTextObjects3= [];
gdjs.LoadingCode.GDOverlay_9595LoadingObjects1= [];
gdjs.LoadingCode.GDOverlay_9595LoadingObjects2= [];
gdjs.LoadingCode.GDOverlay_9595LoadingObjects3= [];


gdjs.LoadingCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("LoadingText"), gdjs.LoadingCode.GDLoadingTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Satoshi_Loading"), gdjs.LoadingCode.GDSatoshi_9595LoadingObjects1);
{for(var i = 0, len = gdjs.LoadingCode.GDLoadingTextObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDLoadingTextObjects1[i].setPosition(Math.round(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - Math.round((gdjs.LoadingCode.GDLoadingTextObjects1[i].getWidth()) / 2),Math.round((( gdjs.LoadingCode.GDSatoshi_9595LoadingObjects1.length === 0 ) ? 0 :gdjs.LoadingCode.GDSatoshi_9595LoadingObjects1[0].getPointY(""))) + Math.round((( gdjs.LoadingCode.GDSatoshi_9595LoadingObjects1.length === 0 ) ? 0 :gdjs.LoadingCode.GDSatoshi_9595LoadingObjects1[0].getHeight())) + 20);
}
}}

}


};gdjs.LoadingCode.eventsList1 = function(runtimeScene) {

};gdjs.LoadingCode.eventsList2 = function(runtimeScene) {

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
gdjs.LoadingCode.eventsList1(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.LoadingCode.GDLoadingTextObjects1 */
{for(var i = 0, len = gdjs.LoadingCode.GDLoadingTextObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDLoadingTextObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(2).getChild(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}{for(var i = 0, len = gdjs.LoadingCode.GDLoadingTextObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDLoadingTextObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadein", 255, "easeInOutQuad", 0.3, false);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}}

}


};gdjs.LoadingCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LoadingText"), gdjs.LoadingCode.GDLoadingTextObjects2);
{for(var i = 0, len = gdjs.LoadingCode.GDLoadingTextObjects2.length ;i < len;++i) {
    gdjs.LoadingCode.GDLoadingTextObjects2[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "easeInOutQuad", 0.3, false);
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
gdjs.copyArray(runtimeScene.getObjects("Satoshi_Loading"), gdjs.LoadingCode.GDSatoshi_9595LoadingObjects2);
{for(var i = 0, len = gdjs.LoadingCode.GDSatoshi_9595LoadingObjects2.length ;i < len;++i) {
    gdjs.LoadingCode.GDSatoshi_9595LoadingObjects2[i].getBehavior("Opacity").setOpacity(100);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(72348372);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Satoshi_Loading"), gdjs.LoadingCode.GDSatoshi_9595LoadingObjects2);
{for(var i = 0, len = gdjs.LoadingCode.GDSatoshi_9595LoadingObjects2.length ;i < len;++i) {
    gdjs.LoadingCode.GDSatoshi_9595LoadingObjects2[i].getBehavior("Tween").addObjectOpacityTween2("fadein", 255, "easeInOutQuad", 0.3, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "ChangeTextTimer") > 2.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LoadingText"), gdjs.LoadingCode.GDLoadingTextObjects2);
{for(var i = 0, len = gdjs.LoadingCode.GDLoadingTextObjects2.length ;i < len;++i) {
    gdjs.LoadingCode.GDLoadingTextObjects2[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "easeInOutQuad", 0.3, false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ChangeTextTimer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LoadingText"), gdjs.LoadingCode.GDLoadingTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoadingCode.GDLoadingTextObjects1.length;i<l;++i) {
    if ( gdjs.LoadingCode.GDLoadingTextObjects1[i].getBehavior("Tween").hasFinished("fadeout") ) {
        isConditionTrue_0 = true;
        gdjs.LoadingCode.GDLoadingTextObjects1[k] = gdjs.LoadingCode.GDLoadingTextObjects1[i];
        ++k;
    }
}
gdjs.LoadingCode.GDLoadingTextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(72352060);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LoadingCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.LoadingCode.asyncCallback72432588 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoadingCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(19).getAsString(), false);
}gdjs.LoadingCode.localVariables.length = 0;
}
gdjs.LoadingCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoadingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.LoadingCode.asyncCallback72432588(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoadingCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(19).getAsString());
}}

}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(19).getAsString());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(72430564);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LoadingText"), gdjs.LoadingCode.GDLoadingTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Satoshi_Loading"), gdjs.LoadingCode.GDSatoshi_9595LoadingObjects2);
{for(var i = 0, len = gdjs.LoadingCode.GDLoadingTextObjects2.length ;i < len;++i) {
    gdjs.LoadingCode.GDLoadingTextObjects2[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "easeInOutQuad", 0.3, false);
}
}{for(var i = 0, len = gdjs.LoadingCode.GDSatoshi_9595LoadingObjects2.length ;i < len;++i) {
    gdjs.LoadingCode.GDSatoshi_9595LoadingObjects2[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "easeInOutQuad", 0.3, false);
}
}
{ //Subevents
gdjs.LoadingCode.eventsList4(runtimeScene);} //End of subevents
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


};gdjs.LoadingCode.eventsList6 = function(runtimeScene) {

{


gdjs.LoadingCode.eventsList0(runtimeScene);
}


{


gdjs.LoadingCode.eventsList3(runtimeScene);
}


{


gdjs.LoadingCode.eventsList5(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.LoadingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadingCode.GDTransition_9595OUTObjects1.length = 0;
gdjs.LoadingCode.GDTransition_9595OUTObjects2.length = 0;
gdjs.LoadingCode.GDTransition_9595OUTObjects3.length = 0;
gdjs.LoadingCode.GDLeaderBoard_9595ButtonObjects1.length = 0;
gdjs.LoadingCode.GDLeaderBoard_9595ButtonObjects2.length = 0;
gdjs.LoadingCode.GDLeaderBoard_9595ButtonObjects3.length = 0;
gdjs.LoadingCode.GDPointerObjects1.length = 0;
gdjs.LoadingCode.GDPointerObjects2.length = 0;
gdjs.LoadingCode.GDPointerObjects3.length = 0;
gdjs.LoadingCode.GDPause_9595ButtonObjects1.length = 0;
gdjs.LoadingCode.GDPause_9595ButtonObjects2.length = 0;
gdjs.LoadingCode.GDPause_9595ButtonObjects3.length = 0;
gdjs.LoadingCode.GDOverlayObjects1.length = 0;
gdjs.LoadingCode.GDOverlayObjects2.length = 0;
gdjs.LoadingCode.GDOverlayObjects3.length = 0;
gdjs.LoadingCode.GDResume_9595ButtonObjects1.length = 0;
gdjs.LoadingCode.GDResume_9595ButtonObjects2.length = 0;
gdjs.LoadingCode.GDResume_9595ButtonObjects3.length = 0;
gdjs.LoadingCode.GDSound_9595OkObjects1.length = 0;
gdjs.LoadingCode.GDSound_9595OkObjects2.length = 0;
gdjs.LoadingCode.GDSound_9595OkObjects3.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects1.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects2.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects3.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects1.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects2.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects3.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595CHARACTERObjects1.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595CHARACTERObjects2.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595CHARACTERObjects3.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595LEVELObjects1.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595LEVELObjects2.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595LEVELObjects3.length = 0;
gdjs.LoadingCode.GDRestart_9595Button_9595SecondaryObjects1.length = 0;
gdjs.LoadingCode.GDRestart_9595Button_9595SecondaryObjects2.length = 0;
gdjs.LoadingCode.GDRestart_9595Button_9595SecondaryObjects3.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595FRAMEObjects1.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595FRAMEObjects2.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595FRAMEObjects3.length = 0;
gdjs.LoadingCode.GDSound_9595ButtonObjects1.length = 0;
gdjs.LoadingCode.GDSound_9595ButtonObjects2.length = 0;
gdjs.LoadingCode.GDSound_9595ButtonObjects3.length = 0;
gdjs.LoadingCode.GDGlow_9595BallObjects1.length = 0;
gdjs.LoadingCode.GDGlow_9595BallObjects2.length = 0;
gdjs.LoadingCode.GDGlow_9595BallObjects3.length = 0;
gdjs.LoadingCode.GDGlow_9595ParticleObjects1.length = 0;
gdjs.LoadingCode.GDGlow_9595ParticleObjects2.length = 0;
gdjs.LoadingCode.GDGlow_9595ParticleObjects3.length = 0;
gdjs.LoadingCode.GDMini_9595LockObjects1.length = 0;
gdjs.LoadingCode.GDMini_9595LockObjects2.length = 0;
gdjs.LoadingCode.GDMini_9595LockObjects3.length = 0;
gdjs.LoadingCode.GDProfil_9595PicObjects1.length = 0;
gdjs.LoadingCode.GDProfil_9595PicObjects2.length = 0;
gdjs.LoadingCode.GDProfil_9595PicObjects3.length = 0;
gdjs.LoadingCode.GDSatoshi_9595LoadingObjects1.length = 0;
gdjs.LoadingCode.GDSatoshi_9595LoadingObjects2.length = 0;
gdjs.LoadingCode.GDSatoshi_9595LoadingObjects3.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects1.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects2.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects3.length = 0;
gdjs.LoadingCode.GDOverlay_9595LoadingObjects1.length = 0;
gdjs.LoadingCode.GDOverlay_9595LoadingObjects2.length = 0;
gdjs.LoadingCode.GDOverlay_9595LoadingObjects3.length = 0;

gdjs.LoadingCode.eventsList6(runtimeScene);
gdjs.LoadingCode.GDTransition_9595OUTObjects1.length = 0;
gdjs.LoadingCode.GDTransition_9595OUTObjects2.length = 0;
gdjs.LoadingCode.GDTransition_9595OUTObjects3.length = 0;
gdjs.LoadingCode.GDLeaderBoard_9595ButtonObjects1.length = 0;
gdjs.LoadingCode.GDLeaderBoard_9595ButtonObjects2.length = 0;
gdjs.LoadingCode.GDLeaderBoard_9595ButtonObjects3.length = 0;
gdjs.LoadingCode.GDPointerObjects1.length = 0;
gdjs.LoadingCode.GDPointerObjects2.length = 0;
gdjs.LoadingCode.GDPointerObjects3.length = 0;
gdjs.LoadingCode.GDPause_9595ButtonObjects1.length = 0;
gdjs.LoadingCode.GDPause_9595ButtonObjects2.length = 0;
gdjs.LoadingCode.GDPause_9595ButtonObjects3.length = 0;
gdjs.LoadingCode.GDOverlayObjects1.length = 0;
gdjs.LoadingCode.GDOverlayObjects2.length = 0;
gdjs.LoadingCode.GDOverlayObjects3.length = 0;
gdjs.LoadingCode.GDResume_9595ButtonObjects1.length = 0;
gdjs.LoadingCode.GDResume_9595ButtonObjects2.length = 0;
gdjs.LoadingCode.GDResume_9595ButtonObjects3.length = 0;
gdjs.LoadingCode.GDSound_9595OkObjects1.length = 0;
gdjs.LoadingCode.GDSound_9595OkObjects2.length = 0;
gdjs.LoadingCode.GDSound_9595OkObjects3.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects1.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects2.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects3.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects1.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects2.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects3.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595CHARACTERObjects1.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595CHARACTERObjects2.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595CHARACTERObjects3.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595LEVELObjects1.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595LEVELObjects2.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595LEVELObjects3.length = 0;
gdjs.LoadingCode.GDRestart_9595Button_9595SecondaryObjects1.length = 0;
gdjs.LoadingCode.GDRestart_9595Button_9595SecondaryObjects2.length = 0;
gdjs.LoadingCode.GDRestart_9595Button_9595SecondaryObjects3.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595FRAMEObjects1.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595FRAMEObjects2.length = 0;
gdjs.LoadingCode.GDBACK2_9595OVERALL_9595FRAMEObjects3.length = 0;
gdjs.LoadingCode.GDSound_9595ButtonObjects1.length = 0;
gdjs.LoadingCode.GDSound_9595ButtonObjects2.length = 0;
gdjs.LoadingCode.GDSound_9595ButtonObjects3.length = 0;
gdjs.LoadingCode.GDGlow_9595BallObjects1.length = 0;
gdjs.LoadingCode.GDGlow_9595BallObjects2.length = 0;
gdjs.LoadingCode.GDGlow_9595BallObjects3.length = 0;
gdjs.LoadingCode.GDGlow_9595ParticleObjects1.length = 0;
gdjs.LoadingCode.GDGlow_9595ParticleObjects2.length = 0;
gdjs.LoadingCode.GDGlow_9595ParticleObjects3.length = 0;
gdjs.LoadingCode.GDMini_9595LockObjects1.length = 0;
gdjs.LoadingCode.GDMini_9595LockObjects2.length = 0;
gdjs.LoadingCode.GDMini_9595LockObjects3.length = 0;
gdjs.LoadingCode.GDProfil_9595PicObjects1.length = 0;
gdjs.LoadingCode.GDProfil_9595PicObjects2.length = 0;
gdjs.LoadingCode.GDProfil_9595PicObjects3.length = 0;
gdjs.LoadingCode.GDSatoshi_9595LoadingObjects1.length = 0;
gdjs.LoadingCode.GDSatoshi_9595LoadingObjects2.length = 0;
gdjs.LoadingCode.GDSatoshi_9595LoadingObjects3.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects1.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects2.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects3.length = 0;
gdjs.LoadingCode.GDOverlay_9595LoadingObjects1.length = 0;
gdjs.LoadingCode.GDOverlay_9595LoadingObjects2.length = 0;
gdjs.LoadingCode.GDOverlay_9595LoadingObjects3.length = 0;


return;

}

gdjs['LoadingCode'] = gdjs.LoadingCode;
