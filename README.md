# Scalable Vector Graphics
### Part 1: SVG Logo

In the previous assignment, you used the SVG logo, shown here, of the Southern Hemisphere Institute of Technology.

The logo consists of a machine-generated SVG <path> to represent simple shapes. This is not ideal. Not only this <path> is difficult to comprehend, but also it makes changes difficult (can you see any other cons?). Consequently, you are asked to re-do the logo using appropriate high-level SVG objects other than <path>s (e.g., <rect>s, <circle>s). Your revised logo should be almost identical to the current logo.

You need to do the logo by hand — that is, you are not allowed to use a design tool such as _Inkscape_.

### Part 2: Secret Research at Southern Hemisphere Institute of Technology

The service you need to use for this assignment is available to download from [canvas.auckland.ac.nz/courses/60522/files/7467641](https://canvas.auckland.ac.nz/courses/60522/files/7467641). Unzip it to a local folder. Start PowerShell (if you are on Windows) or Terminal (of you are on MacOS) and change directory (`cd`) to this local folder where the server is unzipped into. Issue the command `dotnet A3.dll`. You can test if the server is functional by trying the favicon link [http://localhost:5000/logo-192x192.png (Links to an external site.)](http://localhost:5000/logo-192x192.png), the version endpoint [http://localhost:5000/api/GetVersion (Links to an external site.)](http://localhost:5000/api/GetVersion), and the staff list endpoint [http://localhost:5000/api/GetAllStaff (Links to an external site.)](http://localhost:5000/api/GetAllStaff). You can also monitor your command window (i.e., PowerShell or Terminal) to see if there are any server errors.

We discovered an undocumented endpoint Professor Dumbledore at the Southern Hemisphere Institute of Technology created and we would like you to investigate this. The endpoint is this: [http://localhost:5000/api/S  (Links to an external site.)](http://localhost:5000/api/S). We think it is some daily data Professor Dumbledore collected over the last two weeks, and we would like you to help visualize the graph dynamically.

To this end, write a single-page web application that consumes this data, and renders the corresponding infographics. For verification, include the source data below the infographics.

Each data value should be represented by the small icon of the Southern Hemisphere Institute of Technology. This icon should be dynamically obtained from the endpoint at [http://localhost:5000/api/GetIcon (Links to an external site.)](http://localhost:5000/api/GetIcon) which contains an SVG symbol that you need to _use_. Each alternate icon in the infographics must be turned upside down so as to pack them tight. The example below illustrates a possible infographics for the data [41,19,23,6,13,32,27,6,42,33,30,37,34,6].
	
### The Secret Pieces

![graphics](https://cws.auckland.ac.nz/335a3x/SampleInfoGraphics.svg)

[41,19,23,6,13,32,27,6,42,33,30,37,34,6]
	
### Submission

Your SVGs should render in any modern browser and should scale. You should not use any third party libraries or frameworks.

Please submit to the [Assignment Dropbox Links to an external site.](https://adb.auckland.ac.nz/) the following items.

1.  The revised logo SVG file for Part 1 (called _UPI.svg_ where _UPI_ is your UPI). A size limit of 300 kB will apply.
2.  The HTML file for Part 2 (called _UPI.html_ where _UPI_ is your UPI). A size limit of 300 kB will apply.
3.  The JavaScript file for Part 2 (called _UPI.js_ where _UPI_ is your UPI). A size limit of 300 kB will apply.
4.  The CSS file for Part 2 (called _UPI.css_ where _UPI_ is your UPI). A size limit of 300 kB will apply.
