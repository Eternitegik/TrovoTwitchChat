window.onload = function(){
    var urlProtocol = document.location.protocol;
    var urlHost = document.location.host
    var urlSearch = document.location.search;
    var urlPathname = document.location.pathname;
    
    var userTrovo = '';
    var userTwitch = '';
    
    console.log("urlProtocol:" + urlProtocol);
    console.log("urlHost:" + urlHost);
    console.log("urlSearch:" + urlSearch);
    console.log("urlPathname:" + urlPathname);
    
    console.log('----------------------1');
    
    if(urlSearch !== ''){
        console.log('----------------------2');
        urlSearch = urlSearch.substring(1);
        urlSearch = urlSearch.split("&");
        userTrovo = urlSearch[0];
        userTrovo = userTrovo.split("=")[1];
        userTwitch = urlSearch[1];
        userTwitch = userTwitch.split("=")[1];
        
        if(userTrovo !== '' && userTwitch !== ''){
            
            document.querySelector('#TrovoUser').innerHTML = '<iframe id="chatTrovo" frameborder="0" src="https://trovo.live/chat/'+ userTrovo +'?">'
            
            var availableScreenWidth = window.innerWidth;
            var availableScreenHeight = window.innerHeight - 4;

            var widthjs = availableScreenWidth - 350;

            var embed = new Twitch.Embed("twitch-embed", {
                width: widthjs,
                height: availableScreenHeight,
                channel: userTwitch,
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
            
            document.getElementById("mess").style.display = 'none';
            document.getElementById("stream").style.display = 'inherit';
        }
        else{
            document.querySelector('#mess').innerHTML = 'Заполните в URL параметры Trovo= и Twitch= именем стримера с соответствующих площадок и перейдите по ссылке'
        }
       }
    else{
        var ur = urlProtocol + '//' +  urlHost + urlPathname + "?Trovo=&Twitch="
        window.open(ur);
        console.log(ur);
        
        console.log('----------------------3');
        
        document.querySelector('#mess').innerHTML = '<a href="' + ur + '">Перейдите по: '+ur+'</a>' 
    }
}