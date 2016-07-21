# LightroomPresetViewer
[WIP] Utility for previewing the settings contained in a Lightroom preset (.lrtemplate) file


###Use case

1) I use Lightroom to edit photos, and have a large collection of "Develop" presets to help me process photos.

2) Some of these presets are from 3rd-parties, and I'm not quite sure what settings they contain. (Some presets are quite amazing, but if I don't fully understand what they're doing, I can't effectively modify them for my needs)


###Solution

A simple web viewer to display the contents of an `.lrtemplate` file.


###What is finished thus far

- shell for basic Angular app

- A hacky series of regexes that convert the .lrtemplate file into a serializable JSON string.

###To do

- Map the contained settings into recognizable values (corresponding to the Lightroom UI)

- Allow editing? 
