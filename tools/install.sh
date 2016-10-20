#!/usr/bin/bash env



install () {
    check () {
        function node() {
            if type "node" > /dev/null 2>&1; then
			    echo "Node.js is installed."
		    else
			    : 
		    fi
        }

        function logica() {
            
        }

        node
    }

    check
}

install