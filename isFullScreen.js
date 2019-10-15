export default (options) => {

    if(options.allowDisable && window.location.search.includes('disableDeviceFrame=true')) {
        return true
    } 

    if(options.enabledURLs && options.disabledURLs) {
        console.warn('enabledURLs and disabledURLs cannot both be provided.')
        return false
    }

    if(!options.enabledURLs && !options.disabledURLs) {
        return false
    }

    var path = window.location.pathname.split('/')

    // Check to see if the url array has any pattern that matches the current path.
    var hasMatch = !!(options.enabledURLs || options.disabledURLs).find((urlPattern) => {
        var matches = true
        var requiresMatchingLength = true
        var splitURLPattern = urlPattern.split('/')
        splitURLPattern.find((segment, index) => {
            // Wildcard, don't need to check.
            if(segment === '^') return false
            // Full path wildcard, don't need to continue
            if(segment === '^^') {
                // Matching length is only ever not required when the pattern ends with this wildcard.
                requiresMatchingLength = false
                return true
            }
            // It's a match, return false to keep going.
            if(segment === path[index]) return false
            // Otherwise, no match... Return true to stop looking.
            matches = false
            return true
        })

        if(requiresMatchingLength && splitURLPattern.length !== path.length) {
            return false
        }

        return matches
    })
    
    return options.disabledURLs ? hasMatch : !hasMatch
}