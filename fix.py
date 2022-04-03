from os import rename

def get_snippet():
    return '''
    <link rel="shortcut icon" href="assets/favicon.ico">
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-159388383-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'UA-159388383-1');

        var clicky_site_ids = clicky_site_ids || [];
        clicky_site_ids.push(101239814);
    </script>
    <script async src="//static.getclicky.com/js"></script>
    '''

rename('index.html', 'index_old.html')
with open('index_old.html') as r:
    content = r.read()
with open('index.html', 'w+') as w:
    content = content.replace(
        '<title>KOBILJON TOSHNAZAROV</title>',
        '<title>Kobiljon’s personal web page</title>'
    ).replace(
        '</title><style>',
        f'</title>{get_snippet()}<style>'
    ).replace(
        'https://www.notion.so/Kobiljon-s-portfolio-fd8835c1728345d4a57103d022d3626a',
        'https://qobiljon.notion.site/Kobiljon-s-portfolio-fd8835c1728345d4a57103d022d3626a'
    ).replace(
        'https://www.notion.so/Kobiljon-s-blog-089c451dad4a4f068bb10030b2827335',
        'https://qobiljon.notion.site/Kobiljon-s-blog-089c451dad4a4f068bb10030b2827335'
    )
    w.write(content)
