/**
 * Created by xl on 2014/8/15.
 */
(function () {
	var page = document.querySelector( ".page" );
	var layout = document.querySelector( "#layout" );
	var musicLogo = document.querySelector( ".music-logo" );
	var audio = document.querySelector( "audio" );
	Z.onTouchStart( document.body, function () {
		if ( !musicLogo.classList.contains( "stop" ) ) {
			musicLogo.classList.add( "play" );
			audio.play();
			layout.classList.add( "play" );
		}
	} );

	Z.bindEvent(audio,"ended",function(){
		audio.load();
		audio.play();
	});

	Z.onTap( musicLogo, function () {
		if ( musicLogo.classList.contains( "play" ) ) {
			audio.pause();
			musicLogo.classList.remove( "play" );
			musicLogo.classList.add( "stop" );
			layout.classList.remove( "play" )
		}
		else {
			audio.play();
			musicLogo.classList.add( "play" );
			musicLogo.classList.remove( "stop" );
			layout.classList.add( "play" );
		}
	} );

	var pagelist = [2,3,4,5,6];

	for (var i = 0; i<pagelist.length; i++) {

		var newPage = document.createElement( "div" );

		newPage.classList.add( "page" );
		if(pagelist[i]==6){
			newPage.classList.add( "pageH" );
		}
		newPage.setAttribute("pageindex",pagelist[i]);
		newPage.innerHTML = page.innerHTML;//设置全屏背景

		layout.appendChild( newPage );
	};

	Z.loopArray( document.querySelectorAll( ".page" ), function ( page ,index) {

		var pageindex = 1;
		if(index!=0)
		{
			pageindex = parseInt(page.getAttribute("pageindex"));
		}

		if ( page.querySelector( "img" ) ) {
			page.querySelector( "img" ).src = "img/" + pageindex + ".png";

			//向界面中添加图片元素
			function addElement(eleindex,imgindex,actionstring,link,clickfuc)
			{
				var pagecontent = document.createElement("div");
				pagecontent.classList.add("pagecontent"+eleindex+"_"+imgindex);
				if(actionstring!=null&&actionstring!=""){
					pagecontent.classList.add(actionstring);
				}

				if(clickfuc!=null&&clickfuc!=""){

					pagecontent.innerHTML = '<a onclick="'+clickfuc+'" ><img class="pageimg'+eleindex+'_'+imgindex+'" src="img/'+eleindex+'-'+imgindex+'.png"  ></a>';
				}
				else if(link!=null&&link!=""){
					pagecontent.innerHTML = '<a href="'+link+'"><img class="pageimg'+eleindex+'_'+imgindex+'" src="img/'+eleindex+'-'+imgindex+'.png"  ></a>';
				}
				else{
					pagecontent.innerHTML = '<img class="pageimg'+eleindex+'_'+imgindex+'" src="img/'+eleindex+'-'+imgindex+'.png"  >';
				}

				page.appendChild(pagecontent);
				return pagecontent;
			}

			switch(pageindex)
			{
				case 1:
					var pagecontent_1 = document.createElement("div");
					pagecontent_1.classList.add("pagecontent"+pageindex+"_1");
					pagecontent_1.innerHTML = '<img class="pageimg'+pageindex+'_1 imgleftmove'+pageindex+'" src="img/'+pageindex+'-1.png"  >';
					page.appendChild(pagecontent_1);
					break;
				case 2:
					for (var i = 1; i <= 3; i++) {
						if(i==1){
							addElement(pageindex,i);
						}
						else if(i==2){
							addElement(pageindex,i,"bigsmall");
						}
						else if(i==3){
							var content = addElement(pageindex,i,"");
							content.onload = p2imgeload(content);
						}
						else{
							addElement(pageindex,i,"");
						}
					};
					break;
				case 3:
					var pagecontent_1 = document.createElement("div");
					pagecontent_1.classList.add("pagecontent"+pageindex+"_1");
					pagecontent_1.classList.add("shake-base");
					pagecontent_1.innerHTML = '<img class="pageimg'+pageindex+'_1" src="img/'+pageindex+'-1.png"  >';
					page.appendChild(pagecontent_1);
					break;
				case 4:
					var pagecontent_1 = document.createElement("div");
					pagecontent_1.classList.add("pagecontent"+pageindex+"_1");
					pagecontent_1.classList.add("trans_effect");
					pagecontent_1.innerHTML = '<img class="pageimg'+pageindex+'_1" src="img/'+pageindex+'-1.png"  >';
					page.appendChild(pagecontent_1);
					break;
				case 5:
					
					for (var i = 3; i <= 8; i++) {
						if(i==7){
							addElement(pageindex,i,"imgleftmove"+pageindex);
						}
						else if(i==8){
							var content = addElement(pageindex,i,"imgshow5");
						}
						else{
							addElement(pageindex,i,"");
						}
					};
					
					break;
				case 6:
					for (var i = 1; i <= 8; i++) {
						switch(i)
						{
							case 2://左边奶头
								addElement(pageindex,i,"","http://v.qq.com/boke/page/e/0/7/e0137nq2de7.html");
								break;
							case 3://右边奶头
								addElement(pageindex,i,"","http://v.qq.com/boke/page/m/0/x/m01371b7rwx.html");
								break;
							case 6://分享
								var content = addElement(pageindex,i,"","","showshare();");
								break;
							case 7://关注
								addElement(pageindex,i,"","http://mp.weixin.qq.com/s?__biz=MjM5MjE0MTcyMA==&mid=204250122&idx=1&sn=cdf832ce0c16ebeb2536e13cf53d2ca9&scene=1&key=2f9b67bbe127ff9d3bf1f969408f517480993496aa1f6964104ee84968786949120a689a0ddd63ca8d2247bdf9178e21&ascene=0&uin=MjU0OTA3OTg4MA%3D%3D&pass_ticket=j6isHwE9DGVG41ukNsdAu%2FbyF3pef%2FyUBIxr2YIpOyurx2q9uGPCjFf7JEZd9oNa");
								break;
							case 8:
								var pagelk = document.createElement("div");
								pagelk.classList.add("pagecontent"+pageindex+"_"+i);
								pagelk.innerHTML = '<span>linking5技术支持</span>';
								page.appendChild(pagelk);
								break;
							default:
								addElement(pageindex,i,"");
						}
					};
				break;
			}
		}


		// Z.onTap( page.querySelector( "img" ), function () {
		// 	if ( links[index] ) {
		// 		location.href = links[index];
		// 	}
		// } );

	} );

	var startTime = 0, endTime = 0;
	startTime = +new Date();
	var img = document.createElement("img");
	img.src = "img/1.png";
	img.onload = function () {
		endTime = +new Date();
		var loadTime = 0;
		//保证加载时间最小为3500
		var temploadtime = 3500;

		if ( endTime - startTime < temploadtime ) {
			loadTime = temploadtime - (endTime - startTime)
		}
		setTimeout( function () {
			document.body.removeChild( document.querySelector( ".page-loading" ) );
			if ( !audio.paused ) {
				musicLogo.classList.add( "play" );
				layout.classList.add( "play" );
			}
			tc.ScreenSystem( layout );
		}, loadTime );

	};
})();

document.addEventListener( 'WeixinJSBridgeReady', function () {
	var WeixinJSBridge = window.WeixinJSBridge;

	// 发送给好友;
	WeixinJSBridge.on( 'menu:share:appmessage', function () {
		WeixinJSBridge.invoke( 'sendAppMessage', {
			"appid" : dataForWeixin.appId,
			"img_url" : dataForWeixin.picture,
			"img_width" : "120",
			"img_height" : "120",
			"link" : dataForWeixin.url,
			"desc" : dataForWeixin.desc,
			"title" : dataForWeixin.title
		}, function ( res ) {
		} );
	} );

	// 分享到朋友圈;
	WeixinJSBridge.on( 'menu:share:timeline', function () {
		WeixinJSBridge.invoke( 'shareTimeline', {
			"img_url" : dataForWeixin.picture,
			"img_width" : "120",
			"img_height" : "120",
			"link" : dataForWeixin.url,
			"desc" : dataForWeixin.desc,
			"title" : dataForWeixin.title
		}, function ( res ) {
		} );
	} );

	// 分享到微博;
	WeixinJSBridge.on( 'menu:share:weibo', function () {
		WeixinJSBridge.invoke( 'shareWeibo', {
			"content" : dataForWeixin.title + ' ' + dataForWeixin.url,
			"url" : dataForWeixin.url
		}, function ( res ) {
		} );
	} );

	// 分享到Facebook
	WeixinJSBridge.on( 'menu:share:facebook', function () {
		WeixinJSBridge.invoke( 'shareFB', {
			"img_url" : dataForWeixin.picture,
			"img_width" : "120",
			"img_height" : "120",
			"link" : dataForWeixin.url,
			"desc" : dataForWeixin.desc,
			"title" : dataForWeixin.title
		}, function ( res ) {
		} );
	} );
}, false );

function showshare()
{
	var share = document.getElementById("sharediv");
	share.classList.add("show");
}

function sharehide(share)
{
	share.classList.remove("show");
}

function p2imgeload(content,flag)
{

	setInterval( function () {

		if(flag){
			content.childNodes[0].src = "img/2-4.png";
			flag = false;
		}else{
			content.childNodes[0].src = "img/2-3.png";
			flag = true;
		}
	}, 1000 );
}