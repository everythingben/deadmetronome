# Dead Metronome

[Dead Metronome](http://deadmetronome.com) is a collection of music transcriptions, analyses and arrangements. All content is created and maintained by me ([Ben Lane](http://benlane.net)) and built with [Hexo](https://hexo.io).

## Music Notation

I spent a lot of time finding a good workflow for embedding snippets of music notation in posts. I'll describe it here so I don't forget.

### Step 0: Create

Use [MuseScore](https://musescore.org/en) to manually create the snippet. Go to **Layout > Page Settings**, change Page Size to "Letter", and set Scaling to 3.176mm for now. This should look good enough at 450px width.

### Step 1: Calculate

We want to create four separate images. The widths will be 300px, 350px, 400px and 450px. The 450px Scaling setting was established in Step 1. We can determine the Scaling value for the others using this formula:

`originalScaling * (450 / targetWidth)`

For example, since we chose a 3.176 Scaling value for the 450px image, the 400px Scaling value would be:

`3.176 * (450 / 400) = 3.573`

And the others:

`3.176 * (450 / 350) = 4.083`

`3.176 * (450 / 300) = 4.764`

### Step 2: Tweak

Tweak these layout settings until all elements look nice and balanced:

* **Layout > Page Settings > Page Size**
  * "Letter" should work fine.
* **Layout > Page Settings > Scaling**
  * 3.176mm looks good with the snippets I have created so far.
  * It would be nice to find a value that works for all snippets but this might be unrealistic.
* **Layout > Increase/Decrease Stretch**
  * Select specific measure(s) and then increase/decrease spacing between notes as necessary.
* **Style > General > Header/Footer/Numbers**
  * Remove measure numbers.
* **Style > General > Page**
  * Focus on staff distance, min. system distance, and max. system distance.
  * These will increase/decrease the spacing between staves as necessary.

### Step 3: Snapshot

For each of the four image widths (300, 350, 400, 450):

* Set Scaling to the value calculated in Step 1 that corresponds to the currently chosen width
* Toggle the Image Capture icon on the right side of the toolbar.
* Adjust the gray box until only the desired area is covered.
* Try to crop out all whitespace since we want CSS to handle spacing.
* Right-click the box and select "Save As (Screenshot Mode)"
* Enter a title, change the image type to SVG and Save

### Step 5: Embed

Copy all SVGs to the appropriate post asset directory in this repo under `./source/_posts`.

Put something like this in the post's markdown file:

```
<picture>
  <source media="(min-width: 450px)" srcset="{% asset_path large.svg %}">
  <source media="(min-width: 400px)" srcset="{% asset_path medium.svg %}">
  <source media="(min-width: 350px)" srcset="{% asset_path small.svg %}">
  <img src="{% asset_path tiny.svg %}" class="music-notation">
</picture>
```

Note: line breaks in the above snippet may result in unwanted `<br/>` tags.

### Step 6: Style

This is an example of how to use media queries to change the image width responsively (copied from my [Manifesto](https://github.com/everythingben/manifesto) theme):

```
// medium
@media screen and (max-width: 28.0625rem) { // between 400 and 449...
    max-width: 23rem; // ...image is 400
}

// small
@media screen and (max-width: 24.9375rem) { // between 350 and 399...
    max-width: 19.875rem; // ...image is 350
}

// tiny
@media screen and (max-width: 21.8125rem) { // 349 or less...
    max-width: 16.75rem; // ...image is 300
}

// large
@media screen and (min-width: 28.125rem) { // 450px or wider...
    max-width: 26.125rem; // ...image is 450
}
```

### Notes

* MuseScore has an API and plugin framework. Maybe we can use them to automate parts of this workflow.
* MuseScore also has a CLI. Here's a useful command for converting MusicXML to PDF (OSX):
```
/Applications/MuseScore\ 2.app/Contents/MacOS/mscore ~/Desktop/input.xml -o ~/Desktop/output.pdf
```