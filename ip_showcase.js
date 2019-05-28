function main() {  
    // Test for Mobile WebKit browser

    var isMobile = WebKitDetect.isMobile();
	if (isMobile==true){
document.getElementById('hp_showcase').innerHTML = '<a href="/triplej/m/podcasts/index.htm"><img src="/triplej/showcase/img/ip_showcase_m.jpg" alt="triple j mobile podcasts"></a>';
	}
}

main();