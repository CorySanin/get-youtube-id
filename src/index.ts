
export interface GetYouTubeIDOpts {
    fuzzy?: boolean
}

const patterns = [
    new RegExp('youtu\\.be/([^#&?]{11})'),       // youtu.be/<id>
    new RegExp('[?&]v=([^#&?]{11})'),            // ?v=<id>
    new RegExp('(?:embed|shorts)/([^#&?]{11})'), // embed/<id> and shorts/<id>
    new RegExp('/v/([^#&?]{11})'),               // /v/<id>
];

function onlyUnique<T>(value: T, index: number, array: T[]) {
  return array.indexOf(value) === index;
}

const basicYoutubeCheck = new RegExp('youtu\\.?be');
const fuzzySplitter = new RegExp('[/&?=#.\\s]');
const fuzzyCheck = new RegExp('^[^#&?]{11}$');

/**
 * Attempt to get the video ID from a YouTube URL
 * @param url URL to parse
 * @param opts parsing options
 * @returns The video ID, or null if parsing failed.
 */
export function getYouTubeID(url: string, opts: GetYouTubeIDOpts = {}) {
    const urlSplit = (url && url.split('/')) || [''];
    const domain = urlSplit[url.startsWith('http') ? Math.min(2,urlSplit.length) : 0]!;
    if (!basicYoutubeCheck.test(domain)) {
        return null;
    }
    for (const pat of patterns) {
        const result = pat.exec(url)?.[1];
        if (result) {
            return result;
        }
    }
    if (!(opts.fuzzy ?? true)) {
        return null;
    }
    const tokens = url.split(fuzzySplitter);
    const matches = tokens.filter(t => fuzzyCheck.test(t)).filter(onlyUnique);
    return ((matches.length === 1 && matches[0]) || null);
}

export default getYouTubeID;
