# Timer Pro Sound Setup

## Audio Files Required

The Timer Pro app currently includes placeholder audio files that you need to replace with actual sound files:

## Required Files
- `sounds/start.mp3` - Sound played when timer starts
- `sounds/stop.mp3` - Sound played when timer pauses/stops
- `sounds/reset.mp3` - Sound played when timer is reset

## Sound Specifications

### Start Sound
- **Duration**: 200-400ms
- **Type**: Subtle click/cash register
- **Frequency**: Mid-range tones (around 800-1200Hz)
- **Volume**: Moderate (not too loud)

### Stop Sound
- **Duration**: 150-300ms
- **Type**: Soft chime or bell
- **Frequency**: Higher pitched than start sound
- **Volume**: Same as start sound

### Reset Sound
- **Duration**: 100-200ms
- **Type**: Short beep or "ding"
- **Frequency**: distinctive from start/stop sounds
- **Volume**: Slightly quieter

## Sound Formats
- Format: MP3 (best compatibility)
- Sample rate: 44.1kHz
- Bit rate: 128-192 kbps
- Stereo output preferred

## Installing Sounds
1. Download your preferred sound effects
2. Resize and compress to ~200-400ms duration
3. Convert to MP3 format if needed
4. Replace the files in the `sounds/` directory
5. Test the audio in different browsers

## Fallback System
If audio files fail to load, the app automatically uses Web Audio API to generate:
- Click sound (800Hz sine wave)
- Haptic feedback on touch devices
- No audio on unsupported browsers

## Sound Design Tips
- Keep sounds short and clear
- Ensure they're not too repetitive
- Match the app's modern aesthetic
- Test on different devices for best results