function genXML() {
    var filname = document.getElementById("filename").value;
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var image = document.getElementById("image").value;

    document.getElementById("xml").innerText = '<?xml version="1.0" encoding="UTF-8" ?>\n<rss xmlns:googleplay="http://www.google.com/schemas/play-podcasts/1.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:rawvoice="http://www.rawvoice.com/rawvoiceRssModule/" xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0">\n  <channel>\n    <title>NP</title>\n    <googleplay:author>The Feed</googleplay:author>\n    <rawvoice:rating>TV-G</rawvoice:rating>\n    <rawvoice:location>Rio de Janeiro, Brazil</rawvoice:location>\n    <rawvoice:frequency>Daily</rawvoice:frequency>\n    <author>NP</author>\n    <itunes:author>The Feed</itunes:author>\n    <itunes:email>feed@example.com</itunes:email>\n    <itunes:category text="Technology" />\n    <image>\n<url>https://m.media-amazon.com/images/M/MV5BOTU2YmNjN2EtMzk4Yy00NzQxLTk3NzEtYmYwZmFiNDVkN2I4XkEyXkFqcGc@._V1_.jpg</url>\n<title>Audio Feed</title>\n<link>https://adir.dev/audio/</link>\n    </image>\n    <itunes:owner>\n<itunes:name>The Feed</itunes:name>\n<itunes:email>feed@example.com</itunes:email>\n    </itunes:owner>\n    <itunes:keywords>Audio Feed</itunes:keywords>\n    <copyright>The Feed</copyright>\n    <description>The ever changing feed.</description>\n    <googleplay:image href="https://m.media-amazon.com/images/M/MV5BOTU2YmNjN2EtMzk4Yy00NzQxLTk3NzEtYmYwZmFiNDVkN2I4XkEyXkFqcGc@._V1_.jpg" />\n    <language>en-us</language>\n    <itunes:explicit>no</itunes:explicit>\n    <pubDate>Sat, 05 Apr 2025 13:00:00 GMT</pubDate>\n    <link>https://adir.dev/audio/au.xml</link>\n    <itunes:image href="https://m.media-amazon.com/images/M/MV5BOTU2YmNjN2EtMzk4Yy00NzQxLTk3NzEtYmYwZmFiNDVkN2I4XkEyXkFqcGc@._V1_.jpg" />\n';

    if (number == '') {
  number = 1;
    }
    var i;
    for (i = 0; i < number; i++) {
  document.getElementById("xml").innerText += '\n<item>\n<author>The Feed</author>\n<itunes:author>The Feed</itunes:author>\n<title>NP Part 1</title>\n<pubDate>Sun, 30 Mar 2025 13:00:00 GMT</pubDate>\n<enclosure url="https://adir.dev/audio/Normal People-Part01.mp3" type="audio/mpeg" />\n<itunes:duration>01:13:28</itunes:duration>\n<guid isPermaLink="false">cepod10</guid>\n<itunes:explicit>no</itunes:explicit>\n<description>\nThe ever changing feed.\n</description>\n</item>\n';
    }

    document.getElementById("xml").innerText += '\n</channel>\n</rss>';
}