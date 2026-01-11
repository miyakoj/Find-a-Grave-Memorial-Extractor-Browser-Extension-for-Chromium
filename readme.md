# Find a Grave Memorial Extractor For Chromium

**Note**: If you use the [WikiTree Browser Extension (WBE)](https://www.wikitree.com/index.php?title=Space:WikiTree_Browser_Extension) this extension is unnecessary unless you want to trigger a memorial list download from an icon in your browser toolbar. In the WBE version, the extraction is triggered by clicking a green "Extract to CSV" button in the search area on the memorial list page. WBE also works in Safari and Firefox.

This is the Chromium (Chrome, Edge, and Opera) version of a browser extension extracts a list of memorials from a Find a Grave cemetery memorial list page and saves the data in CSV format. You can filter the memorial list first by using FG's search function. **Note:** Find a Grave limits the number of memorials loaded on a single page to 10,000.

This extension was developed for genealogy researchers. Here is the [extension page on WikiTree](https://www.wikitree.com/wiki/Space:FindAGrave_Memorial_Extractor_Browser_Extension). Workarounds for the FG 10,000 memorial limit can be found here.

For the Firefox (Desktop and Mobile) and possibly Safari version see: https://github.com/miyakoj/FindaGrave-Memorial-Extractor-Browser-Extension. There are two versions primarily because I need to use manifest version 2 in order for the extension to work in Firefox for Android, but manifest version 2 is no longer supported in Chromium.

## How it works

1. Automatically scrolls and loads all memorials on a Find a Grave cemetery page.
2. Extracts key information for each memorial:
   * Memorial ID
   * Name of the deceased
   * Birth date
   * Death date
   * Whether or not a memorial photo exists
   * Whether or not a photo of the actual gravesite exists
   * Link to the memorial page
3. Downloads the extracted data as a CSV file and saves it to your device.

## Options

- You can choose to have the extension check each memorial to see if a profile for the deceased already exists on [WikiTree](https://www.wikitree.com). A column will be added to the CSV that displays a link to a related WikiTree profile if found (there could be multiple matching profiles). This feature is disabled by default. Thank you to [Aleš Trtnik](https://www.wikitree.com/wiki/Trtnik-2) for allowing me to use his WikiTree+ tool. **Note:** WikiTree+ data is only updated once a week.
- You can enable debugging, which is mostly useful for developers

## Installation

* Install from the [from the Chrome WebStore](https://chromewebstore.google.com/detail/find-a-grave-memorial-ext/oebiafbmkmnfajahonomfdkcocjkmcom).
* [Download a release](https://github.com/miyakoj/Find-a-Grave-Memorial-Extractor-Browser-Extension-for-Chromium/releases) from the releases page from the releases page, extract the extension into a folder, and [follow step #2 under "Development"](https://github.com/miyakoj/Find-a-Grave-Memorial-Extractor-Browser-Extension-for-Chromium#development).

## Usage

1. Pin the extension icon to your toolbar for convenience.
2. Navigate to a Find a Grave cemetery memorial list page.
3. Click the extension icon on the toolbar in your browser. The extension will scroll down the page until all memorials are loaded, extract the data for the memorials, and then either download a CSV file with the data to your default download location (Chrome and Opera) or show you prompt asking you what to do with the file (Edge).

**Note:** You must refresh your browser tab/window after changing any extension options.

## Development

To set up the extension for local development:

1. **Clone the repository:**
   ```
   git clone https://github.com/miyakoj/Find-a-Grave-Memorial-Extractor-Browser-Extension-for-Chromium.git
   cd Find-a-Grave-Memorial-Extractor-Browser-Extension-for-Chromium
   ```

2. **Load the extension into your browser:**
   - **[Desktop Chrome](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked):**
     1. Go to `chrome://extensions/`.
     2. Enable "Developer mode".
     3. Click "Load unpacked" and select the extension folder.

   - **[Desktop Edge](https://learn.microsoft.com/en-us/microsoft-edge/extensions/getting-started/extension-sideloading):**
     1. Go to `edge://extensions/`.
     2. Enable "Developer mode".
     3. Click "Load unpacked" and select the extension folder.

   - **[Desktop Opera](https://help.opera.com/en/extensions/basics):**
     1. Go to `opera:extensions`.
     2. Enable "Developer mode".
     3. Click "Load unpacked" and select the extension folder.

3. **Make changes and reload the extension in your browser to see the updates.**

## Testing

The following cemeteries were used for testing:
1. [Mount Newell Memorial Garden](https://www.findagrave.com/cemetery/2788136) (Small memorial list of 13.)
2. [Mount Zion MB Church Cemetery](https://www.findagrave.com/cemetery/2465876) (Small memorial list of 37 with every birth and death date combination.)
3. [Pleasant Grove MB Church Cemetery](https://www.findagrave.com/cemetery/62035) (Medium memorial list of 484.)
4. [Cottrell Memorial Garden](https://www.findagrave.com/cemetery/58088) (Large memorial list of 1,124.)
5. [Gracelawn Cemetery](https://www.findagrave.com/cemetery/615/gracelawn-cemetery) (Very large memorial list of 22,993.)

## Credits

* Extension icon by [Hina Siddiqui](https://www.dragonsandrainbows.com).
* The WikiTree profile check feature was inspired by a script originally provided by [Katie Bryant](https://www.wikitree.com/wiki/Cooper-28960).
## License

MIT License
