window.onload = function(){
    var urlProtocol = document.location.protocol;
    var urlHost = document.location.host
    var urlSearch = document.location.search;
    var urlPathname = document.location.pathname;
    
    console.log('----------------------1');
    
    if(urlSearch !== ''){
        console.log('----------------------2');
        urlSearch = urlSearch.substring(1);
        urlSearch = urlSearch.split("&");
        var urlSearchA = urlSearch[0];
        urlSearchA = urlSearchA.split("=")[1];
        var urlSearchB = urlSearch[1];
        urlSearchB = urlSearchB.split("=")[1];

        var availableScreenWidth = window.innerWidth;
        var availableScreenHeight = window.innerHeight - 4;

        var widthjs = availableScreenWidth - 350;

        var embed = new Twitch.Embed("twitch-embed", {
            width: widthjs,
            height: availableScreenHeight,
            channel: "shnumi",
            layout: "video-with-chat",
            autoplay: true,
            parent: ["eternitegik.github.io"],
            id: "pl"
        });

        embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
            var player = embed.getPlayer();
            player.play();
        });            

        document.getElementById("Twitc").style.width = widthjs + 'px';
        document.getElementById("Twitc").style.height = availableScreenHeight + 'px';

        document.getElementById("chatTrovo").style.height = availableScreenHeight + 'px';
       }
    else{
        //window.open(urlProtocol + urlHost + urlPathname + "?Trovo=&Tritch=");
        console.log(urlProtocol + urlHost + urlPathname + "?Trovo=&Tritch=");
        console.log('----------------------3');
    }
}