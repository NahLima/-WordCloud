# WordCloud

Você vai precisar do 

ex: 
````
link youtube = https://www.youtube.com/watch?v=iM-Kfuf0_H0

id video = iM-Kfuf0_H0
````

- No google shets criar uma planilha e colocar o id do vídeo nela
- Ir em ferramentas <> editor de script
- Colar a function scrapeCommentsWithoutReplies() do arquivo getCommentsYoutube.py
- Em serviços ir em YouTube Data API
- Depois executar o código
- Olhar a planilha que vc tinha colado o id 


Entendendo o código : [API YOUTUBE DEVELOPERS](https://developers.google.com/youtube/v3/docs/comments)


A seguinte estrutura JSON mostra o formato de um recurso de comentários
````
{
  "kind": "youtube#comment",
  "etag": etag,
  "id": string,
  "snippet": {
    "authorDisplayName": string,
    "authorProfileImageUrl": string,
    "authorChannelUrl": string,
    "authorChannelId": {
      "value": string
    },
    "channelId": string,
    "videoId": string,
    "textDisplay": string,
    "textOriginal": string,
    "parentId": string,
    "canRate": boolean,
    "viewerRating": string,
    "likeCount": unsigned integer,
    "moderationStatus": string,
    "publishedAt": datetime,
    "updatedAt": datetime
  }
}
````

## Referencias

ApiYoutube : https://www.youtube.com/watch?v=uD58-EHwaeI

Artigo nuvem de palavras = https://carolinescholles.com/br/

Artigo nuvem de palavras = https://ichi.pro/pt/gerar-nuvens-de-palavras-significativas-em-python-100630905917163

Api Twitter = https://www.youtube.com/watch?v=zsACB0QhMVc
                   
                    

                    
