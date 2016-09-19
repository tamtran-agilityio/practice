<?php
  function getHeader() {
    $string = `<!DOCTYPE html>
                    <html>
                      <head>
                        <meta charset="utf-8">
                        <title>Ecommer demo</title>
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width">
                      </head>\n
                    <body>\n`;
    echo $string;
  }

  function getFooter() {
    $string = `
      <script src=""></script>'
    `
    echo $string;
    echo "\n </body>\n </html>";
  }
?>