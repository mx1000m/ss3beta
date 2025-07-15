gdjs.LEVEL_322Code = {};
gdjs.LEVEL_322Code.localVariables = [];
gdjs.LEVEL_322Code.GDNewTextObjects1= [];
gdjs.LEVEL_322Code.GDNewTextObjects2= [];
gdjs.LEVEL_322Code.GDNewTextObjects3= [];
gdjs.LEVEL_322Code.GDTransition_9595OUTObjects1= [];
gdjs.LEVEL_322Code.GDTransition_9595OUTObjects2= [];
gdjs.LEVEL_322Code.GDTransition_9595OUTObjects3= [];
gdjs.LEVEL_322Code.GDLeaderBoard_9595ButtonObjects1= [];
gdjs.LEVEL_322Code.GDLeaderBoard_9595ButtonObjects2= [];
gdjs.LEVEL_322Code.GDLeaderBoard_9595ButtonObjects3= [];
gdjs.LEVEL_322Code.GDPointerObjects1= [];
gdjs.LEVEL_322Code.GDPointerObjects2= [];
gdjs.LEVEL_322Code.GDPointerObjects3= [];
gdjs.LEVEL_322Code.GDPause_9595ButtonObjects1= [];
gdjs.LEVEL_322Code.GDPause_9595ButtonObjects2= [];
gdjs.LEVEL_322Code.GDPause_9595ButtonObjects3= [];
gdjs.LEVEL_322Code.GDOverlayObjects1= [];
gdjs.LEVEL_322Code.GDOverlayObjects2= [];
gdjs.LEVEL_322Code.GDOverlayObjects3= [];
gdjs.LEVEL_322Code.GDResume_9595ButtonObjects1= [];
gdjs.LEVEL_322Code.GDResume_9595ButtonObjects2= [];
gdjs.LEVEL_322Code.GDResume_9595ButtonObjects3= [];
gdjs.LEVEL_322Code.GDSound_9595OkObjects1= [];
gdjs.LEVEL_322Code.GDSound_9595OkObjects2= [];
gdjs.LEVEL_322Code.GDSound_9595OkObjects3= [];
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects1= [];
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects2= [];
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects3= [];
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects1= [];
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects2= [];
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects3= [];
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595CHARACTERObjects1= [];
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595CHARACTERObjects2= [];
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595CHARACTERObjects3= [];
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595LEVELObjects1= [];
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595LEVELObjects2= [];
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595LEVELObjects3= [];
gdjs.LEVEL_322Code.GDRestart_9595Button_9595SecondaryObjects1= [];
gdjs.LEVEL_322Code.GDRestart_9595Button_9595SecondaryObjects2= [];
gdjs.LEVEL_322Code.GDRestart_9595Button_9595SecondaryObjects3= [];
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595FRAMEObjects1= [];
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595FRAMEObjects2= [];
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595FRAMEObjects3= [];
gdjs.LEVEL_322Code.GDSound_9595ButtonObjects1= [];
gdjs.LEVEL_322Code.GDSound_9595ButtonObjects2= [];
gdjs.LEVEL_322Code.GDSound_9595ButtonObjects3= [];
gdjs.LEVEL_322Code.GDGlow_9595BallObjects1= [];
gdjs.LEVEL_322Code.GDGlow_9595BallObjects2= [];
gdjs.LEVEL_322Code.GDGlow_9595BallObjects3= [];
gdjs.LEVEL_322Code.GDGlow_9595ParticleObjects1= [];
gdjs.LEVEL_322Code.GDGlow_9595ParticleObjects2= [];
gdjs.LEVEL_322Code.GDGlow_9595ParticleObjects3= [];
gdjs.LEVEL_322Code.GDMini_9595LockObjects1= [];
gdjs.LEVEL_322Code.GDMini_9595LockObjects2= [];
gdjs.LEVEL_322Code.GDMini_9595LockObjects3= [];
gdjs.LEVEL_322Code.GDProfil_9595PicObjects1= [];
gdjs.LEVEL_322Code.GDProfil_9595PicObjects2= [];
gdjs.LEVEL_322Code.GDProfil_9595PicObjects3= [];
gdjs.LEVEL_322Code.GDSatoshi_9595LoadingObjects1= [];
gdjs.LEVEL_322Code.GDSatoshi_9595LoadingObjects2= [];
gdjs.LEVEL_322Code.GDSatoshi_9595LoadingObjects3= [];
gdjs.LEVEL_322Code.GDLoadingTextObjects1= [];
gdjs.LEVEL_322Code.GDLoadingTextObjects2= [];
gdjs.LEVEL_322Code.GDLoadingTextObjects3= [];
gdjs.LEVEL_322Code.GDOverlay_9595LoadingObjects1= [];
gdjs.LEVEL_322Code.GDOverlay_9595LoadingObjects2= [];
gdjs.LEVEL_322Code.GDOverlay_9595LoadingObjects3= [];


gdjs.LEVEL_322Code.asyncCallback69077372 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LEVEL_322Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level Selection", false);
}gdjs.LEVEL_322Code.localVariables.length = 0;
}
gdjs.LEVEL_322Code.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.LEVEL_322Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.LEVEL_322Code.asyncCallback69077372(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LEVEL_322Code.asyncCallback69076044 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LEVEL_322Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Transition_OUT"), gdjs.LEVEL_322Code.GDTransition_9595OUTObjects2);

{for(var i = 0, len = gdjs.LEVEL_322Code.GDTransition_9595OUTObjects2.length ;i < len;++i) {
    gdjs.LEVEL_322Code.GDTransition_9595OUTObjects2[i].getBehavior("FlashTransitionPainter").PaintEffect("0;3;43", 0.2, "Flash", "Forward", 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.LEVEL_322Code.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.LEVEL_322Code.localVariables.length = 0;
}
gdjs.LEVEL_322Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LEVEL_322Code.localVariables);
for (const obj of gdjs.LEVEL_322Code.GDTransition_9595OUTObjects1) asyncObjectsList.addObject("Transition_OUT", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.LEVEL_322Code.asyncCallback69076044(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LEVEL_322Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition_OUT"), gdjs.LEVEL_322Code.GDTransition_9595OUTObjects1);
{for(var i = 0, len = gdjs.LEVEL_322Code.GDTransition_9595OUTObjects1.length ;i < len;++i) {
    gdjs.LEVEL_322Code.GDTransition_9595OUTObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;3;43", 0.1, "Flash", "Backward", 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.LEVEL_322Code.eventsList1(runtimeScene);} //End of subevents
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


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.LEVEL_322Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LEVEL_322Code.GDNewTextObjects1.length = 0;
gdjs.LEVEL_322Code.GDNewTextObjects2.length = 0;
gdjs.LEVEL_322Code.GDNewTextObjects3.length = 0;
gdjs.LEVEL_322Code.GDTransition_9595OUTObjects1.length = 0;
gdjs.LEVEL_322Code.GDTransition_9595OUTObjects2.length = 0;
gdjs.LEVEL_322Code.GDTransition_9595OUTObjects3.length = 0;
gdjs.LEVEL_322Code.GDLeaderBoard_9595ButtonObjects1.length = 0;
gdjs.LEVEL_322Code.GDLeaderBoard_9595ButtonObjects2.length = 0;
gdjs.LEVEL_322Code.GDLeaderBoard_9595ButtonObjects3.length = 0;
gdjs.LEVEL_322Code.GDPointerObjects1.length = 0;
gdjs.LEVEL_322Code.GDPointerObjects2.length = 0;
gdjs.LEVEL_322Code.GDPointerObjects3.length = 0;
gdjs.LEVEL_322Code.GDPause_9595ButtonObjects1.length = 0;
gdjs.LEVEL_322Code.GDPause_9595ButtonObjects2.length = 0;
gdjs.LEVEL_322Code.GDPause_9595ButtonObjects3.length = 0;
gdjs.LEVEL_322Code.GDOverlayObjects1.length = 0;
gdjs.LEVEL_322Code.GDOverlayObjects2.length = 0;
gdjs.LEVEL_322Code.GDOverlayObjects3.length = 0;
gdjs.LEVEL_322Code.GDResume_9595ButtonObjects1.length = 0;
gdjs.LEVEL_322Code.GDResume_9595ButtonObjects2.length = 0;
gdjs.LEVEL_322Code.GDResume_9595ButtonObjects3.length = 0;
gdjs.LEVEL_322Code.GDSound_9595OkObjects1.length = 0;
gdjs.LEVEL_322Code.GDSound_9595OkObjects2.length = 0;
gdjs.LEVEL_322Code.GDSound_9595OkObjects3.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects1.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects2.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects3.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects1.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects2.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects3.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595CHARACTERObjects1.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595CHARACTERObjects2.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595CHARACTERObjects3.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595LEVELObjects1.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595LEVELObjects2.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595LEVELObjects3.length = 0;
gdjs.LEVEL_322Code.GDRestart_9595Button_9595SecondaryObjects1.length = 0;
gdjs.LEVEL_322Code.GDRestart_9595Button_9595SecondaryObjects2.length = 0;
gdjs.LEVEL_322Code.GDRestart_9595Button_9595SecondaryObjects3.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595FRAMEObjects1.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595FRAMEObjects2.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595FRAMEObjects3.length = 0;
gdjs.LEVEL_322Code.GDSound_9595ButtonObjects1.length = 0;
gdjs.LEVEL_322Code.GDSound_9595ButtonObjects2.length = 0;
gdjs.LEVEL_322Code.GDSound_9595ButtonObjects3.length = 0;
gdjs.LEVEL_322Code.GDGlow_9595BallObjects1.length = 0;
gdjs.LEVEL_322Code.GDGlow_9595BallObjects2.length = 0;
gdjs.LEVEL_322Code.GDGlow_9595BallObjects3.length = 0;
gdjs.LEVEL_322Code.GDGlow_9595ParticleObjects1.length = 0;
gdjs.LEVEL_322Code.GDGlow_9595ParticleObjects2.length = 0;
gdjs.LEVEL_322Code.GDGlow_9595ParticleObjects3.length = 0;
gdjs.LEVEL_322Code.GDMini_9595LockObjects1.length = 0;
gdjs.LEVEL_322Code.GDMini_9595LockObjects2.length = 0;
gdjs.LEVEL_322Code.GDMini_9595LockObjects3.length = 0;
gdjs.LEVEL_322Code.GDProfil_9595PicObjects1.length = 0;
gdjs.LEVEL_322Code.GDProfil_9595PicObjects2.length = 0;
gdjs.LEVEL_322Code.GDProfil_9595PicObjects3.length = 0;
gdjs.LEVEL_322Code.GDSatoshi_9595LoadingObjects1.length = 0;
gdjs.LEVEL_322Code.GDSatoshi_9595LoadingObjects2.length = 0;
gdjs.LEVEL_322Code.GDSatoshi_9595LoadingObjects3.length = 0;
gdjs.LEVEL_322Code.GDLoadingTextObjects1.length = 0;
gdjs.LEVEL_322Code.GDLoadingTextObjects2.length = 0;
gdjs.LEVEL_322Code.GDLoadingTextObjects3.length = 0;
gdjs.LEVEL_322Code.GDOverlay_9595LoadingObjects1.length = 0;
gdjs.LEVEL_322Code.GDOverlay_9595LoadingObjects2.length = 0;
gdjs.LEVEL_322Code.GDOverlay_9595LoadingObjects3.length = 0;

gdjs.LEVEL_322Code.eventsList2(runtimeScene);
gdjs.LEVEL_322Code.GDNewTextObjects1.length = 0;
gdjs.LEVEL_322Code.GDNewTextObjects2.length = 0;
gdjs.LEVEL_322Code.GDNewTextObjects3.length = 0;
gdjs.LEVEL_322Code.GDTransition_9595OUTObjects1.length = 0;
gdjs.LEVEL_322Code.GDTransition_9595OUTObjects2.length = 0;
gdjs.LEVEL_322Code.GDTransition_9595OUTObjects3.length = 0;
gdjs.LEVEL_322Code.GDLeaderBoard_9595ButtonObjects1.length = 0;
gdjs.LEVEL_322Code.GDLeaderBoard_9595ButtonObjects2.length = 0;
gdjs.LEVEL_322Code.GDLeaderBoard_9595ButtonObjects3.length = 0;
gdjs.LEVEL_322Code.GDPointerObjects1.length = 0;
gdjs.LEVEL_322Code.GDPointerObjects2.length = 0;
gdjs.LEVEL_322Code.GDPointerObjects3.length = 0;
gdjs.LEVEL_322Code.GDPause_9595ButtonObjects1.length = 0;
gdjs.LEVEL_322Code.GDPause_9595ButtonObjects2.length = 0;
gdjs.LEVEL_322Code.GDPause_9595ButtonObjects3.length = 0;
gdjs.LEVEL_322Code.GDOverlayObjects1.length = 0;
gdjs.LEVEL_322Code.GDOverlayObjects2.length = 0;
gdjs.LEVEL_322Code.GDOverlayObjects3.length = 0;
gdjs.LEVEL_322Code.GDResume_9595ButtonObjects1.length = 0;
gdjs.LEVEL_322Code.GDResume_9595ButtonObjects2.length = 0;
gdjs.LEVEL_322Code.GDResume_9595ButtonObjects3.length = 0;
gdjs.LEVEL_322Code.GDSound_9595OkObjects1.length = 0;
gdjs.LEVEL_322Code.GDSound_9595OkObjects2.length = 0;
gdjs.LEVEL_322Code.GDSound_9595OkObjects3.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects1.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects2.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595Change_9595Character_9595buttonObjects3.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects1.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects2.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595Change_9595LEVELS_9595buttonObjects3.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595CHARACTERObjects1.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595CHARACTERObjects2.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595CHARACTERObjects3.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595LEVELObjects1.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595LEVELObjects2.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595LEVELObjects3.length = 0;
gdjs.LEVEL_322Code.GDRestart_9595Button_9595SecondaryObjects1.length = 0;
gdjs.LEVEL_322Code.GDRestart_9595Button_9595SecondaryObjects2.length = 0;
gdjs.LEVEL_322Code.GDRestart_9595Button_9595SecondaryObjects3.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595FRAMEObjects1.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595FRAMEObjects2.length = 0;
gdjs.LEVEL_322Code.GDBACK2_9595OVERALL_9595FRAMEObjects3.length = 0;
gdjs.LEVEL_322Code.GDSound_9595ButtonObjects1.length = 0;
gdjs.LEVEL_322Code.GDSound_9595ButtonObjects2.length = 0;
gdjs.LEVEL_322Code.GDSound_9595ButtonObjects3.length = 0;
gdjs.LEVEL_322Code.GDGlow_9595BallObjects1.length = 0;
gdjs.LEVEL_322Code.GDGlow_9595BallObjects2.length = 0;
gdjs.LEVEL_322Code.GDGlow_9595BallObjects3.length = 0;
gdjs.LEVEL_322Code.GDGlow_9595ParticleObjects1.length = 0;
gdjs.LEVEL_322Code.GDGlow_9595ParticleObjects2.length = 0;
gdjs.LEVEL_322Code.GDGlow_9595ParticleObjects3.length = 0;
gdjs.LEVEL_322Code.GDMini_9595LockObjects1.length = 0;
gdjs.LEVEL_322Code.GDMini_9595LockObjects2.length = 0;
gdjs.LEVEL_322Code.GDMini_9595LockObjects3.length = 0;
gdjs.LEVEL_322Code.GDProfil_9595PicObjects1.length = 0;
gdjs.LEVEL_322Code.GDProfil_9595PicObjects2.length = 0;
gdjs.LEVEL_322Code.GDProfil_9595PicObjects3.length = 0;
gdjs.LEVEL_322Code.GDSatoshi_9595LoadingObjects1.length = 0;
gdjs.LEVEL_322Code.GDSatoshi_9595LoadingObjects2.length = 0;
gdjs.LEVEL_322Code.GDSatoshi_9595LoadingObjects3.length = 0;
gdjs.LEVEL_322Code.GDLoadingTextObjects1.length = 0;
gdjs.LEVEL_322Code.GDLoadingTextObjects2.length = 0;
gdjs.LEVEL_322Code.GDLoadingTextObjects3.length = 0;
gdjs.LEVEL_322Code.GDOverlay_9595LoadingObjects1.length = 0;
gdjs.LEVEL_322Code.GDOverlay_9595LoadingObjects2.length = 0;
gdjs.LEVEL_322Code.GDOverlay_9595LoadingObjects3.length = 0;


return;

}

gdjs['LEVEL_322Code'] = gdjs.LEVEL_322Code;
