window.Search = React.createClass({
  getInitialState() {
    return {
      searchingText: ""
    };
  },

  handleChange: function(event) {
    var searchingText = event.target.value;
    this.setState({
      searchingText: searchingText
    });

    if (searchingText.length > 2) {
      this.props.onSearch(searchingText);
    }
  },

  handleKeyUp: function(event) {
    if (event.keyCode === 13) {
      this.props.onSearch(this.state.searchingText);
    }
  },

  render: function() {
    var styles = {
      fontSize: "1.25em",
      padding: "10px",
      width: "90%",
      marginTop: "20px",
      maxWidth: "350px",
      textAlign: "center"
    };

    return (
      <input
        type="text"
        onChange={this.handleChange}
        onKeyUp={this.handleKeyUp}
        placeholder="Tutaj wpisz wyszukiwaną frazę"
        style={styles}
        value={this.state.searchTerm}
      />
    );
  }
});
