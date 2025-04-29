function genXML() {
    var filename = document.getElementById("filename").value;
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var image = document.getElementById("image").value;
    var type = document.getElementById("type").value;
    var domain = document.getElementById("domain").value;
    var duration = document.getElementById("duration").value;

    document.getElementById("xml").innerText = '<?xml version="1.0" encoding="UTF-8" ?>\n<rss xmlns:googleplay="http://www.google.com/schemas/play-podcasts/1.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:rawvoice="http://www.rawvoice.com/rawvoiceRssModule/" xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0">\n  <channel>\n    <title>' + name + '</title>\n    <googleplay:author>The Feed</googleplay:author>\n    <rawvoice:rating>TV-G</rawvoice:rating>\n    <rawvoice:location>Rio de Janeiro, Brazil</rawvoice:location>\n    <rawvoice:frequency>Daily</rawvoice:frequency>\n    <author>' + name + '</author>\n    <itunes:author>The Feed</itunes:author>\n    <itunes:email>feed@example.com</itunes:email>\n    <itunes:category text="Technology" />\n    <image>\n<url>' + image + '</url>\n<title>Audio Feed</title>\n<link>' + domain + '</link>\n    </image>\n    <itunes:owner>\n<itunes:name>The Feed</itunes:name>\n<itunes:email>feed@example.com</itunes:email>\n    </itunes:owner>\n    <itunes:keywords>Audio Feed</itunes:keywords>\n    <copyright>The Feed</copyright>\n    <description>The ever changing feed.</description>\n    <googleplay:image href="' + image + '" />\n    <language>en-us</language>\n    <itunes:explicit>no</itunes:explicit>\n    <pubDate>Sat, 05 Apr 2025 13:00:00 GMT</pubDate>\n    <link>' + domain + '/audio.xml</link>\n    <itunes:image href="' + image + '" />\n';

    if (number == '') {
        number = 1;
    }
    var i;
    for (i = 0; i < number; i++) {
        document.getElementById("xml").innerText += '\n<item>\n<author>The Feed</author>\n<itunes:author>The Feed</itunes:author>\n<title>' + name + ' Part ' + number + '</title >\n <pubDate > Sun, 30 Mar 2025 13:00:00 GMT</pubDate >\n <enclosure url = "' + domain + '/' + filename + '_' + number + type + '" type = "audio/mpeg" />\n <itunes:duration > ' + duration + '</itunes:duration >\n <guid isPermaLink = "false" > cepod10</guid >\n <itunes:explicit > no</itunes:explicit >\n <description >\nThe ever changing feed.\n</description >\n</item >\n';
    }

    document.getElementById("xml").innerText += '\n</channel>\n</rss>';
}

function downloadFile(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function updateImage(event) {
    document.getElementById("podImage").classList.remove("broken");
    document.getElementById("podImage").src = event.target.value;
}

function errorImage(event) {
    document.getElementById("podImage").classList.add("broken");
}

function updateTitle(event) {
    document.getElementById("title").innerText = event.target.value + " Part 1";
}
function updatePod(event) {
    document.getElementById("podName").innerText = event.target.value;
}