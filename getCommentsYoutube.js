function scrapeCommentsWithoutReplies(){
    let ss = SpreadsheetApp.getActiveSpreadsheet()
    let result = [['Name', 'Comment', 'Time', 'Likes', 'Reply Count']]
    let vid = ss.getSheets()[0].getRange(1, 1).getValue()
    let nextPageToken = undefined

    while(1){
        let data = YouTube.CommentThreads.list('snippet', {videoId: vid, maxResults: 100, pageToken: nextPageToken})
        nextPageToken = data.nextPageToken
        // console.log(nextPageToken)
        for (let row=0
             row < data.items.length
             row++) {
            result.push([data.items[row].snippet.topLevelComment.snippet.authorDisplayName,
                         data.items[row].snippet.topLevelComment.snippet.textDisplay,
                         data.items[row].snippet.topLevelComment.snippet.publishedAt,
                         data.items[row].snippet.topLevelComment.snippet.likeCount,
                         data.items[row].snippet.totalReplyCount])
        }
        if(nextPageToken == "" | | typeof nextPageToken == = "undefined"){
            break
        }
    }
    let newSheet = ss.insertSheet(ss.getNumSheets())
    newSheet.getRange(1, 1, result.length, 5).setValues(result)

}
