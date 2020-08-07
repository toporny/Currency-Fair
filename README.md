Website mockup built with AngularJS  framework.
Focused mainly on "pixel perfect" view rather than programming functionalities.

## How to build

- npm install
- start http server

## Deliverables

### A HTML, CSS & JavaScript template.

HTML code are stored in **app/my-dashboard/my-dashboard.html**
and contains dashboard markup and modal in one file.

These SASS file keep definitions for each part of website
- main.sass
- content.sass
- modal.sass

Main CSS file was generated based SASS file which is stored in **/styles/all.sass**


### A brief presentation of the process
Started from scratch with empty sublime text editor. 
"Pixel perfect" and "Live-css-editor" chrome extension plugins were used in this process:
https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi
and
https://github.com/webextensions/live-css-editor

### Problems appeared:
- mobile view wasn't provided - I had to implement "my own view".
- colors table wasn't provided - I had to use color picker which wasn't inaccurate especially on text (that's why SASS file has so many color definitions.

### To do in future
- Split SASS/CSS file into smaller files and keep 'dashboard' and 'modal' (and other different modules) definitions separately. 
- move modal from **app/my-dashboard/my-dashboard.html** to separate file.
- modyfy package.json json and watch and recompiling SASS file automaticaly. 

### GitHub 
https://github.com/toporny/Currency-Fair

### URL:
http://example3.techduinn.com/

