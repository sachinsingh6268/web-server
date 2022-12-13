// ### The res.end() function is used to end the response process. This method actually comes from the Node core, specifically the response.end() method of HTTP.ServerResponse. Used to quickly end the response without any data.

// res.end([data] [, encoding])
// Parameters: The default encoding is ‘utf8’ and the data parameter is basically the data with which the user wants to end the response.
// Return Value: It returns on Object.



// ### The res.send() function basically sends the HTTP response. The body parameter can be a String or a Buffer object or an object or an Array.

// res.send( [body] )
// Parameter: This function accepts a single parameter body that describe the body which is to be sent in the response.
// Returns: It returns an Object.



// ### The res.writeHead method is for returning a status code to the browser, and the browser will throw an error if it is a client-side status code or server-side status code.



// ### The response.write() (Added in v0.1.29) method is an inbuilt Application program Interface of the ‘http’ module which sends a chunk of the response body that is omitted when the request is a HEAD request. If this method is called and response.writeHead() has not been called, it will switch to implicit header mode and flush the implicit headers.

// The first time response.write() is called, it will send the buffered header information and the first chunk of the body to the client. The second time response.write() is called, Node.js assumes data will be streamed and sends the new data separately. That is, the response is buffered up to the first chunk of the body. A chunk can be a string or a buffer. If the chunk is a string, the second parameter specifies how to encode it into a byte stream. And the callback will be called when this chunk of data is flushed. In order to get a response and a proper result, we need to import ‘http’ module.



const http = require('http');
const fs = require('fs');
const { text } = require('stream/consumers');
const port = 2000;

var server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    // res.write("Hello Guys, It's my first web server in Nodejs");
    fs.readFile('index.html',(error,data)=>{
        if(error){
            res.writeHead(404);
            res.write("Error:File Not Found");
        } else{
            res.write(data);
        }
        res.end();

    })
});

server.emit


server.listen(port,(error)=>{
    if(error){
        console.log("There is some problem in the server");
        console(error);
    } else{
        console.log("Server is Running Fine !!");
    }
})


// ***** SOME IMPORTANT THINGS ********


// 1. Environment Variable:  The two fundamental concepts of any programming language are variables and constants. As we know that constants and variables both represent the unique memory locations that contain data the program uses in its calculations.

// The variable which exists outside your code is a part of your server environment and can help you by both streamlining and making more secure the process of running your script and applications.

// During the application initialization, these are loaded into the process.env and accessed by suffixing the name of the variable.

// Environment variables in backend applications relies on the commands of the operating system to define the environment variables along with their value. A system administrator may define it through a shell-script instead of a CLI interface. Environment variables typically aren’t globally accessible across the operating system, they are usually session-specific.

//Environment variables provide information about the environment in which the process is running. We use Node environment variables to handle sensitive data like passwords, which we shouldn't hard code, or configuration details that might change between runs, like what port a server should listen on.



// 2. "--save-dev" commands saves the name and version of the package being installed in the dev-dependency object. As developers who are just getting started or want to build an application that can be easily deployed without any problem this difference is a must know.



// 3. DotEnv is a lightweight npm package that automatically loads environment variables from a.env file into the process. Dotenv is a zero-dependency module that loads environment variables from a.env file into process.env . Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.



// 4. The dotenv package for handling environment variables is the most popular option in the Node.js community. We can create an ".env" file in the application's root directory that contains key/value pairs defining the project's required environment variables.



// 5. Dev Dependencies: In package.json file, there is an object called as dev Dependencies and it consists of all the packages that are used in the project in its development phase and not in the production or testing environment with its version number. So, whenever we want to install any library that is required only in our development phase then we can find it in the dev Dependencies object. 
// npm install <package name> --save-dev
 


// 6. Dependencies: In package.json file, there is an object called dependencies and it consists of all the packages that are used in the project with its version number. So, whenever we install any library that is required in our project that library we can find it in the dependencies object.  Syntax is --> npm install <package name>




// 7. Peer Dependencies: In package.json file, there is an object called as peerDependencies and it consists of all the packages that are exactly required in the project or to the person who is downloading and the version numbers should also be the same. That is the reason they were named as peerDependencies. The best example is ‘react’ which is common in every project to run similarly. 
// Note: These dependencies are not automatically installed. npm gives a warning message whenever there is a peer Dependency and these are different dependencies compared to the above-discussed dependencies.





