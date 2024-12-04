// Import the AudiomotionAnalyzer class
import AudioMotionAnalyzer from 'audiomotion-analyzer';

// Select the existing <canvas> with id="music_box" and the <audio> element
const canvas = document.getElementById('music_box');
const audioElement = document.getElementById('audio_source'); // Assumes the <audio> element has this id

// Check if the elements exist
if (!canvas) {
    console.error('Canvas element with id "music_canvas" not found!');
} else if (!audioElement) {
    console.error('Audio element with id "audio_source" not found!');
} else {
    // Initialize the analyzer using the existing canvas
    const audioMotion = new AudioMotionAnalyzer(canvas, {
        mode: 0, // Bar graph mode
        gradient: 'classic', // Use classic gradient
        showScaleX: true, // Show frequency scale
        showScaleY: true, // Show decibel scale
    });

    // Set up the Web Audio API
    const audioContext = new AudioContext();
    const audioSource = audioContext.createMediaElementSource(audioElement);

    // Connect the source to the analyzer
    audioSource.connect(audioMotion.audioNode);
    audioSource.connect(audioContext.destination);

    // Start the audio context when the audio starts playing
    audioElement.addEventListener('play', () => {
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
    });

    console.log('AudioMotion Analyzer is ready and using canvas!');
}
