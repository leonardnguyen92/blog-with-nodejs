const generateThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
};

const parseTags = (tagsString) => {
    if (!tagsString) return [];
    return [...new Set(
        tagsString.split(",")
            .map(t => t.trim().toLowerCase())
            .filter(Boolean)
    )];
};

module.exports = { generateThumbnail, parseTags };