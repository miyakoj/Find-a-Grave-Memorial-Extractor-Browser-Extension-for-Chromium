const wikiTreeErrorMsg = 'Error downloading data from the WikiTree+ server.';

// Query the WikiTree+ server to find matching profiles for an array of FindAGrave memorial IDs.
async function findWTMatches(memorialIDs) {
    const params = new URLSearchParams();
    params.append('query', memorialIDs.join(','));
    // use the API endpoint originally meant for WikiTree BEE
    const wikitreePlusUrl = `https://plus.wikitree.com/function/wtFindAGrave4Bee/FindAGraveMemorialExtractor.json?${params}`;

    try {
        const response = await fetch(wikitreePlusUrl, {
            method: "GET",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        });

        if (!response.ok) {
            showErrorPopup(wikiTreeErrorMsg);
        }

        const result = await response.json();

        if (result.response.memorials.length > 0) {
            return result.response.memorials.map(memorial => ({
                memorialID: memorial.memorial,
                wikiTreeID: memorial.WikiTreeID
            }));
        }
        else {
            return null;
        }
    }
    catch (error) {
        if (options.debugMode) console.error(error);
        showErrorPopup(wikiTreeErrorMsg);
    }
}