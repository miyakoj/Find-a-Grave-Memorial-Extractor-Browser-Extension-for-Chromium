# FindAGrave Memorial Extractor For Chromium

This is the Chromium (Chrome, Edge, and Opera) version of a browser extension extracts a list of memorials from a FindAGrave cemetery memorial list page and saves the data in CSV format. **Note:** FindAGrave limits the total length of a memorial list to 10,000 memorials on a single page.

This extension was developed for genealogy researchers. Here is the [extension page on WikiTree](https://www.wikitree.com/wiki/Space:FindAGrave_Memorial_Extractor_Browser_Extension) that may contain more information.

For the Firefox (Desktop and Mobile) and possibly Safari version see: https://github.com/miyakoj/FindAGrave-Memorial-Extractor-Browser-Extension. There are two versions because I need to use manifest version 2 in order for the extension to work in Firefox for Android, but manifest version 2 is no longer supported in Chromium.

## Features

- Automatically scrolls and loads all memorials on a FindAGrave cemetery page.
- Extracts key information for each memorial:
  - Memorial ID
  - Name of the deceased
  - Birth date
  - Death date
  - Whether or not a memorial photo exists
  - Whether or not a photo of the actual gravesite exists
  - Link to the memorial page
- Downloads the extracted data as a CSV file and saves it to your device.

## Installation

This extension is currently in the process of being submitted to the Chrome WebStore.

## Usage

1. Navigate to a FindAGrave cemetery memorial list page.
2. Pin the extension icon to your toolbar for convenience.
3. Click the extension icon on the toolbar in your browser. The extension will scroll down the page until all memorials are loaded, extract the data for the memorials, and then either download a CSV file with the data to your default download location (Chrome and Opera) or show you prompt asking you what to do with the file (Edge).

## Development

To set up the extension for local development:

1. **Clone the repository:**
   ```
   git clone https://github.com/miyakoj/FindAGrave-Memorial-Extractor-Browser-Extension.git
   cd FindAGrave-Memorial-Extractor-Browser-Extension
   ```

2. **Load the extension in your browser:**
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
5. [Gracelawn Cemetery](https://www.findagrave.com/cemetery/615/gracelawn-cemetery) (Extremely large memorial list of 22,993.)

## Extension Icon

[Down, download, arrow icon from the bitsies! pack](https://www.iconfinder.com/icons/728930/down_download_arrow_direction_move_icon)

## License

MIT License