var nosex
var nosey
function preload()
{
    maskimage = loadImage("image-removebg-preview.png")
}
function setup()
{
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", getPoses)
}
function getPoses(results)
{
  if(results.length > 0)
  {
    console.log(results)
    console.log("Nose X = " + results[0].pose.nose.x)
    console.log("Nose Y = " + results[0].pose.nose.y)
    nosex = results[0].pose.nose.x
    nosey = results[0].pose.nose.y
  }
}
function modelLoaded()
{
  console.log("PoseNet has started succesfully.")
}
function draw()
{
    image(video, 0, 0, 300, 300)
    image(maskimage, nosex - 50, nosey - 30, 100, 100)
}
function take_snapshot()
{
  save("myimage.png")
}