/**
 * Created by Harry Kurniawan on 3/9/16.
 */
 "use strict";

// Quote function
window.__quote = React.createClass({

  _setQuote: function(order) {
    
    var a = this.props.param.quote[order];
    
    // Set quote
    this.setState({
      quote: a
    })

  },

  // Initial component
  getInitialState: function() {

    // Define state mounted
    return {
      mounted: !1
    }

  },

  // Function for mount the component
  componentDidMount: function() {
    
    // Set state mounted
    this.setState({
      mounted: !0
    }), 

    // Call inline function with order parameter
    this._setQuote(this.props.order)
  },

  // Render the component
  render: function() {
    return this.state.mounted && React.createElement("p", null, this.state.quote)
  }

}), 

// Skill function
window.__skills = React.createClass({

  // Render the component
  render: function() {

  	// Define custom variable for style
  	var thePadding = 0;
  	var group = 1;

  	// Start - create element with class attribute for parent div
    return React.createElement("div", {
      className: "container"
    },

  	// Looping skills data (group)
    this.props.param.map(function(data) {

    	// Simple logic set padding for styling
    	thePadding = thePadding + 100;
    	if (thePadding >= 400) {
    		thePadding = 50;
    	}

  	// Start - create element with class attribute for child div
      return React.createElement("div", {
        className: "row"
      }, 


  	  // Looping skills data (item)
      data.row.map(function(detail) {

  		// Create element with inline style attribute
        return React.createElement("div", {
          style: {
            paddingLeft: thePadding + "px",
            backgroundColor: "black"
          }
        },

	        React.createElement("div", {
	          style: {
	            marginTop: "35px",
	            marginBottom: "35px",
	            paddingTop: "15px",
	            paddingBottom: "15px",
	            paddingLeft: "10px",
	            color: "white",
	            backgroundColor: "#96281B"
	          }
	        }, detail.name)

        )

  	
  		// End - create element with class attribute for child div
      }))


  	// End - Create element with class attribute for parent div
    }))


  }


})