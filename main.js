const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')



$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForware)

function handlePlay() {
  $video.play()
  $play.hidden = true
  $pause.hidden = false
  console.log('Le diste click al boton de play')
}

function handlePause() {
  $video.pause()
  $play.hidden = false
  $pause.hidden = true
  console.log('Le diste click al boton de pausa')
}

function handleBackward(){
    $video.currentTime -= 10
    console.log("Para atras 10 segundos",$video.currentTime)

}

function handleForware(){
    $video.currentTime+= 10
    console.log("Para adelante 10 segundos",$video.currentTime)
}
const $progress=document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate) //Evento de progreso

function handleLoaded(){
  $progress.max=$video.duration
  console.log("Cargo tu video",$video.duration)
}
function handleTimeUpdate() {
  $progress.value = $video.currentTime; // Actualiza el valor de la barra de progreso con el tiempo actual de reproducción del video
}

$progress.addEventListener('input', handleInput);

function handleInput() {
  $video.currentTime = $progress.value; // Actualiza el tiempo de reproducción del video con el valor de la barra de progreso
  console.log($progress.value); // Imprime el valor de la barra de progreso en la consola
}