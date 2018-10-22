---
title: Baofeng UV-B5 / UV-B6
published: 2018-10-22
---

# Baofeng UV-B5 / UV-B6

## Keys on the main screen

- `MENU` (short press): Enter menu
- `MENU` (long press): Lock the keyboard
- `UP`, `DOWN`, numbers: Select channel or frequency
- <code>AB&#x23ce;</code>: Switch channel A or B
- `FM` (short press): Switch to FM radio
- `FM` (long press): Delete current channel
- `W/SCAN` (short press): Switch freqency mode and channel mode
- `W/SCAN` (long press): Save to channel

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

Pressing the `MENU` key opens the pseudo menu item `00 MENU`. Then after
pressing `UP` or `DOWN`, it's going to select the item that was opened when you
closed the menu the last time.

| Item                        | Global / Channel | Function                                   | Description                                                  | Possible values                      |
|-----------------------------|------------------|--------------------------------------------|--------------------------------------------------------------|--------------------------------------|
| <code>00&nbsp;MENU</code>   | &nbsp;           | **Menu**                                   | _Dummy item displayed when you activate the menu_            | &nbsp;                               |
| <code>01&nbsp;STEP</code>   | Channel          | **Frequency Step**                         | How far are jumps between frequencies                        | 5 / 6.25 / 10 / 12.5 / 20 / 25 (kHz) |
| <code>02&nbsp;SQL</code>    | Global           | **Squelch Level**                          | Cuts low signal communication                                | 0..9                                 |
| <code>03&nbsp;SAVE</code>   | Global           | **Save Battery**                           | Switches transceiver to low when signal is good (see manual) | ON / OFF                             |
| <code>04&nbsp;TXPR</code>   | Channel          | **Transmit Power**                         | &nbsp;                                                       | HIGH / LOW                           |
| <code>05&nbsp;ROGE</code>   | Global           | **Roger Beep**                             | Send a series of beeps after transmission                    | ON / OFF                             |
| <code>06&nbsp;TOT</code>    | Global           | **Transmission Time Out Timer**            | Cut transmission after set time; prevents overheating        | 1M..7M (minutes) / OFF               |
| <code>07&nbsp;VOX</code>    | Global           | **Voice Operated Xmtr**                    | Transmit automatically without the PTT button                | 1..9 / OFF                           |
| <code>08&nbsp;BEEP</code>   | Global           | **Keypad beep**                            | Keys will beep                                               | ON / OFF                             |
| <code>09&nbsp;VOICE</code>  | Global           | **Voice Prompt**                           | Will read everything out loud                                | CHINA / ENGLIS / OFF                 |
| <code>10&nbsp;TDR</code>    | Global           | **Dual Watch / Dual Standby**              | Monitor both channel A and B                                 | ON / OFF                             |
| <code>11&nbsp;R-CODE</code> | Channel          | **Reception CTCSS**                        | Filters communication by a special subtone                   | *many values*\*                      |
| <code>12&nbsp;T-CODE</code> | Channel          | **Transmission CTCSS**                     | Sends a special subtone for filtering communication          | *many values*\*                      |
| <code>13&nbsp;ABR</code>    | Global           | **Display Backlight**                      | &nbsp;                                                       | ON / OFF                             |
| <code>14&nbsp;PTTID</code>  | Channel          | **Send Signal Code (PTT ID)**              | &nbsp;                                                       | ON / OFF                             |
| <code>15&nbsp;ANI</code>    | Global           | **Automatic Number Identification**        | &nbsp;                                                       | 000000..FFFFFF\*\*                   |
| <code>16&nbsp;PTIDM</code>  | Global           | **Mode of Transmitting Signal Code**       | Send PTTID on the beginning, end, or both                    | BOT / EOT / BOTH                     |
| <code>17&nbsp;DT-ST</code>  | Global           | **DTMF Side Tone**                         | Play DTMF tones locally                                      | ON / OFF                             |
| <code>18&nbsp;MDF 1</code>  | Global           | **Display Frequency A**                    | How to display channel A                                     | Channel / name / frequency           |
| <code>19&nbsp;MDF 2</code>  | Global           | **Display Frequency B**                    | How to display channel B                                     | Channel / name / frequency           |
| <code>20&nbsp;BCL</code>    | Channel          | **Busy Channel Lockout**                   | Prevents transmission if the frequency is busy               | ON / OFF                             |
| <code>21&nbsp;SFTD</code>   | Channel          | **Frequency Shift Direction**              | &nbsp;                                                       | 0 (zero) / + / -                     |
| <code>22&nbsp;OFFSET</code> | Channel          | **Offset Frequency**                       | &nbsp;                                                       | *numeric value*                      |
| <code>23&nbsp;SCANM</code>  | Global           | **Scan Type**                              | See [Scan Mode](#scan-mode)                                  | TO / CO / SE                         |
| <code>24&nbsp;REV</code>    | Channel          | **Reversed Duplex Mode**                   | &nbsp;                                                       | ON / OFF                             |
| <code>25&nbsp;STE</code>    | Global           | **Squelch Tail Elimination**               | &nbsp;                                                       | ON / OFF                             |
| <code>26&nbsp;NAME</code>   | Channel          | **Channel Name**                           | Not available in frequency mode                              | *custom text*                        |
| <code>27&nbsp;W/N</code>    | Channel          | **Wideband / Narrowband**                  | &nbsp;                                                       | WIDE / NARROW                        |
| <code>24&nbsp;TXAB</code>   | &nbsp;           | **Transmit selection while in dual watch** | Mentioned in the manual but not present on my radio &#x203D; | &nbsp;                               |
| <code>29&nbsp;COMP</code>   | &nbsp;           | **Noise Reduction**                        | Mentioned in the manual but not present on my radio &#x203D; | &nbsp;                               |

[CTCSS]: #ctcss

\* Use `MENU`, `UP` and `DOWN` to select the value.  
\*\* Use `7` and `9` for navigation through digits, `UP` and `DOWN` (or selection knob) to choose characters.

### Global / Channel

Some functions only apply to a channel. Once you switch channels, or you switch
from A to B, the menu item will change. If you're in frequency mode, the value
stays the same even if you change the frequency.  However A and B is still
going to be different.

### Navigating the menu
- *numbers*: quickly go to menu item
- <code>AB&#x23ce;</code>: Change value
- `MENU`: Confirm and get back to menu (except for `11 R-CODE` and `12 T-CODE`
  where it is also used for selection)
 
## Storing and deleting channels

To save a frequency to a channel, long-press `VM/SCAN`, then choose the desired
channel number. If the channel number blinks, it's vacant. Finally confirm with
`VM/SCAN`, `MENU` or <code>AB&#x23ce;</code>. Delete channels by long-pressing `FM`.

There are 99 positions available and 16 positions in the FM Radio mode.

## Side buttons

Under the PTT button, there are two other buttons with dots on them.

Button 2 (the top one) temporarily disables squelch, i.e. monitors the
frequency regardless the quality of the signal. When tapped, it also switches
display backlight on and off. Button 1 (the bottom one) seems to do absolutely
nothing.

## Scan mode

After pressing `MENU` and then `VM/SCAN`, the radio will start scanning either
frequencies or channels (depending on current mode). Once it finds a signal, it
does one of the following, depending on scanning mode (menu option `23 SCANM`):

- TO (Time Operation): stops briefly (about 5 seconds);
- CO (Carrier Operation): stops until the signal disappears;
- SE (Search Operation): stops forever.

Stop the scanning with `MENU` or `VM/SCAN`. You can also switch the scanning
direction with `UP` and `DOWN` keys or with the knob.

## FM radio

Works pretty much like the "normal" mode. There are 16 positions for FM
channels, see [Storing and deleting channels](#storing-and-deleting-channels)
for how to use them.

Frequencies go from 65 MHz (!) up to 108 MHz. Frequency step for FM radio is
always 1000kHz.

Note that if there is signal from the "normal" mode, FM radio will be
interrupted.

## Factory reset

Turn the radio off, press and hold `MENU` (not `FM` as the manual suggests),
then turn the radio on. A menu will apear:

- VFO: Reset channels etc.
- ALL: Factory reset (note: language will be switched to chinese as well)

## UV-B5 vs UV-B6 (comparison matrix)

| Model     | What's next to the volume knob | Everything else |
|-----------|--------------------------------|-----------------|
| **UV-B5** | Selection knob                 | Same as UV-B6   |
| **UV-B6** | Flashlight                     | Same as UV-B5   |
