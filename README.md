# node-plus-c
A node server that can execute c and c++ code natively.
Why is this useful? Many reasons, try executing auth on a separate thread.

## RUN
1. `$ git clone https://github.com/CHBaker/node-plus-c.git`
2. `$ cd src/app`
3. `$ node server.js`
4. open [http://localhost:5050](http://localhost:5050)

## Where is the C code?

The module is inside the 'c' folder, the binding.gyp file tells the command `$ gyp configure`
where it is and then it builds the module into a Node Addon.

Then, in server.js, we import it and call the function just like any other JS module.


## Sources

This project was made following the [node docs](https://nodejs.org/api/addons.html#addons_hello_world)
