gdjs.Loading_32Zero_32PhaseCode = {};
gdjs.Loading_32Zero_32PhaseCode.localVariables = [];
gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDTransition_9595OUTObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDTransition_9595OUTObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDTransition_9595OUTObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDSoundObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDSoundObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDSoundObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDWallet_9595Address_9595FrameObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDWallet_9595Address_9595FrameObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDWallet_9595Address_9595FrameObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDWallet_9595AddressObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDWallet_9595AddressObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDWallet_9595AddressObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDDisconnect_9595Wallet_9595ButtonObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDDisconnect_9595Wallet_9595ButtonObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDDisconnect_9595Wallet_9595ButtonObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDLeaderBoard_9595ButtonObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDLeaderBoard_9595ButtonObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDLeaderBoard_9595ButtonObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDTilt_9595Back_9595to_9595portraitObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDTilt_9595Back_9595to_9595portraitObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDTilt_9595Back_9595to_9595portraitObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDOverlay_9595LANDSCAPEObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDOverlay_9595LANDSCAPEObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDOverlay_9595LANDSCAPEObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDArrow_9595RightObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDArrow_9595RightObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDArrow_9595RightObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDArrow_9595LeftObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDArrow_9595LeftObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDArrow_9595LeftObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDMobile_9595HeaderObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDMobile_9595HeaderObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDMobile_9595HeaderObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDMobile_9595FrameObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDMobile_9595FrameObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDMobile_9595FrameObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDPointerObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDPointerObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDPointerObjects3= [];
gdjs.Loading_32Zero_32PhaseCode.GDWindObjects1= [];
gdjs.Loading_32Zero_32PhaseCode.GDWindObjects2= [];
gdjs.Loading_32Zero_32PhaseCode.GDWindObjects3= [];


gdjs.Loading_32Zero_32PhaseCode.userFunc0xa62a08 = function GDJSInlineCode(runtimeScene) {
"use strict";
(function() {
  var link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
  }

  // Dynamically set correct base path for GitHub Pages
  const path = window.location.pathname.split("/")[1]; // repo name
  link.href = "/" + path + "/favicon.png";
})();

};
gdjs.Loading_32Zero_32PhaseCode.eventsList0 = function(runtimeScene) {

{


gdjs.Loading_32Zero_32PhaseCode.userFunc0xa62a08(runtimeScene);

}


};gdjs.Loading_32Zero_32PhaseCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Satoshi_Loading"), gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects2);
{for(var i = 0, len = gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects2.length ;i < len;++i) {
    gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects2[i].setPosition((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects2[i].getWidth()) / 2),(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2) - ((gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects2[i].getHeight()) / 2));
}
}}

}


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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(95976708);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(95983620);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Loading_32Zero_32PhaseCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.Loading_32Zero_32PhaseCode.asyncCallback95986340 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Loading_32Zero_32PhaseCode.localVariables);
gdjs.Loading_32Zero_32PhaseCode.localVariables.length = 0;
}
gdjs.Loading_32Zero_32PhaseCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Loading_32Zero_32PhaseCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Loading_32Zero_32PhaseCode.asyncCallback95986340(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Loading_32Zero_32PhaseCode.asyncCallback95987620 = function (runtimeScene, asyncObjectsList) {
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
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.Loading_32Zero_32PhaseCode.asyncCallback95987620(runtimeScene, asyncObjectsList)));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(95987220);
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


let isConditionTrue_0 = false;
{
}

}


{


gdjs.Loading_32Zero_32PhaseCode.eventsList1(runtimeScene);
}


{


gdjs.Loading_32Zero_32PhaseCode.eventsList4(runtimeScene);
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

gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDTransition_9595OUTObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDTransition_9595OUTObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDTransition_9595OUTObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSoundObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSoundObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSoundObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDWallet_9595Address_9595FrameObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDWallet_9595Address_9595FrameObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDWallet_9595Address_9595FrameObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDWallet_9595AddressObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDWallet_9595AddressObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDWallet_9595AddressObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDDisconnect_9595Wallet_9595ButtonObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDDisconnect_9595Wallet_9595ButtonObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDDisconnect_9595Wallet_9595ButtonObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLeaderBoard_9595ButtonObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLeaderBoard_9595ButtonObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLeaderBoard_9595ButtonObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDTilt_9595Back_9595to_9595portraitObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDTilt_9595Back_9595to_9595portraitObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDTilt_9595Back_9595to_9595portraitObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDOverlay_9595LANDSCAPEObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDOverlay_9595LANDSCAPEObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDOverlay_9595LANDSCAPEObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDArrow_9595RightObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDArrow_9595RightObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDArrow_9595RightObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDArrow_9595LeftObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDArrow_9595LeftObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDArrow_9595LeftObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDMobile_9595HeaderObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDMobile_9595HeaderObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDMobile_9595HeaderObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDMobile_9595FrameObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDMobile_9595FrameObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDMobile_9595FrameObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDPointerObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDPointerObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDPointerObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDWindObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDWindObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDWindObjects3.length = 0;

gdjs.Loading_32Zero_32PhaseCode.eventsList8(runtimeScene);
gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSatoshi_9595LoadingObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLoadingTextObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDTransition_9595OUTObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDTransition_9595OUTObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDTransition_9595OUTObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSoundObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSoundObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDSoundObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDWallet_9595Address_9595FrameObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDWallet_9595Address_9595FrameObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDWallet_9595Address_9595FrameObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDWallet_9595AddressObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDWallet_9595AddressObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDWallet_9595AddressObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDDisconnect_9595Wallet_9595ButtonObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDDisconnect_9595Wallet_9595ButtonObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDDisconnect_9595Wallet_9595ButtonObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLeaderBoard_9595ButtonObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLeaderBoard_9595ButtonObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDLeaderBoard_9595ButtonObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDTilt_9595Back_9595to_9595portraitObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDTilt_9595Back_9595to_9595portraitObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDTilt_9595Back_9595to_9595portraitObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDOverlay_9595LANDSCAPEObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDOverlay_9595LANDSCAPEObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDOverlay_9595LANDSCAPEObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDArrow_9595RightObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDArrow_9595RightObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDArrow_9595RightObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDArrow_9595LeftObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDArrow_9595LeftObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDArrow_9595LeftObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDMobile_9595HeaderObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDMobile_9595HeaderObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDMobile_9595HeaderObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDMobile_9595FrameObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDMobile_9595FrameObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDMobile_9595FrameObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDPointerObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDPointerObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDPointerObjects3.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDWindObjects1.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDWindObjects2.length = 0;
gdjs.Loading_32Zero_32PhaseCode.GDWindObjects3.length = 0;


return;

}

gdjs['Loading_32Zero_32PhaseCode'] = gdjs.Loading_32Zero_32PhaseCode;
