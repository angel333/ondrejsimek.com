---
title: Baofeng UV-B5 / UV-B6
published: 2018-10-22
---

# Baofeng UV-B5 / UV-B6

## Keys on the main screen

- <kbd>MENU</kbd> (short press): Enter menu
- <kbd>MENU</kbd> (long press): Lock the keyboard
- <kbd>UP</kbd>, <kbd>DOWN</kbd>, numbers: Select channel or frequency
- <kbd>AB&#x23ce;</kbd>: Switch channel A or B
- <kbd>FM</kbd> (short press): Switch to FM radio
- <kbd>FM</kbd> (long press): Delete current channel
- <kbd>W/SCAN</kbd> (short press): Switch freqency mode and channel mode
- <kbd>W/SCAN</kbd> (long press): Save to channel

## Main display

- Top area:
	- FM: [FM radio active](#fm-radio)
	- DW: Dual Watch / Dual Standby
	- R: Reversed Duplex Mode
	- VOX: Voice Operated Xmtr
	- Alarm icon: TODO
	- CT: Transmitting CTCSS
	- DCS: Transmitting DCS
	- Battery indicator
- Icons on the right
	- Signal indicator (rightmost)
	- Plus / minus: Frequency Shift Direction
	- HI: High transmit power
	- W: Wide channel
	- Lock: Keys locked
- Channels (A and B):
	- Channel name / frequency
	- Active channel indicator (arrow ow on the left) - if the channel is not
	  active but is receiving signal, the arrow will blink.
	- Channel number (number on the left)

## Menu system

Pressing the <kbd>MENU</kbd> key opens the pseudo menu item <kbd>00 MENU</kbd>.
Then after pressing <kbd>UP</kbd> or <kbd>DOWN</kbd>, it's going to select the
item that was opened when you closed the menu the last time.

| Item                        | Global / Channel | Function                                   | Description                                                  | Possible values                      |
|-----------------------------|------------------|--------------------------------------------|--------------------------------------------------------------|--------------------------------------|
| <kbd>00&nbsp;MENU</kbd>   | &nbsp;           | **Menu**                                   | _Dummy item displayed when you activate the menu_            | &nbsp;                               |
| <kbd>01&nbsp;STEP</kbd>   | Channel          | **Frequency Step**                         | How far are jumps between frequencies                        | 5 / 6.25 / 10 / 12.5 / 20 / 25 (kHz) |
| <kbd>02&nbsp;SQL</kbd>    | Global           | **Squelch Level**                          | Cuts low signal communication                                | 0..9                                 |
| <kbd>03&nbsp;SAVE</kbd>   | Global           | **Save Battery**                           | Switches transceiver to low when signal is good (see manual) | ON / OFF                             |
| <kbd>04&nbsp;TXPR</kbd>   | Channel          | **Transmit Power**                         | &nbsp;                                                       | HIGH / LOW                           |
| <kbd>05&nbsp;ROGE</kbd>   | Global           | **Roger Beep**                             | Send a series of beeps after transmission                    | ON / OFF                             |
| <kbd>06&nbsp;TOT</kbd>    | Global           | **Transmission Time Out Timer**            | Cut transmission after set time; prevents overheating        | 1M..7M (minutes) / OFF               |
| <kbd>07&nbsp;VOX</kbd>    | Global           | **Voice Operated Xmtr**                    | Transmit automatically without the PTT button                | 1..9 / OFF                           |
| <kbd>08&nbsp;BEEP</kbd>   | Global           | **Keypad beep**                            | Keys will beep                                               | ON / OFF                             |
| <kbd>09&nbsp;VOICE</kbd>  | Global           | **Voice Prompt**                           | Will read everything out loud                                | CHINA / ENGLIS / OFF                 |
| <kbd>10&nbsp;TDR</kbd>    | Global           | **Dual Watch / Dual Standby**              | Monitor both channel A and B                                 | ON / OFF                             |
| <kbd>11&nbsp;R-CODE</kbd> | Channel          | **Reception CTCSS**                        | Filters communication by a special subtone                   | *many values*\*                      |
| <kbd>12&nbsp;T-CODE</kbd> | Channel          | **Transmission CTCSS**                     | Sends a special subtone for filtering communication          | *many values*\*                      |
| <kbd>13&nbsp;ABR</kbd>    | Global           | **Display Backlight**                      | &nbsp;                                                       | ON / OFF                             |
| <kbd>14&nbsp;PTTID</kbd>  | Channel          | **Send Signal Code (PTT ID)**              | &nbsp;                                                       | ON / OFF                             |
| <kbd>15&nbsp;ANI</kbd>    | Global           | **Automatic Number Identification**        | &nbsp;                                                       | 000000..FFFFFF\*\*                   |
| <kbd>16&nbsp;PTIDM</kbd>  | Global           | **Mode of Transmitting Signal Code**       | Send PTTID on the beginning, end, or both                    | BOT / EOT / BOTH                     |
| <kbd>17&nbsp;DT-ST</kbd>  | Global           | **DTMF Side Tone**                         | Play DTMF tones locally                                      | ON / OFF                             |
| <kbd>18&nbsp;MDF 1</kbd>  | Global           | **Display Frequency A**                    | How to display channel A                                     | Channel / name / frequency           |
| <kbd>19&nbsp;MDF 2</kbd>  | Global           | **Display Frequency B**                    | How to display channel B                                     | Channel / name / frequency           |
| <kbd>20&nbsp;BCL</kbd>    | Channel          | **Busy Channel Lockout**                   | Prevents transmission if the frequency is busy               | ON / OFF                             |
| <kbd>21&nbsp;SFTD</kbd>   | Channel          | **Frequency Shift Direction**              | &nbsp;                                                       | 0 (zero) / + / -                     |
| <kbd>22&nbsp;OFFSET</kbd> | Channel          | **Offset Frequency**                       | &nbsp;                                                       | *numeric value*                      |
| <kbd>23&nbsp;SCANM</kbd>  | Global           | **Scan Type**                              | See [Scan Mode](#scan-mode)                                  | TO / CO / SE                         |
| <kbd>24&nbsp;REV</kbd>    | Channel          | **Reversed Duplex Mode**                   | &nbsp;                                                       | ON / OFF                             |
| <kbd>25&nbsp;STE</kbd>    | Global           | **Squelch Tail Elimination**               | &nbsp;                                                       | ON / OFF                             |
| <kbd>26&nbsp;NAME</kbd>   | Channel          | **Channel Name**                           | Not available in frequency mode                              | *custom text*                        |
| <kbd>27&nbsp;W/N</kbd>    | Channel          | **Wideband / Narrowband**                  | &nbsp;                                                       | WIDE / NARROW                        |
| <kbd>24&nbsp;TXAB</kbd>   | &nbsp;           | **Transmit selection while in dual watch** | Mentioned in the manual but not present on my radio &#x203D; | &nbsp;                               |
| <kbd>29&nbsp;COMP</kbd>   | &nbsp;           | **Noise Reduction**                        | Mentioned in the manual but not present on my radio &#x203D; | &nbsp;                               |

[CTCSS]: #ctcss

\* Use <kbd>MENU</kbd>, <kbd>UP</kbd> and <kbd>DOWN</kbd> to select the value.  
\*\* Use <kbd>7</kbd> and <kbd>9</kbd> for navigation through digits,
<kbd>UP</kbd> and <kbd>DOWN</kbd> (or selection knob) to choose characters.

### Global / Channel

Some functions only apply to a channel. Once you switch channels, or you switch
from A to B, the menu item will change. If you're in frequency mode, the value
stays the same even if you change the frequency.  However A and B is still
going to be different.

### Navigating the menu
- *numbers*: quickly go to menu item
- <kbd>AB&#x23ce;</kbd>: Change value
- <kbd>MENU</kbd>: Confirm and get back to menu (except for <kbd>11
  R-CODE</kbd> and <kbd>12 T-CODE</kbd> where it is also used for selection)
 
## Storing and deleting channels

To save a frequency to a channel, long-press <kbd>VM/SCAN</kbd>, then choose the desired
channel number. If the channel number blinks, it's vacant. Finally confirm with
<kbd>VM/SCAN</kbd>, <kbd>MENU</kbd> or <kbd>AB&#x23ce;</kbd>. Delete channels
by long-pressing <kbd>FM</kbd>.

There are 99 positions available and 16 positions in the FM Radio mode.

## Side buttons

Under the PTT button, there are two other buttons with dots on them.

Button 2 (the top one) temporarily disables squelch, i.e. monitors the
frequency regardless the quality of the signal. When tapped, it also switches
display backlight on and off. Button 1 (the bottom one) seems to do absolutely
nothing.

## Scan mode

After pressing <kbd>MENU</kbd> and then <kbd>VM/SCAN</kbd>, the radio will
start scanning either frequencies or channels (depending on current mode). Once
it finds a signal, it does one of the following, depending on scanning mode
(menu option <kbd>23 SCANM</kbd>):

- TO (Time Operation): stops briefly (about 5 seconds);
- CO (Carrier Operation): stops until the signal disappears;
- SE (Search Operation): stops forever.

Stop the scanning with <kbd>MENU</kbd> or <kbd>VM/SCAN</kbd>. You can also
switch the scanning direction with <kbd>UP</kbd> and <kbd>DOWN</kbd> keys or
with the knob.

## FM radio

Works pretty much like the "normal" mode. There are 16 positions for FM
channels, see [Storing and deleting channels](#storing-and-deleting-channels)
for how to use them.

Frequencies go from 65 MHz (!) up to 108 MHz. Frequency step for FM radio is
always 1000kHz.

Note that if there is signal from the "normal" mode, FM radio will be
interrupted.

## Factory reset

Turn the radio off, press and hold <kbd>MENU</kbd> (not <kbd>FM</kbd> as the
manual suggests), then turn the radio on. A menu will apear:

- VFO: Reset channels etc.
- ALL: Factory reset (note: language will be switched to chinese as well)

## UV-B5 vs UV-B6 (comparison matrix)

| Model     | What's next to the volume knob | Everything else |
|-----------|--------------------------------|-----------------|
| **UV-B5** | Selection knob                 | Same as UV-B6   |
| **UV-B6** | Flashlight                     | Same as UV-B5   |
