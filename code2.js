gdjs.LoadingCode = {};
gdjs.LoadingCode.localVariables = [];
gdjs.LoadingCode.GDSatoshi_9595LoadingObjects1= [];
gdjs.LoadingCode.GDSatoshi_9595LoadingObjects2= [];
gdjs.LoadingCode.GDSatoshi_9595LoadingObjects3= [];
gdjs.LoadingCode.GDLoadingTextObjects1= [];
gdjs.LoadingCode.GDLoadingTextObjects2= [];
gdjs.LoadingCode.GDLoadingTextObjects3= [];
gdjs.LoadingCode.GDTransition_9595OUTObjects1= [];
gdjs.LoadingCode.GDTransition_9595OUTObjects2= [];
gdjs.LoadingCode.GDTransition_9595OUTObjects3= [];
gdjs.LoadingCode.GDSoundObjects1= [];
gdjs.LoadingCode.GDSoundObjects2= [];
gdjs.LoadingCode.GDSoundObjects3= [];
gdjs.LoadingCode.GDWallet_9595Address_9595FrameObjects1= [];
gdjs.LoadingCode.GDWallet_9595Address_9595FrameObjects2= [];
gdjs.LoadingCode.GDWallet_9595Address_9595FrameObjects3= [];
gdjs.LoadingCode.GDWallet_9595AddressObjects1= [];
gdjs.LoadingCode.GDWallet_9595AddressObjects2= [];
gdjs.LoadingCode.GDWallet_9595AddressObjects3= [];
gdjs.LoadingCode.GDDisconnect_9595Wallet_9595ButtonObjects1= [];
gdjs.LoadingCode.GDDisconnect_9595Wallet_9595ButtonObjects2= [];
gdjs.LoadingCode.GDDisconnect_9595Wallet_9595ButtonObjects3= [];
gdjs.LoadingCode.GDLeaderBoard_9595ButtonObjects1= [];
gdjs.LoadingCode.GDLeaderBoard_9595ButtonObjects2= [];
gdjs.LoadingCode.GDLeaderBoard_9595ButtonObjects3= [];
gdjs.LoadingCode.GDTilt_9595Back_9595to_9595portraitObjects1= [];
gdjs.LoadingCode.GDTilt_9595Back_9595to_9595portraitObjects2= [];
gdjs.LoadingCode.GDTilt_9595Back_9595to_9595portraitObjects3= [];
gdjs.LoadingCode.GDOverlay_9595LANDSCAPEObjects1= [];
gdjs.LoadingCode.GDOverlay_9595LANDSCAPEObjects2= [];
gdjs.LoadingCode.GDOverlay_9595LANDSCAPEObjects3= [];
gdjs.LoadingCode.GDArrow_9595RightObjects1= [];
gdjs.LoadingCode.GDArrow_9595RightObjects2= [];
gdjs.LoadingCode.GDArrow_9595RightObjects3= [];
gdjs.LoadingCode.GDArrow_9595LeftObjects1= [];
gdjs.LoadingCode.GDArrow_9595LeftObjects2= [];
gdjs.LoadingCode.GDArrow_9595LeftObjects3= [];
gdjs.LoadingCode.GDMobile_9595HeaderObjects1= [];
gdjs.LoadingCode.GDMobile_9595HeaderObjects2= [];
gdjs.LoadingCode.GDMobile_9595HeaderObjects3= [];
gdjs.LoadingCode.GDMobile_9595FrameObjects1= [];
gdjs.LoadingCode.GDMobile_9595FrameObjects2= [];
gdjs.LoadingCode.GDMobile_9595FrameObjects3= [];
gdjs.LoadingCode.GDPointerObjects1= [];
gdjs.LoadingCode.GDPointerObjects2= [];
gdjs.LoadingCode.GDPointerObjects3= [];
gdjs.LoadingCode.GDWindObjects1= [];
gdjs.LoadingCode.GDWindObjects2= [];
gdjs.LoadingCode.GDWindObjects3= [];


gdjs.LoadingCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Satoshi_Loading"), gdjs.LoadingCode.GDSatoshi_9595LoadingObjects2);
{for(var i = 0, len = gdjs.LoadingCode.GDSatoshi_9595LoadingObjects2.length ;i < len;++i) {
    gdjs.LoadingCode.GDSatoshi_9595LoadingObjects2[i].setPosition((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.LoadingCode.GDSatoshi_9595LoadingObjects2[i].getWidth()) / 2),(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2) - ((gdjs.LoadingCode.GDSatoshi_9595LoadingObjects2[i].getHeight()) / 2));
}
}}

}


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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96510740);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96514412);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.LoadingCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.LoadingCode.asyncCallback96521260 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LoadingCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(26).getAsString(), false);
}gdjs.LoadingCode.localVariables.length = 0;
}
gdjs.LoadingCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LoadingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.LoadingCode.asyncCallback96521260(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LoadingCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.prioritizeLoadingOfScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(26).getAsString());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.areSceneAssetsLoaded(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(26).getAsString());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(96518460);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LoadingText"), gdjs.LoadingCode.GDLoadingTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Satoshi_Loading"), gdjs.LoadingCode.GDSatoshi_9595LoadingObjects1);
{for(var i = 0, len = gdjs.LoadingCode.GDLoadingTextObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDLoadingTextObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "easeInOutQuad", 0.3, false);
}
}{for(var i = 0, len = gdjs.LoadingCode.GDSatoshi_9595LoadingObjects1.length ;i < len;++i) {
    gdjs.LoadingCode.GDSatoshi_9595LoadingObjects1[i].getBehavior("Tween").addObjectOpacityTween2("fadeout", 0, "easeInOutQuad", 0.3, false);
}
}
{ //Subevents
gdjs.LoadingCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.LoadingCode.eventsList6 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowSize(runtimeScene, 1280, 720, true);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


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

gdjs.LoadingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoadingCode.GDSatoshi_9595LoadingObjects1.length = 0;
gdjs.LoadingCode.GDSatoshi_9595LoadingObjects2.length = 0;
gdjs.LoadingCode.GDSatoshi_9595LoadingObjects3.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects1.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects2.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects3.length = 0;
gdjs.LoadingCode.GDTransition_9595OUTObjects1.length = 0;
gdjs.LoadingCode.GDTransition_9595OUTObjects2.length = 0;
gdjs.LoadingCode.GDTransition_9595OUTObjects3.length = 0;
gdjs.LoadingCode.GDSoundObjects1.length = 0;
gdjs.LoadingCode.GDSoundObjects2.length = 0;
gdjs.LoadingCode.GDSoundObjects3.length = 0;
gdjs.LoadingCode.GDWallet_9595Address_9595FrameObjects1.length = 0;
gdjs.LoadingCode.GDWallet_9595Address_9595FrameObjects2.length = 0;
gdjs.LoadingCode.GDWallet_9595Address_9595FrameObjects3.length = 0;
gdjs.LoadingCode.GDWallet_9595AddressObjects1.length = 0;
gdjs.LoadingCode.GDWallet_9595AddressObjects2.length = 0;
gdjs.LoadingCode.GDWallet_9595AddressObjects3.length = 0;
gdjs.LoadingCode.GDDisconnect_9595Wallet_9595ButtonObjects1.length = 0;
gdjs.LoadingCode.GDDisconnect_9595Wallet_9595ButtonObjects2.length = 0;
gdjs.LoadingCode.GDDisconnect_9595Wallet_9595ButtonObjects3.length = 0;
gdjs.LoadingCode.GDLeaderBoard_9595ButtonObjects1.length = 0;
gdjs.LoadingCode.GDLeaderBoard_9595ButtonObjects2.length = 0;
gdjs.LoadingCode.GDLeaderBoard_9595ButtonObjects3.length = 0;
gdjs.LoadingCode.GDTilt_9595Back_9595to_9595portraitObjects1.length = 0;
gdjs.LoadingCode.GDTilt_9595Back_9595to_9595portraitObjects2.length = 0;
gdjs.LoadingCode.GDTilt_9595Back_9595to_9595portraitObjects3.length = 0;
gdjs.LoadingCode.GDOverlay_9595LANDSCAPEObjects1.length = 0;
gdjs.LoadingCode.GDOverlay_9595LANDSCAPEObjects2.length = 0;
gdjs.LoadingCode.GDOverlay_9595LANDSCAPEObjects3.length = 0;
gdjs.LoadingCode.GDArrow_9595RightObjects1.length = 0;
gdjs.LoadingCode.GDArrow_9595RightObjects2.length = 0;
gdjs.LoadingCode.GDArrow_9595RightObjects3.length = 0;
gdjs.LoadingCode.GDArrow_9595LeftObjects1.length = 0;
gdjs.LoadingCode.GDArrow_9595LeftObjects2.length = 0;
gdjs.LoadingCode.GDArrow_9595LeftObjects3.length = 0;
gdjs.LoadingCode.GDMobile_9595HeaderObjects1.length = 0;
gdjs.LoadingCode.GDMobile_9595HeaderObjects2.length = 0;
gdjs.LoadingCode.GDMobile_9595HeaderObjects3.length = 0;
gdjs.LoadingCode.GDMobile_9595FrameObjects1.length = 0;
gdjs.LoadingCode.GDMobile_9595FrameObjects2.length = 0;
gdjs.LoadingCode.GDMobile_9595FrameObjects3.length = 0;
gdjs.LoadingCode.GDPointerObjects1.length = 0;
gdjs.LoadingCode.GDPointerObjects2.length = 0;
gdjs.LoadingCode.GDPointerObjects3.length = 0;
gdjs.LoadingCode.GDWindObjects1.length = 0;
gdjs.LoadingCode.GDWindObjects2.length = 0;
gdjs.LoadingCode.GDWindObjects3.length = 0;

gdjs.LoadingCode.eventsList6(runtimeScene);
gdjs.LoadingCode.GDSatoshi_9595LoadingObjects1.length = 0;
gdjs.LoadingCode.GDSatoshi_9595LoadingObjects2.length = 0;
gdjs.LoadingCode.GDSatoshi_9595LoadingObjects3.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects1.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects2.length = 0;
gdjs.LoadingCode.GDLoadingTextObjects3.length = 0;
gdjs.LoadingCode.GDTransition_9595OUTObjects1.length = 0;
gdjs.LoadingCode.GDTransition_9595OUTObjects2.length = 0;
gdjs.LoadingCode.GDTransition_9595OUTObjects3.length = 0;
gdjs.LoadingCode.GDSoundObjects1.length = 0;
gdjs.LoadingCode.GDSoundObjects2.length = 0;
gdjs.LoadingCode.GDSoundObjects3.length = 0;
gdjs.LoadingCode.GDWallet_9595Address_9595FrameObjects1.length = 0;
gdjs.LoadingCode.GDWallet_9595Address_9595FrameObjects2.length = 0;
gdjs.LoadingCode.GDWallet_9595Address_9595FrameObjects3.length = 0;
gdjs.LoadingCode.GDWallet_9595AddressObjects1.length = 0;
gdjs.LoadingCode.GDWallet_9595AddressObjects2.length = 0;
gdjs.LoadingCode.GDWallet_9595AddressObjects3.length = 0;
gdjs.LoadingCode.GDDisconnect_9595Wallet_9595ButtonObjects1.length = 0;
gdjs.LoadingCode.GDDisconnect_9595Wallet_9595ButtonObjects2.length = 0;
gdjs.LoadingCode.GDDisconnect_9595Wallet_9595ButtonObjects3.length = 0;
gdjs.LoadingCode.GDLeaderBoard_9595ButtonObjects1.length = 0;
gdjs.LoadingCode.GDLeaderBoard_9595ButtonObjects2.length = 0;
gdjs.LoadingCode.GDLeaderBoard_9595ButtonObjects3.length = 0;
gdjs.LoadingCode.GDTilt_9595Back_9595to_9595portraitObjects1.length = 0;
gdjs.LoadingCode.GDTilt_9595Back_9595to_9595portraitObjects2.length = 0;
gdjs.LoadingCode.GDTilt_9595Back_9595to_9595portraitObjects3.length = 0;
gdjs.LoadingCode.GDOverlay_9595LANDSCAPEObjects1.length = 0;
gdjs.LoadingCode.GDOverlay_9595LANDSCAPEObjects2.length = 0;
gdjs.LoadingCode.GDOverlay_9595LANDSCAPEObjects3.length = 0;
gdjs.LoadingCode.GDArrow_9595RightObjects1.length = 0;
gdjs.LoadingCode.GDArrow_9595RightObjects2.length = 0;
gdjs.LoadingCode.GDArrow_9595RightObjects3.length = 0;
gdjs.LoadingCode.GDArrow_9595LeftObjects1.length = 0;
gdjs.LoadingCode.GDArrow_9595LeftObjects2.length = 0;
gdjs.LoadingCode.GDArrow_9595LeftObjects3.length = 0;
gdjs.LoadingCode.GDMobile_9595HeaderObjects1.length = 0;
gdjs.LoadingCode.GDMobile_9595HeaderObjects2.length = 0;
gdjs.LoadingCode.GDMobile_9595HeaderObjects3.length = 0;
gdjs.LoadingCode.GDMobile_9595FrameObjects1.length = 0;
gdjs.LoadingCode.GDMobile_9595FrameObjects2.length = 0;
gdjs.LoadingCode.GDMobile_9595FrameObjects3.length = 0;
gdjs.LoadingCode.GDPointerObjects1.length = 0;
gdjs.LoadingCode.GDPointerObjects2.length = 0;
gdjs.LoadingCode.GDPointerObjects3.length = 0;
gdjs.LoadingCode.GDWindObjects1.length = 0;
gdjs.LoadingCode.GDWindObjects2.length = 0;
gdjs.LoadingCode.GDWindObjects3.length = 0;


return;

}

gdjs['LoadingCode'] = gdjs.LoadingCode;
