/**
 * Created by boran on 30.05.2016.
 */

var quotesArray = ["Ne mutlu Türküm diyene. -Mustafa Kemal Atatürk",
    "Eğer yürüdüğünüz yolda güçlük ve engel yoksa, bilin ki o yol sizi bir yere ulaştırmaz.",
    "Hiç kimse bir alışkanlığa veda etmek cesaretini gösteremez.",
    "Dürüst insan her zaman gerçeği söyler, akıllı insan ise yalnız zamanında.",
    "Ben sadece asil bir ailenin evladı olmakla değil,fakat asil bir milletin evladı olmakla gururluyum. - Attila Han",
    "Türk, yıldırımdır, kasırgadır, Dünyayı aydınlatan güneştir. -Mustafa Kemal Atatürk"];

var count = 0;

$(document).ready(function(){
    $('#quote').text(quotesArray[count]);
	$('#newQuoteButton').click(function () {
        count++;
        if (count >= quotesArray.length) {
            count = 0;
            $('#quote').text(quotesArray[count]);
        }
		$('#quote').text(quotesArray[count]);
	});
    $('#twitter-button').click(function () {
        $("#share-twitter").attr('href', 'https://twitter.com/intent/tweet?text=' + quotesArray[count]);
    });
});
