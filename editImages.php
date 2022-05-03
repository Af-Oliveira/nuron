<?php
$filename = $_FILES['file']['name'];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="assets/css/plugins/Pintura.css">

    <style>
        .pintura-editor {
            --color-background: 255, 255, 255;
            --color-foreground: 0, 0, 0;
        }

        @media (prefers-color-scheme: dark) {
            html {
                color: #fff;
                background: #000;
            }

            .pintura-editor {
                --color-background: 0, 0, 0;
                --color-foreground: 255, 255, 255;
            }
        }

        .my-editor {
            height: 95vh;
        }
    </style>

    <title>Edit Image Test</title>
</head>

<body>
    <div class=".my-editor">
    </div>

    <script type="module">
        import {
            appendDefaultEditor
        } from './assets/js/vendor/Pintura.js';

        const pintura = appendDefaultEditor('.my-editor', {
            src: '<?php echo $filename; ?>',
            imageCropAspectRatio: 1,
        });
    </script>

</body>

</html>