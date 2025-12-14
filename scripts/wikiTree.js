const wikiTreeErrorMsg = 'Error downloading data from the WikiTree+ server.';
const batchSize = 1000; // number of memorial IDs to query WikiTree+ for at a time

// Query the WikiTree+ server to find matching profiles for an array of FindAGrave memorial IDs.
async function findWTMatchesInBatches(memorialIDs) {
    const batches = chunkArray(memorialIDs, batchSize);
    let allResults = [];
    for (const batch of batches) {
        if (options.debugMode) {
            console.log("batch:");
            console.log(batch);
        }

        const result = await findWTMatches(batch);
        if (result) {
            allResults = allResults.concat(result);
        }
    }

    // re-process just in case there is more than one matching WikiTree ID per memorial ID
    let allResultsMap = {};

    for (const index in allResults) {
        const result = allResults[index];

        if (!allResultsMap[result.memorialID]) {
            allResultsMap[result.memorialID] = [];
        }

        allResultsMap[result.memorialID].push(result.wikiTreeID);
    }

    return Object.keys(allResultsMap).length > 0 ? allResultsMap : null;
}

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

function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}