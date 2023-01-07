noseX=0;
noseY=0;

function preload()
{
mushtache=loadImage("https://th.bing.com/th/id/R.49f5630b9d58ef169be8ebdc9100b9fa?rik=nbz5esW6eKkWMQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fmoustache%2fmoustache_PNG38.png&ehk=LnTjQB8lsi3xQ4pbQIJDztf5QPHxnpjT4o6JvuauWyw%3d&risl=&pid=ImgRaw&r=0");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO)
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
image(video,0,0,300,300); 
image(mushtache,noseX-15,noseY-0,30,30);   
}
function take_snapshot(){
    save('myFilterImage.png')
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){

if (results.length>0) {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nose x =" +results[0].pose.nose.x);
    console.log("nose y =" +results[0].pose.nose.y);
    
}}